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

function searchInDir(dirEntry, find, replaceWith) {
  if (dirEntry.isDirectory) {
    var files = [];
    var textarea = document.querySelector("#result");
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

document.querySelector("#choose_dir").addEventListener('click', function(e) {
  chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(theEntry) {
    if (!theEntry) {
      output.textContent = 'No Directory selected.';
      return;
    }
    // use local storage to retain access to this file
    chrome.storage.local.set({'dir': chrome.fileSystem.retainEntry(theEntry)});
    document.querySelector("#dir").textContent = theEntry.fullPath;;
  });
});


document.querySelector("#search").addEventListener('click', function(e) {
  chrome.storage.local.get('dir', function(storage) {
    if (storage && storage.dir) 
      chrome.fileSystem.restoreEntry(storage.dir, function(entry) {
        searchInDir(entry,document.querySelector("#find").value, document.querySelector("#replaceWith").value);
      });
  });
});

chrome.storage.local.get('dir', function(items) {
  if (items.dir) {
    // if an entry was retained earlier, see if it can be restored
    chrome.fileSystem.isRestorable(items.dir, function(bIsRestorable) {
      // the entry is still there, load the content
      console.info("Restoring " + items.dir);
      chrome.fileSystem.restoreEntry(items.dir, function(dir) {
        if (dir)
          document.querySelector("#dir").textContent = dir.fullPath;;
      });
    });
  }
});

