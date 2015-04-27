document.getElementById('start-button').onclick = function() {
	chrome.devtools.inspectedWindow.getResources(function(ar) { 
		ar[0].getContent(function(content) {
			chrome.extension.sendMessage({ type: 'mainHtml', content: content, tabId: chrome.devtools.inspectedWindow.tabId },function() {});
//			var js_encoded = '[' + content.split('\n').map(function(line) { return "'" + line.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + "'" } ).join(',') + ']';
//			chrome.devtools.inspectedWindow.eval("onMainHtml("+js_encoded+")", { useContentScriptContext: true });

		})
	} )
}
// chrome.devtools.inspectedWindow.reload({
// 	 injectedScript: 'alert(1)';
// });

// chrome.devtools.inspectedWindow.onResourceAdded.addListener(function(x) { 
//   console.log('added ' +  x.type + ' ' + x.url);
// } );
// chrome.devtools.inspectedWindow.getResources(function(ar) { 
//   console.log(ar.map(function(x) { return x.type + ' ' + x.url } ).join('\n'));
// } );
