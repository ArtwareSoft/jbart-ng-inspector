// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.sendMessage(tab.id,'click',function() {});
//   chrome.webNavigation.onCompleted.addListener(function(a,b,c) {
//   })
// });


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




