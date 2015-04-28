function start(inLocalHost) {
	chrome.devtools.inspectedWindow.getResources(function(ar) { 
		ar[0].getContent(function(content) {
			var baseDir = inLocalHost ? 'http://localhost:8081/jbart/jbart-ng-inspector/' : '//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/'; 
			var htmlAfterAngular = '<script src="'+baseDir+'ng-inspector-interception.js?'+new Date().getTime()+'"></script>';

			content = content.replace(/(<script src="[^"]*angular.min.js"><\/script>)/g,'$1'+htmlAfterAngular);

			var js_encoded = '[' + content.split('\n').map(function(line) { return "'" + line.replace(/\\/g,'\\\\').replace(/\n/g,'').replace(/'/g,"\\'") + "'" } ).join(',\n  ') + ']';

			var code = 'if (!localStorage.getItem("jb") || (new Date().getTime()) - Number(localStorage.getItem("jb")) > 1000 ) { \n';
			code += 'console.log((new Date().getTime()) - Number(localStorage.getItem("jb"))); \n';
			code += 'localStorage.setItem("jb",new Date().getTime());\n';
			code += 'document.open();\n';
			code += js_encoded + '.forEach(function(line) { document.write(line); });\n';
			code += 'document.close();\n';
//			code += 'start('+ (inLocalHost ? 'true' : 'false') + ');'
			code += '}';

			chrome.devtools.inspectedWindow.reload({ injectedScript: code });
		})
	} )
}

document.getElementById('start-button').onclick = function() {
	start(false);
}

document.getElementById('start-button-localhost').onclick = function() {
	start(true);
}

