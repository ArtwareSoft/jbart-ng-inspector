function start(inLocalHost) {
	var tabId = chrome.devtools.inspectedWindow.tabId;
	chrome.devtools.inspectedWindow.eval('window.angular.version.full',function(ngVersion,isException) {
		chrome.runtime.sendMessage({ type: 'inspectAngular', version: ngVersion, tabId: tabId, inLocalHost: inLocalHost });
	})
}

document.getElementById('start-button').onclick = function() { start(false); }
document.getElementById('start-button-localhost').onclick = function() { start(true); }


// function openWindow(inLocalHost) {
// 	var baseDir = inLocalHost ? 'http://localhost:8081/jbart/jbart-ng-inspector/' : '//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/'; 
// 	var code = '';
// 	code += 'var e1 = document.createElement("script"); e1.setAttribute("charset","UTF-8"); e1.src="'+baseDir+'ng-inspector-code.js?" + new Date().getTime();document.head.appendChild(e1);';
// 	code += 'var e2 = document.createElement("link"); e2.rel="stylesheet"; e2.href="'+baseDir+'ng-inspector.css?" + new Date().getTime();document.head.appendChild(e2);';

// 	chrome.devtools.inspectedWindow.eval(code,function(result,isException) {
// 		debugger;
// 	});
// }



// document.getElementById('open-button').onclick = function() { openWindow(false); }
// document.getElementById('open-button-localhost').onclick = function() { openWindow(true); }

