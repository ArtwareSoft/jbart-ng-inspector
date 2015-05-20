document.querySelector("#choose_dir").addEventListener('click', function(e) {
  chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(theEntry) {
    if (theEntry) {
	    chrome.storage.local.set({'dir': chrome.fileSystem.retainEntry(theEntry)});
	    chrome.runtime.sendMessage(null,{ op: 'saveInternal'});
	    chrome.app.window.current.close();
    }
  });
});