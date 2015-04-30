(function() {
	var $;
	window.jbart = window.jbart || {};

	showMainWindow();

	function showMainWindow() {
		if (document.readyState == 'loading')
			return setTimeout(showMainWindow,1000);

		$ = angular.element;
		$(document.body).append("<div id='jb-inspector-top' />");

		var $cmWrapper = $('<div/>');
		openStudioPopupWindow({ 
			title: 'jbart inspector',
			content: $cmWrapper
			// content: $('<div/>').attr('id','jb-inspector-version').text('angular version = ' + window.angular.version.full)
		});
		openCodemirror($cmWrapper);
	}

	function openCodemirror($cmWrapper) {
		$(document.head).append($("<script/>").attr('src','//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/codemirror.js'));
		$(document.head).append($("<link/>").attr('href','//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/codemirror.css').attr('rel','stylesheet').attr('type',"text/css"));
		checkLoad();

		function checkLoad() {
			if (!window.CodeMirror)
				setTimeout(checkLoad, 500);
			else
				codemirrorLoaded();
		}
		function codemirrorLoaded() {
			var template = jbInspect.templates[Object.keys(jbInspect.templates)[0]];
		  editor = CodeMirror($cmWrapper[0], { mode: "htmlmixed", value: template, extraKeys: { "Ctrl-Space": "autocomplete" } });
		}
	}

	// options include: title, content
	function openStudioPopupWindow(options) {
		var frame = $('<div class="jbart-window-frame" />');
		frame.append($('<div class="jbart-window-title" />').text(options.title));
		var closeBtn = $('<button class="jbart-window-close" />').text('×');
		frame.append(closeBtn);
		frame.append($('<div class="jbart-window-content" />').append(options.content));

		closeBtn.on('click',function() {
			frame.remove();
		})
		studioPopupWindowDragTitle(frame);

		$(document.querySelector('#jb-inspector-top')).append(frame[0]);

		return frame;
	}

	function studioPopupWindowDragTitle(frame) {
		var $title = frame.find('.jbart-window-title');
		var dragState = null;
		var dialog = {};

		if (!$title[0]) return;
		// if (id && sessionStorage.getItem(id)) {
		// 	var pos = JSON.parse(sessionStorage.getItem(id));
		// 	$(frame).css({ top: pos.top, left: pos.left });
		// }

		$title.mousedown(function(e) {
			if (!dragState) {
				dragState = { mouseX: e.clientX, mouseY: e.clientY, frameX: frame[0].offsetLeft, frameY: frame[0].offsetTop };
				jb_trigger(dialog, 'startDrag');
			}

			jb_setWindowEvent('mousemove',mouseMove);
			jb_setWindowEvent('mouseup',mouseUp);
		});

		function mouseMove(e) {
			if (dragState) 
			  frame.css({ 
				top: Math.max((e.clientY) - dragState.mouseY + dragState.frameY, 0) + 'px', 
				bottom: 'inherit', right: 'inherit',
				left: e.clientX - dragState.mouseX + dragState.frameX + 'px'
			  });
		}

		function mouseUp(e) {
			dragState = null;
			jb_restoreWindowEvent(['mousemove','mouseup']);
			jb_trigger(dialog, 'endDrag');
			if (id)
				sessionStorage.setItem(id, JSON.stringify({ top:$(frameElem).css('top'), left:frame.css('left') }));
		}
	}

	function jb_trigger() {}

	function jb_setWindowEvent(eventName,callback) {
	  jb_path(jbart,['windowOrigEvents',eventName],window['on'+eventName]);
	  window['on'+eventName] = callback;
	}

	function jb_restoreWindowEvent(events) {
	  events = jb_toarray(events);
	  for(var i=0;i<events.length;i++) {
	    window['on'+events[i]] = jb_path(jbart,['windowOrigEvents',events[i]]);
	    jb_path(jbart,['windowOrigEvents',events[i]],null);
	  }
	}

	function jb_path(object,path,value) {
	  var cur = object;

	  if (typeof value == 'undefined') {  // get
	    for(var i=0;i<path.length;i++) {
	      cur = cur[path[i]];
	      if (cur == null || typeof cur == 'undefined') return null;
	    }
	    return cur;
	  } else { // set
	    for(var i=0;i<path.length;i++)
	      if (i == path.length-1)
	        cur[path[i]] = value;
	      else
	        cur = cur[path[i]] = cur[path[i]] || {};
	    return value;
	  }
	}


}());
