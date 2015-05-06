// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// 	if (request.type == 'mainHtml')
// 		chrome.tabs.sendMessage(request.tabId,{ type: 'mainHtml', content: request.content },function() {});	
// });


// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.tabs.sendMessage(tab.id,'start',function() {});
// 	// var code = 'var xx = document.createElement("script"); xx.src="//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-code.js"; document.head.appendChild(xx); ';
// 	// chrome.tabs.executeScript(tab.id,{ code: code },function(){})
//   // chrome.tabs.sendMessage(tab.id,'click',function() {});
//   // chrome.webNavigation.onCompleted.addListener(function(a,b,c) {
//   // })
// });

var tabIdsToMonitor = {};

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	if (details.url.match(/\/angular\.js$/) || details.url.match(/\/angular\.min\.js$/))
		if (details.url.indexOf('fromjbart') == -1 && tabIdsToMonitor[details.tabId]) {
            var url = 'http://jbartdb.appspot.com/jbart-angular.js?ver=' + tabIdsToMonitor[details.tabId].version;
            if (tabIdsToMonitor[details.tabId].inLocalHost) url += '&local=true';
	  		return { redirectUrl: url }
        }
},{ urls: ['*://*/*'] },["blocking"]);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (typeof(request) == 'object' && request.type == 'inspectAngular') {
    	var firstTime = !tabIdsToMonitor[request.tabId];
    	tabIdsToMonitor[request.tabId] = request;
    	if (firstTime)
    		chrome.tabs.reload(request.tabId);
    }
  }
);  
