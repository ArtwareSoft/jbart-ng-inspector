/*
function start(inLocalHost) {
	setTimeout(function() {
		var baseDir = inLocalHost ? 'http://locahost:8081/jbart-ng-inspector/' : '//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/'; 

		var xx = document.createElement("script"); 
		xx.src=baseDir+"ng-inspector-code.js?" + new Date().getTime();
		document.head.appendChild(xx);

		var xx2 = document.createElement("link"); 
		xx2.setAttribute('href',baseDir+'ng-inspector.css?' + new Date().getTime()); 
		xx2.setAttribute('rel',"stylesheet");
		xx2.setAttribute('type',"text/css");

		document.head.appendChild(xx2);
	},100);
}

try {
	if (window.parent != window && window.location.href == window.parent.location.href) {
		document.documentElement.innerHTML = '';
	}
} catch(e) {}

chrome.storage.local.get(['jb-document-time','jb-document-html'],function(result) {
	var time = result['jb-document-time'] || 0;
	var html = result['jb-document-html'] || 0;
	if (time && html && window.parent != window) {
		var diff = new Date().getTime() - time;
		if (diff < 10000) {	// less than one second
			var htmlAfterAngular = '<script>';
			htmlAfterAngular += 'window.parent.initJbartInspector(window,document);';
			htmlAfterAngular += '</script>';

			html = html.replace(/(<script src="[^"]*angular.min.js"><\/script>)/g,'$1'+htmlAfterAngular);

			document.open();
			document.write(html);
			document.close();
		}
	}
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request && request.type == 'html') {
		chrome.storage.local.set({ 'jb-document-html': request.content })
		chrome.storage.local.set({ 'jb-document-time': new Date().getTime() })
	}
});


*/