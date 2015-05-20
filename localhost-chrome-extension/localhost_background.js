var tabIdsToMonitor = {};

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  console.log(details.url);
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
    var basicCode = 'jbn_toolbarClick()';
    var code = 'var xx = document.createElement("script");  xx.innerHTML = "' + basicCode + '"; document.head.appendChild(xx);';
    chrome.tabs.executeScript(tab.id,{ code: code },function(){})
  }
  listenToSave(tab.id);

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

function listenToSave(tabId) {
  var lastSaveId = null;
  listen();

  function listen() {
    var code = 'document.querySelector("#jbn-save") && document.querySelector("#jbn-save").textContent';
    chrome.tabs.executeScript(tabId,{ code: code }, function(saveContent) { 
      if (saveContent[0]) {
        var parts = saveContent[0].split("----JB-SEPARATOR----");
        if (parts.length == 2) {
          var prevValue = parts[0];
          var value = parts[1];
          chrome.tabs.executeScript(tabId,{ code: 'document.querySelector("#jbn-save").innerHTML=""' }, function() {
            setTimeout(listen, 100);        
          });
          save(tabId,prevValue,value);
          return;
        }
      }
      setTimeout(listen, 100);
    });
  }
}

function save(tabId,find,replace) {
  var saveAppId = "dlkihbhmbjajiadbkbgenjhnpdghlpom";
  chrome.runtime.sendMessage(saveAppId, { op: 'save', tabId: tabId, find:find, replace:replace });
}

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request && request.op == 'saved')
      chrome.tabs.executeScript(request.tabId,{ code: 'alert("' + request.message + '")' });
    });