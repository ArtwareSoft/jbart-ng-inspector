var jbCurrentSave = null;

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
  	if (request && request.op == 'save') {
      save(request.find, request.replace, function(result) {
        sendResponse({ op: 'saved', message: 'saved succesfully to ' + result.fileName });
      }, function(error) {
        sendResponse({ op: 'error', message: error });
      });
  	}
    return true;
    // else if (request && request.op == 'save-app-installed')
    //   sendResponse(true);
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request && request.op == 'saveInternal' && jbCurrentSave)
      save(jbCurrentSave.find, jbCurrentSave.replace, jbCurrentSave.callback);
  });

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('main.html', {id:"fileWin", innerBounds: {width: 300, height: 450}});
});

function save(find,replace,success,error) {
  chrome.storage.local.get('dir', function(storage) {
    if (storage && storage.dir) 
      chrome.fileSystem.restoreEntry(storage.dir, function(entry) {
        searchInDir(entry, find, replace, success);
      });
    else {  // Dir never chosen
      error('Please choose dir before saving');
      // jbCurrentSave = { find:find, replace:replace, callback: success };
      // chrome.app.window.create('choose-dir.html', {id:"fileWin", innerBounds: {width: 800, height: 500}});
    }
  });  
}

function errorHandler(e) {
  console.error(e);
}

function readAsText(fileEntry, callback) {
  fileEntry.file(function(file) {
    var reader = new FileReader();

    reader.onerror = errorHandler;
    reader.onload = function(e) {
      callback(e.target.result);
    };

    reader.readAsText(file);
  });
}

function write(fileEntry, content, callback) {
  chrome.fileSystem.getWritableEntry(fileEntry, function(writableFileEntry) {
      writableFileEntry.createWriter(function(writer) {
        writer.onerror = errorHandler;
        writer.onwriteend = callback;
        // writer.seek(0);
        var blob = new Blob([content], {type: 'text/plain'});
        writer.write(blob);
    }, errorHandler);
  });
}

function searchInDir(dirEntry, find, replaceWith, callback) {
  if (dirEntry.isDirectory) {
    var files = [];
    var textarea = document.querySelector("#result") || {};
    textarea.value = "";
    readDir(dirEntry);

    function readDir(entry) {
      var dirReader = entry.createReader().readEntries(function(results) {
        results.forEach(function(item) { 
          if (item.isDirectory)
            readDir(item);
          else {
            if (item.fullPath.indexOf('.html') != -1) {
              readAsText(item, function(content) {
                if (content.indexOf(find) != -1)
                  write(item,content.replace(find, replaceWith),function() {
                    callback({ fileName: item.fullPath });
                    textarea.value = "Writing to " +  item.fullPath;
                  })
                  
              });  
            }
          }            
        });
      }, function(error) {
      });
    }
  }
}