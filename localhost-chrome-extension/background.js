var tabIdsToMonitor = {};

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (details.url.match(/\/angular\.js$/) || details.url.match(/\/angular\.min\.js$/)) {
    chrome.pageAction.show(details.tabId);
    if (details.url.indexOf('fromjbart') == -1 && tabIdsToMonitor[details.tabId]) {
      var url = 'http://jbartdb.appspot.com/jbart-angular.js?ver=' + tabIdsToMonitor[details.tabId].version;
      if (tabIdsToMonitor[details.tabId].inLocalHost) url += '&local=true';
        return { redirectUrl: url }
    }
  }
},{ urls: ['*://*/*'] },["blocking"]);

chrome.pageAction.onClicked.addListener(function(tab) {
  var firstTime = !tabIdsToMonitor[tab.id];
  if (firstTime) {
      var basicCode = "var s = document.createElement('span'); s.innerHTML = window.angular.version.full; s.setAttribute('id','jbn-version'); document.body.appendChild(s);";
      // var basicCode = "chrome.runtime.sendMessage('" + chrome.runtime.id + "',{ type: 'ng-version', version: window.angular.version.full, tabId: " + tab.id + ", inLocalHost: true });";
      var code = 'var xx = document.createElement("script");  xx.innerHTML = "' + basicCode + '"; document.head.appendChild(xx);';
      chrome.tabs.executeScript(tab.id,{ code: code });
      checkVersion(tab.id);
  } else {
    var basicCode = 'jbn_openStudioMainWindow()';
    var code = 'var xx = document.createElement("script");  xx.innerHTML = "' + basicCode + '"; document.head.appendChild(xx);';
    chrome.tabs.executeScript(tab.id,{ code: code },function(){})
  }

  function checkVersion() {
    var code = 'document.querySelector("#jbn-version") && document.querySelector("#jbn-version").innerHTML';
    chrome.tabs.executeScript(tab.id,{ code: code }, function(version) { 
      if (version) {
        tabIdsToMonitor[tab.id] = { version: version, tabId: tab.id, inLocalHost: true };
        chrome.tabs.reload(tab.id);
      } 
      else
        setTimeout( checkVersion, 100);
    } );
  }

});
