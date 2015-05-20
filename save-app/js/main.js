document.querySelector("#select_dir").addEventListener('click', function(e) {
  chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(theEntry) {
    if (theEntry) {
	    chrome.storage.local.set({'dir': chrome.fileSystem.retainEntry(theEntry)});
	    refreshDir();
    }
  });
});

document.querySelector("#clean_dir").addEventListener('click', function(e) {
  chrome.storage.local.set({'dir': null});
  document.querySelector("#current-dir").setAttribute('value',"");
	refreshDir();
});


function refreshDir() {
	chrome.storage.local.get('dir', function(items) {
	  if (items.dir) {
	    chrome.fileSystem.isRestorable(items.dir, function(bIsRestorable) {
	      chrome.fileSystem.restoreEntry(items.dir, function(dir) {
	        if (dir)
	        	document.querySelector("#current-dir").setAttribute('value',dir.fullPath);
	      });
	    });
	  }
	});
}
refreshDir();