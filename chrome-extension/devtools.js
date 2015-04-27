chrome.devtools.panels.create(
    'jbart ng-inspector',
    null, // No icon path
    'panel.html',
    null // no callback needed
);

// chrome.devtools.inspectedWindow.getResources(function(ar) { 
// 	ar[0].getContent(function(content) {
// 		var js_encoded = '[' + content.split('\n').map(function(line) { return "'" + line.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + "'" } ).join(',') + ']';
// 		chrome.devtools.inspectedWindow.eval("onMainHtml("+js_encoded+")", { useContentScriptContext: true });
// 	})
// } )


