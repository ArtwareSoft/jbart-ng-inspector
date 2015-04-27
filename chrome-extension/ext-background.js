chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.type == 'mainHtml')
		chrome.tabs.sendMessage(request.tabId,{ type: 'mainHtml', content: request.content },function() {});	
});


chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id,'start',function() {});
	// chrome.tabs.insertCSS(null,{ file: '//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-code.js' },function(){})
	// chrome.tabs.insertCSS(tab.id,{ file: '//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-code.js' },function(){})
	// chrome.tabs.insertCSS(tab.id,{ file: '//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector.css' },function(){})
	// var code = 'var xx = document.createElement("script"); xx.src="//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-code.js"; document.head.appendChild(xx); ';
	// chrome.tabs.executeScript(tab.id,{ code: code },function(){})
  // chrome.tabs.sendMessage(tab.id,'click',function() {});
  // chrome.webNavigation.onCompleted.addListener(function(a,b,c) {
  // })
});


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.type == 'document-start') {
//       chrome.webRequest.onBeforeRequest.addListener(function(details) {
//         console.log(details.url);
//         if (details.url.indexOf('?op=angularjs&url=') == -1)
//           if( details.url.indexOf('angular.js') >-1 || details.url.indexOf('angular.min.js') >-1) {
//             return { redirectUrl: 'http://localhost:8090/?op=angularjs&url='+encodeURIComponent(details.url) }
//   //          chrome.tabs.sendMessage(sender.tab.id,{ type: 'angular.js' },function() {});
//           }
          
//         return { cancel: false }

//       },{ urls: ['*://*/*'], tabId: sender.tab.id },["blocking"]);
//     }
//   }
// );  




