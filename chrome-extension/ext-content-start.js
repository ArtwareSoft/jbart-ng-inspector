if (window.parent != window && window.location.href == window.parent.location.href) {
	document.documentElement.innerHTML = '';
}

chrome.storage.local.get(['jb-document-time','jb-document-html'],function(result) {
	var time = result['jb-document-time'] || 0;
	var html = result['jb-document-html'] || 0;
	if (time && html) {
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


