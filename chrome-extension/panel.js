document.getElementById('start-button').onclick = function() {

	chrome.devtools.inspectedWindow.getResources(function(ar) { 
		ar[0].getContent(function(content) {

			var htmlAfterAngular = '<script src="//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-interception.js?'+new Date().getTime()+'"></script>';
//			var htmlAfterAngular = '<script>';
//			htmlAfterAngular += 'window.parent.initJbartInspector(window,document);';
//			htmlAfterAngular += '</script>';

			content = content.replace(/(<script src="[^"]*angular.min.js"><\/script>)/g,'$1'+htmlAfterAngular);


			var js_encoded = '[' + content.split('\n').map(function(line) { return "'" + line.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + "'" } ).join(',\n') + ']';

//			var code = 'debugger; window.jbLoaded=true; ' + js_encoded + '.forEach(function(line) { document.write(line); });'

			var code = 'if (!localStorage.getItem("jb") || (new Date().getTime()) - Number(localStorage.getItem("jb")) > 1000 ) { \n';
			code += 'console.log((new Date().getTime()) - Number(localStorage.getItem("jb"))); \n';
			code += 'localStorage.setItem("jb",new Date().getTime());\n';
			code += 'document.open();\n';
			code += js_encoded + '.forEach(function(line) { document.write(line); });\n';
			code += 'document.close();\n';
			code += '}';

			
			chrome.devtools.inspectedWindow.reload({ injectedScript: code });

//			chrome.extension.sendMessage({ type: 'mainHtml', content: content, tabId: chrome.devtools.inspectedWindow.tabId },function() {});
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
