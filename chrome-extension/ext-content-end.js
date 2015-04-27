
function onMainHtml(htmLines) {
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
	document.write('<script src="http://localhost:8090/js/ng-inspector-outer.js" ></script>');


	document.write('<div id="jb-all">outer<div id="jb-placeholder"><div id="jb-placeholder-inner"><iframe width="100%" height="100%" frameborder="0" src="'+window.location.href+'"/></div></div></div>');
	document.close();	
}

