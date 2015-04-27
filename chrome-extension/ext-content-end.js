/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == 'start') {
		var xx = document.createElement("script"); 
		xx.src="//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-code.js?" + new Date().getTime();
		document.head.appendChild(xx);

		var xx2 = document.createElement("link"); 
		xx2.setAttribute('href','//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector.css?' + new Date().getTime()); 
		xx2.setAttribute('rel',"stylesheet");
		xx2.setAttribute('type',"text/css");

		document.head.appendChild(xx2);
	}

	if (request.type == 'mainHtml') {
		chrome.storage.local.set({ 'jb-document-html': request.content })
		chrome.storage.local.set({ 'jb-document-time': new Date().getTime() })

		insertIFrame();
	}
});

function onMainHtml(htmLines) {
	debugger;
	chrome.storage.local.set({ 'jb-document-html': htmLines.join('\n') })
	chrome.storage.local.set({ 'jb-document-time': new Date().getTime() })

	insertIFrame();
//	evalOnWindow('window.location.reload();')
}

function evalOnWindow(str) {
	var scr = document.createElement('script');
	scr.innerHTML = str;
	document.head.appendChild(scr);
}

function insertIFrame() {
	document.open();
	document.write('<style>');
	document.write('* { box-sizing: border-box; }');
	document.write('body { margin: 0; background: #EBEBEB; }');
	document.write('#jb-placeholder { position: absolute; left:10px; right:10px; top: 40px; bottom: 10px; overflow: auto; }');
	document.write('#jb-placeholder-inner { padding: 10px;  background: #fff; height: 100%; border: 1px solid #ccc; border-radius: 1px; }');
	document.write('</style>');
	document.write('<script src="//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/ng-inspector-outer.js" ></script>');


	document.write('<div id="jb-all">outer<div id="jb-placeholder"><div id="jb-placeholder-inner"><iframe width="100%" height="100%" frameborder="0" src="'+window.location.href+'"/></div></div></div>');
	document.close();	
}

*/