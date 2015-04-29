(function() {
	var $;

	showMainWindow();

	function showMainWindow() {
		if (document.readyState == 'loading')
			return setTimeout(showMainWindow,1000);

		$ = angular.element;
		$('body').append("<div id='jb-inspector-top' />");

		openStudioPopupWindow({ 
			title: 'jbart inspector',
			content: $('<div/>').attr('id','jb-inspector-version').text('angular version = ' + window.angular.version.full)
		})
	}


	// options include: title, content
	function openStudioPopupWindow(options) {
		var frame = $('<div class="jbart-window-frame" />');
		$('<div class="jbart-window-title" />').text(options.title).appendTo(frame);
		var closeBtn = $('<button class="jbart-window-close" />').text('×').appendTo(frame);
		$('<div class="jbart-window-content" />').append(options.content).appendTo(frame);

		closeBtn.click(function() {
			frame.remove();
		})
		studioPopupWindowAddDrag(frame);

		$('#jb-inspector-top').append(frame[0]);

		return frame;
	}

	function studioPopupWindowAddDrag(frame) {

	}
}());
