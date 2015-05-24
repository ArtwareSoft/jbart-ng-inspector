(function() {
	if (window.jbInterceptionLoaded) return;
	window.jbInterceptionLoaded = true;

	window.jbart = window.jbart || { comps: {}, studio: {}, classes: {} };
	window.jbart_widgets = {};

	document.addEventListener("DOMContentLoaded",function() {
		jbn_initJQuery(function() {
			// todo: fix in cloud
			$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', location.protocol+'//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/jbart-ng-inspector.css') );
			$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'http://localhost:8081/jbart/jbart-ng-inspector/jbart-ng-inspector.css') );	
			$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', location.protocol+'//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/codemirror.css') );
			var el = document.createElement('script'); el.src = location.protocol+'//storage.googleapis.com/jbartlib/apps/jbart-ng-inspector/codemirror.js'; document.head.appendChild(el);
			
			jbn_initCodeMirror();
			setTimeout(jbn_onInspectorLoaded,100);
		});
	},false);

	function jbn_initJQuery(callback) {
		if (window.jQuery) return finish();
		var el = document.createElement('script'); el.src = location.protocol+'//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'; document.head.appendChild(el);

		doCheckForJQueryLoaded();

		function doCheckForJQueryLoaded() {
			if (window.jQuery) 
				finish();
			else
				setTimeout(doCheckForJQueryLoaded,100);
		}

		function finish() {
		    $.fn.findIncludeSelf = function(selector) { return this.find(selector).addBack(selector); }  
		    callback();
		}		
	}

	function jbn_initCodeMirror() {
		if (window.CodeMirror)
			jb_trigger(jbart,'CodeMirrorLoaded');
		else
			setTimeout( jbn_initCodeMirror, 100 );
	}



(function() {
	window.jbInspect = window.jbInspect || {};
	window.jbInspect.modules = window.jbInspect.modules || {};
	window.jbInspect.templates = window.jbInspect.templates || {};

	angular.module('jbartIntercept',['ng']).run(function($rootScope,$compile, $parse,$templateCache) {
		jbart.studio = jbart.studio || {};
		if (!jbart.studio.$rootScope)		// take only the first one
			angular.extend(jbart.studio, {$rootScope: $rootScope, $compile: $compile, $parse: $parse, $templateCache: $templateCache });
	})
	.config(function($provide) {
		$provide.decorator("$templateCache",function($delegate) {
			return { 
				put:function(k,v) {
					return jbn_putTemplateToCache(k,v,$delegate);
				},
				info: $delegate.info,				
				get:function(k) {
					return jbn_getTemplateFromCache(k,$delegate);
				},
				remove:function(k) { return $delegate.remove(k); }
			}
		})
	})



	var prevFunc = angular.module;
	angular.module = function(name,requires,configFN) {
		window.jbInspect.modules[name] = {};
		 if (requires && name.indexOf('ng') != 0)
		 	return prevFunc.call(angular,name,requires.concat(['jbartIntercept']),configFN);
		 else
			return prevFunc.call(angular,name,requires,configFN);
	}
}());

jb_component('bootstrap.itemlist',{
	type: 'itemlist.style',
	impl: {	$: 'customCssStyle', base: { $:'itemlist.default' }, cssClass: "bootstrap-list-group" }
});

jb_component('bootstrap.itemlistWithGroups',{
	type: 'itemlist.style',
	params: {
		type: { as:'string', type:'enum', values: 'primary,info'}
	},
	impl: function(context,type) {
		return jb_run(jb_ctx(context, { profile: 
			{ $: 'customCssStyle', base: { $:'itemlist.default' }, cssClass: "bootstrap-list-with-groups " + type } } ));
	}
});

jb_component('bootstrap.h1',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h1/>',
			cssClass: 'bootstrap-h1',
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('bootstrap.h2',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h2/>',
			cssClass: 'bootstrap-h2',
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('bootstrap.h3',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h3/>',
			cssClass: 'bootstrap-h3',
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('bootstrap.h4',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h4/>',
			cssClass: 'bootstrap-h4',
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('bootstrap.h5',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h5/>',
			cssClass: 'bootstrap-h5',
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('bootstrap.h6',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h6/>',
			cssClass: 'bootstrap-h6',
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('bootstrap.label',{
	type: 'label.style',
	impl: {	$: 'customCssStyle', base: { $: 'label.simpleText' }, cssClass: "bootstrap-label" }
});

jb_component('bootstrap.table',{
	type: 'table.style',
	impl: {	$: 'customCssStyle', base: { $:'table.default' }, cssClass: "bootstrap-table" }
});

jb_component('bootstrap.group',{
	type: 'group.style',
	impl: {	$: 'customCssStyle', base: { $: 'group.default' }, cssClass: "bootstrap-group" }
});

jb_component('button',{
	type: "control",
	params: {
		text: { as: 'string' },
		action: { type: 'action', dynamic: true },
		style: { 
			type: "button.style", 
			defaultValue: {
				$: "button.default"
			}
		},
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,text,action) {		
		return jb_control(context,{ 
			text: text,
			action: function() { 
				var ret = action(this.context);
				jb_digest();
				return ret;
			}
		});
	}
});

jb_type('button.style');

jb_component('button.default',{
	type: 'button.style',
	impl: function() {
		return {
			html: '<button/>',
			cssClass: "jb-btn-default",
			create: function(button) { jb_button(button); }
		}
	}
});

jb_component('button.imageOnly',{
	type: 'button.style',
	impl: function() {
		return {
			html: '<button/>',
			cssClass: "jb-btn-image",
			create: function(button) { jb_buttonImageOnly(button); }
		}
	}
});

function jb_button(button) {
  button.$el.text(button.text);
  button.$el.click(function() { button.action(); })
}

function jb_buttonImageOnly(button) {
  button.$el.attr('title',button.text);
  button.$el.click(function() { button.action(); })
}

jb_type('control',{description: "can be rendered to create a HTML control"});
jb_type('data',{description: "The most basic type of jbart. returns a data (usually without side effects)"});
jb_type('aggregator');
jb_type('boolean',{description: "Returns true/false"});
jb_type('action',{description: "Does some action"});
jb_type('dataResource');
jb_type('httpFeature');
jb_type('feature');

jb_component('call',{
 	type: '*',
 	params: {
 		param: { as: 'string' }
 	},
 	impl: function(context,param) {
      if (context.componentContext && typeof(context.componentContext.params[param]) == 'function')
 		return context.componentContext.params[param](jb_ctx({}, { data: context.data, vars: context.vars, componentContext: context.componentContext.componentContext }));
      else
        return context.componentContext && context.componentContext.params[param];
 	}
});

jb_component('pipeline',{
	type: "data",
	params: {
		items: { type: "data[]", ignore: true }
	},
	impl: function(context,items) {
		var data = jb_toarray(context.data);
		var curr = (data.length) ? jb_toarray(context.data) : [null];
		var profiles = jb_toarray(context.profile.items || context.profile['$pipeline']);
		profiles.forEach(function(profile) {
			if (jb_profileType(profile) == 'aggregator')
				curr = jb_run(jb_ctx(context,	{ data: curr, profile: profile }), { as: 'array'});
			else 
				curr = [].concat.apply([],curr.map(function(item) {
					return jb_run(jb_ctx(context,{data: item, profile: profile}), { as: 'array'});
				})).filter(notNull);
		});
		return curr;
		function notNull(value) { return value != null; }
  }
});

jb_component('list',{
	type: "data",
	params: {
		items: { type: "data[]", as: 'array' }
	},
	impl: function(context,items) {
		var out = [];
		items.forEach(function(item) {
			if (Array.isArray(item))
				out = out.concat(item);
			else
				out.push(item);
		});
		return out;
	}
});

jb_component('jsonPath',{
	type: "data",
	params: {
		parent: { defaultValue: '{{.}}', as: 'single' },
		path: { as: 'string' }
	},
	impl: function(context,parent,path) {
		return parent && jb_run(jb_ctx(context,{ data: parent, profile: '{{' + path + '}}' }));
	}
});

jb_component('objectProperties',{
	type: "data",
	params: {
		object: { defaultValue: '{{.}}', as: 'single' }
	},
	impl: function(context,object) {
		return object && jb_evalExpressionPart('*',jb_ctx(context,{data:object}));
	}
});

jb_component('propertyName',{
	type: "data",
	impl: function(context) {
		return context.data && context.data.$jb_property;
	}
});

jb_component('writeValue',{
	type: 'action',
	params: {
		to: { },
		value: {}
	},
	impl: function(context,to,value) {
		jb_writeValue(to,value,true);
	}
});

jb_component('assign',{
	type: 'action',
	params: {
		parent: { as:'single', defaultValue: '{{.}}'},
		property: { as:'string'},
		value: { }
	},
	impl: function(context,parent,property,value) {
		jb_assign(parent,property,value);
	}
});

jb_component('toggleBooleanValue',{
	type: 'action',
	params: {
		parent: { as: 'single' },
		property: { as: 'string'}
	},
	impl: function(context,parent,property) {
		if (!parent || typeof(parent) != 'object') return;
		parent[property] = parent[property] ? false : true;
	}
});

jb_component('addToArray',{
	type: 'action',
	params: {
		array: {},
		add: {}
	},
	impl: function(context,array,add) {
		jb_addToArray(array,add,true);
	}
});

jb_component('removeFromArray',{
	type: 'action',
	params: {
		array: { as:'array' },
		remove: { as:'array' }
	},
	impl: function(context,array,remove) {
		for (var i=0; i<array.length; i++)
			if (remove.indexOf(array[i]) >= 0)
				array.splice(i--,1);
	}
});

jb_component('remove',{
	type: 'action',
	params: {	value: {}	},
	impl: function(context,value) {
		jb_remove(value,true);
	}
});

jb_component('addCssClass',{
	type: 'action',
	params: {
		cssClass: { as: 'string' }
	},
	impl: function(context,cssClass) {
		if (context.vars.control && context.vars.control.$el) 
			context.vars.control.$el.addClass(cssClass);
	}
});

jb_component('setText',{
	type: 'action',
	params: {
		text: { as: 'string' },
		controlID: { as: 'string' }
	},
	impl: function(context,text,controlID) {
		var elem = jb_findControlElement(context.vars.control.$el[0],controlID);
		if (!elem) return;
		var input = $(elem).findIncludeSelf('input,textarea')[0];
		if (input) {
			$(input).val(text);
			input.jbUpdated && input.jbUpdated();
		}
	}
});

jb_component('urlParam',{
	type: 'data',
	params: {
		param: { as: 'string' }
	},
	impl: function(context,param) {
		return jb_urlParam(param);
	}
});

jb_component('url',{
	type: 'data',
	impl: function(context,param) {
		jb_listenToUrlChange();
		return window.location.href;
	}
});

jb_component('urlHashParam',{
	type: 'data',
	params: {
		param: { as: 'string' }
	},
	impl: function(context,param) {
		if (!jbart.classes.urlHashParam) {
			jbart.classes.urlHashParam = function(param) { this.param = this.$jb_property = param; this.type = 'urlHashParam'; }
			jbart.classes.urlHashParam.prototype.$jb_val = function(val) { return jb_urlHashParam(this.param,typeof val == 'undefined' ? undefined : jb_tostring(val)); }
			jbart.classes.urlHashParam.prototype.$jb_equals = function(other) { return other && other.type == this.type && other.param == this.param; }
			}
		return new jbart.classes.urlHashParam(param);
	}
});


jb_component('runDOMEvent',{
	type: 'action',
	params: {
		eventType: { as: 'string' },
		on: { as: 'string' }
	},
	impl: function(context,eventType,on) {
		context.vars.control.$(on).trigger(eventType);
	}
});

jb_component('htmlContainsText',{
	params: {
		text: { type: 'data[]', as: 'array' }
	},
	impl: function(context,text) {
		var htmlText = context.data;
		if (context.data.innerHTML) {
			$htmlText = $(htmlText).clone();
			$htmlText.find('input,textarea').each(function() { 
				this.setAttribute('jb-test-val',this.value); 
			});
			$htmlText.find('*').each(function() { if (this.style.display == 'none') $(this).remove(); });
			var div = $('<div/>').append($htmlText)[0];
			htmlText = div.innerHTML;
		}
		var lastPos = 0;
		for(var i=0;i<text.length;i++)
		  if ((lastPos = htmlText.indexOf(text[i],lastPos)) == -1) return false;

		return true;
	}
});

jb_component('dynamicFields',{
	type: "control",
	params: {
		list: { as: 'array' },
		genericField: { type: 'control', dynamic: true },
		variable: { as: 'string', defaultValue: 'fieldItem' }
	},
	impl: function(context,list,genericField,variable) {
		return jb_map(list,function(item){ 
			return genericField(jb_ctx(context,{ vars: jb_obj(variable,item) }))
		});
	}
});

jb_component('slice',{
	params: {
		start: { as: 'number', defaultValue: 0, description: '0-based index' },
		end: { as: 'number', description: '0-based index of where to end the selection (not including itself)' }
	},
	type: 'aggregator',
	impl: function(context,begin,end) {
		if (!context.data || !context.data.slice) return null;
		return end ? context.data.slice(begin,end) : context.data.slice(begin);
	}
});

jb_component('not',{
	type: 'boolean',
	params: { of: { type: 'boolean', as: 'boolean'} },
	impl: function(context, of) {
		return !of;
	}
});

jb_component('and',{
	type: 'boolean',
	params: { items: { type: 'boolean[]', ignore: true } },
	impl: function(context) {
		var items = context.profile.$and || context.profile.items || [];
		for(var i=0;i<items.length;i++) {
			if (!jb_run(jb_ctx(context,{ profile: items[i]}),{ type: 'boolean' }))
				return false;
		}
		return true;
	}
});

jb_component('contains',{
	type: 'boolean',
	params: {
		text: { type: 'data[]', as: 'array' },
		allText: { defaultValue: '{{.}}', as:'array'}
	},
	impl: function(context,text,allText) {
      var all = "";
      allText.forEach(function(allTextItem) {
		if (allTextItem.outerHTML)
			all += allTextItem.outerHTML + $(allTextItem).findIncludeSelf('input,textarea').get().map(function(item) { return item.value; }).join();
		else if (typeof(allTextItem) == 'object') 
			all += JSON.stringify(allTextItem);
		else 
			all += jb_tostring(allTextItem);
      });
		for(var i=0;i<text.length;i++)
		  if (all.indexOf(jb_tostring(text[i])) == -1) return false;

		return true;
	}
});

jb_component('filter',{
	type: 'aggregator',
	params: {
		filter: { type: "boolean", as: 'boolean', dynamic: true }
	},
	impl: function(context,filter) {
		return context.data.filter(function(item) {
			return filter(context,item);
		});
	}
});

jb_component('count',{
	type: 'aggregator',
	params: {
		items: { as:'array', defaultValue: '{{.}}'}
	},
	impl: function(context,items) {
		return items.length;
	}
});

jb_component('toUpperCase',{
	impl: function(context,filter) {
		return jb_tostring(context.data).toUpperCase();
	}
});

jb_component('join',{
	params: {
		separator: { as: 'string', defaultValue:',' },
		prefix: { as: 'string' },
		suffix: { as: 'string' },
		items: { as: 'array', defaultValue: '{{.}}'},
		itemName: { as: 'string', defaultValue: 'item'},
		itemText: { as: 'string', dynamic:true, defaultValue: '{{.}}'}
	},
	type: 'aggregator',
	impl: function(context,separator,prefix,suffix,items,itemName,itemText) {
		var itemToText = (context.profile.itemText) ?
			function(item) { return itemText(jb_ctx(context, {data: item, vars: jb_obj(itemName,item) }));	} :
			function(item) { return jb_tostring(item); };	// performance

		return prefix + items.map(itemToText).join(separator) + suffix;
	}
});

jb_component('unique',{
	params: {
		id: { as: 'string', dynamic: true, defaultValue: '{{.}}' },
		items: { as:'array', defaultValue: '{{.}}'}
	},
	type: 'aggregator',
	impl: function(context,id,items) {
		var out = [];
		var soFar = {};
		for(var i=0;i<items.length;i++) {
			var itemId = id( jb_ctx(context, {data: items[i] } ));
			if (soFar[itemId]) continue;
			soFar[itemId] = true;
			out.push(items[i]);
		}
		return out;
	}
});

jb_component('log',{
	params: {
		obj: { as: 'single', defaultValue: '{{.}}'}
	},
	impl: function(context,obj) {
		var out = obj;
		if (typeof GLOBAL != 'undefined' && typeof(obj) == 'object')
			out = JSON.stringify(obj,null," ");
		console.log(out);
		return context.data;
	}
});

jb_component('asIs',{ params: {$asIs: {}}, impl: function(context) { return context.profile.$asIs } });
jb_component('profile',{ impl: function(context) { return jb_handledObject(context.profile.$profile); } });

jb_component('object',{
	impl: function(context) {
		var result = jb_handledObject({});
		var obj = context.profile.$object || context.profile;
		if (Array.isArray(obj)) return obj;
		for(var i in obj)
			if (i.charAt(0) != '$') {
				result[i] = jb_run(jb_ctx(context,{profile: obj[i] }));
				var native_type = obj[i]['$as'];
				if (native_type)
					result[i] = jb_tojstype(result[i],native_type);
		}
		return result;
	}
});

jb_component('stringify',{
	params: {
		value: { defaultValue: '{{}}', as:'single'},
		space: { as: 'string', description: 'use space or tab to make pretty output' }
	},
	impl: function(context,value,space) {		
		if (typeof value == 'object')
			return JSON.stringify(value,null,space);
	}
});

jb_component('jbart', {
	params: {
		script: { description: 'jbart script to run' }
	},
	impl: function(context,script) {
		return jb_run(jb_ctx(context,{profile: script.$jb_object }))
	}
});

jb_component('split',{
	type: 'data',
	params: {
		separator: { as: 'string' },
		text : { as: 'string', defaultValue: '{{}}'},
		part: { type:'enum', values: 'first,second,last,but first,but last' }
	},
	impl: function(context,separator,text,part) {
		var out = text.split(separator);
		switch (part) {
			case 'first': return out[0];
			case 'second': return out[1];
			case 'last': return out.pop();
			case 'but first': return out.slice(1);
			case 'but last': return out.slice(0,-1);
			default: return out;
		}
	}
});

jb_component('replace',{
	type: 'data',
	params: {
		find: { as: 'string' },
		replace: { as: 'string' },
		text: { as: 'string', defaultValue: '{{.}}' },
		useRegex: { type: 'boolean', as: 'boolean', defaultValue: true},
		regexFlags: { as: 'string', defaultValue: 'g', description: 'g,i,m' }
	},
	impl: function(context,find,replace,text,useRegex,regexFlags) {
		if (useRegex) {
			return text.replace(new RegExp(find,regexFlags) ,replace);
		} else
			return text.replace(find,replace);
	}
});

jb_component('foreach', {
	type: 'action',
	params: {
		items: { as: 'array', defaultValue: '{{}}'},
		action: { type:'action', dynamic:true },
		itemVariable: { as:'string' },
		inputVariable: { as:'string' }
	},
	impl: function(context,items,action,itemVariable,inputVariable) {
		items.forEach(function(item) {
			action(jb_ctx(context,{ data:item, vars: jb_obj(itemVariable,item, jb_obj(inputVariable,context.data)) }));
		});
	}
});

jb_component('isNull',{
	type: 'boolean',
	params: {
		item: { as: 'single', defaultValue: '{{.}}'}
	},
	impl: function(context, item) {
		return (item == null);
	}
});

jb_component('isEmpty',{
	type: 'boolean',
	params: {
		item: { as: 'single', defaultValue: '{{.}}'}
	},
	impl: function(context, item) {
		return (!item || (Array.isArray(item) && item.length == 0));
	}
});

jb_component('equals',{
	type: 'boolean',
	params: {
		item1: { as: 'single'},
		item2: { defaultValue: '{{}}', as: 'single' }
	},
	impl: function(context, item1, item2) {
		if (!item1 && !item2) return true;
		return JSON.stringify(openObject(item1)) == JSON.stringify(openObject(item2));

		function openObject(obj) {
			return (obj && obj.$jb_parent) ? obj.$jb_parent[obj.$jb_property] : obj;
		}
	}
});

jb_component('sessionStorage',{
	params: {
		key: { as: 'string'}
	},
	impl: function(context,key) {
		return {
			$jb_val: function(value) {
				if (typeof value == 'undefined') 
					return sessionStorage[key];
				else
					sessionStorage[key]=jb_tostring(value);
			}
		}
	}
});

jb_component('parent',{
	type: "data",
	impl: function(context) {
		var object = jb_tosingle(context.data);
		return object && object.$jb_parent;
	}
});	

jb_component('writableText', {
	type: 'data',
	params: {
		defaultValue: { as: 'string' }
	},
	impl: function(context,defaultValue) {
		return jb_handledObject(jb_obj('v',defaultValue));
	}
});

jb_component('searchFilter', {
	type: 'aggregator',
	params: {
		pattern: { as:'string'},
		itemText: { dynamic:true, as:'string', defaultValue:'{{}}'},
		ignoreCase: { type:'boolean', as:'boolean', defaultValue:true }
	},
	impl: function(context,pattern,itemText,ignoreCase) {
		if (!pattern) return context.data;
		var patternLowCase = pattern.toLowerCase();
		return jb_map(jb_toarray(context.data), function(item) {
			if (ignoreCase) {
				if (itemText(context,item).toLowerCase().indexOf(patternLowCase) != -1)
					return item;
			} else
			 	if (itemText(context,item).indexOf(pattern) != -1)
					return item;
		} );
	}
});

jb_component('queryFilter', {
	type: 'aggregator',
	params: {
		query: { as:'single' },
		filters: { type:'filter{}', ingore: true },
		mainFilter: { type:'filter', as:'single', defaultValue: { $:'substringFilter' } }
	},
	impl: function(context,query,_filters,mainFilter) {
		if (typeof(query) != 'object') return context.data;

		var filters = {};
		jb_map(_filters, function(filter,property) { 
			if (query[property])
				filters[property] = jb_run(jb_ctx(context, { profile: filter }));
		});

		return jb_toarray(context.data).filter(function(item) {
			for (var col in query)
				if (query.hasOwnProperty(col) && col.indexOf('$jb_') != 0) {
					if (! ((filters[col] || mainFilter)(item[col],query[col]))) return false;
				}
			return true;
		});
	}
});

jb_type('filter');

jb_component('substringFilter',{
	type: 'filter',
	impl: function(context) {
		return function(actual,expected) {
			if (expected == null || expected == undefined) return true;
			return (jb_tostring(actual).toLowerCase().indexOf( jb_tostring(expected).toLowerCase() ) != -1);
		}
	}
});

jb_component('strictFilter',{
	type: 'filter',
	impl: function(context) {
		return function(actual,expected) {
			if (!expected) return true;
			return (actual == expected);
		}
	}
});

jb_component('numericFilter',{
	type: 'filter',
	impl: function(context) {
		return function(actual,expected) {
			if (!expected) return true;
			if (expected.from && jb_tonumber(actual) < jb_tonumber(expected.from)) return false;
			if (expected.to && jb_tonumber(actual) > jb_tonumber(expected.to)) return false;
			return true;
		}
	}
});

jb_component('pluralize', {
	type: 'data',
	params: {
		count: { as:'number', defaultValue: '{{}}' },
		zero: { as:'string', dynamic:true },
		one: { as:'string', dynamic:true },
		other: { as:'string', dynamic:true }
	},
	impl: function(context,count,zero,one,other) {
		switch (count) {
			case 0: return (jb_profileHasValue(context,'zero') ? zero : other)(null,count);
			case 1: return (jb_profileHasValue(context,'one') ? one : other)(null,count);
			default: return other(null,count);
		}
		// todo: add offset and json when like angular
	}
})

jb_component('openUrl', {
	type: 'action',
	params: {
		url: { as:'string' },
		target: { type:'enum', values: ['new tab','self'], defaultValue:'new tab', as:'string'}
	},
	impl: function(context,url,target) {
		var _target = (target == 'new tab') ? '_blank' : '_self';
		window.open(url,_target);
	}
});
function jb_run(context,parentParam) {
  try {
    if (context.profile.$debugger == 0) debugger;
    if (context.profile.$asIs) return context.profile.$asIs;
    var run = prepare();
    var jstype = parentParam && parentParam.as;
    var profile = context.profile;
    switch (run.type) {
      case 'booleanExp': return jb_bool_expression(profile, context);
      case 'expression': return jb_tojstype(jb_expression(profile, context), jstype);
      case 'asIs': return profile;
      case 'function': return jb_tojstype(profile(context),jstype);
      case 'null': return jb_tojstype(null,jstype);
      case 'pipeline': return jb_tojstype(jbart.comps.pipeline.impl(jb_ctx(context,{profile: { items : profile }})),jstype);
      case 'foreach': return profile.forEach(function(inner) { jb_run(jb_ctx(context,{profile: inner})) });
      case 'if': 
		return jb_run(run.ifContext, run.IfParentParam) ? 
          jb_run(run.thenContext, run.thenParentParam) : jb_run(run.elseContext, run.elseParentParam);      
      case 'profile':
        for(var varname in profile.$vars || {})
          run.ctx.vars[varname] = jb_run(jb_ctx(run.ctx,{ profile: profile.$vars[varname] }));
        run.paramsArray.forEach(function(paramObj) {
          switch (paramObj.type) {
            case 'function': run.ctx.params[paramObj.name] = paramObj.func; break;
            case 'array': run.ctx.params[paramObj.name] = 
              paramObj.array.map(function(prof) { return jb_run(jb_ctx(run.ctx,{profile: prof}),paramObj.param); } ); break;  // maybe we should [].concat and handle nulls
            default: run.ctx.params[paramObj.name] = jb_run(paramObj.context, paramObj.param);
          }
        });
        var out;
        if (run.impl) {
          run.args = prepareGCArgs(run.ctx);
          if (profile.$debugger) debugger;
          out = run.impl.apply(null,run.args);
        }
        else
          out = jb_run(jb_ctx(run.ctx, { componentContext: run.ctx }),parentParam);

        if (profile.$log)
          jbart.comps.log.impl(context, (profile.$log == true) ? out : jb_run( jb_ctx(context, { profile: profile.$log, data: out, vars: { data: context.data } })));

        if (jbart.probe)
          jb_probe(context,out);
        if (profile.$trace) console.log('trace: ' + jb_compName(profile),context,out,run);
          
        return jb_tojstype(out,jstype);
    }
  } catch (e) {
    jb_logException(e,'exception while running jb_run');
  }

  function prepare() {
    var profile = context.profile;
    var profile_jstype = typeof profile;
    var parentParam_type = parentParam && parentParam.type;
    var jstype = parentParam && parentParam.as;
    var isArray = Array.isArray(profile);
    var firstProp = !isArray && profile_jstype === 'object' && jb_firstProp(profile);

    if (profile_jstype === 'string' && parentParam_type === 'boolean') return { type: 'booleanExp' };
    if (profile_jstype === 'boolean' || profile_jstype === 'number') return { type: 'asIs' };// native primitives
    if (profile_jstype === 'string') return { type: 'expression' };
    if (profile_jstype === 'function') return { type: 'function' };
    if (firstProp && firstProp.indexOf('$') != 0) return { type: 'asIs' };
    if (profile_jstype === 'object' && (profile instanceof RegExp)) return { type: 'asIs' };
    if (!profile) return { type: 'asIs' };

    if (isArray) {
      if (!profile.length) return { type: 'null' };
      if (!parentParam || !parentParam.type || parentParam.type === 'data' || parentParam.type === 'boolean' ) // pipeline as default for array
        return { type: 'pipeline' };
      if (parentParam_type === 'action' || parentParam_type === 'action[]' && profile.isArray)
        return { type: 'foreach' };
    } else if (profile.$if) return {
        type: 'if',
        ifContext: jb_ctx(context,{profile: profile.$if}),
        IfParentParam: { type: 'boolean', as:'boolean' },
        thenContext: jb_ctx(context,{profile: profile.then || {} }),
        thenParentParam: { type: parentParam_type, as:jstype },
        elseContext: jb_ctx(context,{profile: profile['else'] || {} }),
        elseParentParam: { type: parentParam_type, as:jstype }
      }
    var comp_name = jb_compName(profile);
    var comp = jbart.comps[comp_name];
    if (!comp) { jb_logError('component ' + comp_name + ' is not defined'); return { type:'null' } }
    if (!comp.impl) { jb_logError('component ' + comp_name + ' has no implementation'); return { type:'null' } }

    var ctx = cloneContext(context);
    ctx.parentParam = parentParam;
    ctx.params = {};
    paramsArray = [];
    var first = true;

    for (var p in comp.params) {
      var param = comp.params[p];
      var val = profile[p];
      if (!val && first && firstProp != '$') // $comp sugar
        val = profile[firstProp]; 
      val = (typeof(val) != "undefined") ? val : (typeof(param.defaultValue) != 'undefined') ? param.defaultValue : [];
      if (!param.ignore) {
        if (param.dynamic)
          paramsArray.push( { name: p, type: 'function', func: funcDynamicParam(ctx,val,param,p) } );
        else if (param.type && param.type.indexOf('[]') > -1 && jb_isArray(val)) // array of profiles
          paramsArray.push( { name: p, type: 'array', array: val, param: {} } );
        else paramsArray.push( { name: p, type: 'run', context: jb_ctx(ctx,{profile: val}), param: param } );
      }
      first = false;
    }

    var run = { type:'run', ctx:ctx };
    if (typeof comp.impl === 'function')
      return { type: 'profile', impl: comp.impl, ctx: ctx, paramsArray: paramsArray }
    else
      return { type:'profile', ctx: jb_ctx(ctx,{profile: comp.impl }), paramsArray: paramsArray };
  }
}

function funcDynamicParam(ctx,newProfile,param,paramName) {
   if (param && param.type && param.type.indexOf('[') != -1 && jb_isArray(newProfile)) // array
    return function(ctx2,data2) {
      return jb_map(newProfile,function(prof) {
        return jb_run(jb_ctx(ctx2 || ctx,{ profile: prof, data: data2 }),param);
      });
    }
  else return function(ctx2,data2) {
    var ctxToRun = jb_ctx(ctx2 || ctx,{ profile: newProfile, data: data2 });
    return newProfile && jb_run(ctxToRun,param);
  }
}

function prepareGCArgs(ctx) {
  return [ctx].concat(jb_map(ctx.params, function(p) {return [p]}));
}

function jb_probe(context,out) {
  var profile = context.profile;
  profile.$jb_probe = profile.$jb_probe || { data:[], all: [] };
  if ((profile.$jb_probe.data).indexOf(context.data) == -1) { // first time for this input
    profile.$jb_probe.data.push(context.data);
    profile.$jb_probe.all.push(jb_obj('out',out, jb_ctx(context,{})));
  }
}

function cloneContext(context) {
  return { 
    profile: context.profile,
    data: context.data,
    vars: jb_extend({},context.vars),
    params: jb_extend({},context.params),
    resources: context.resources,
    componentContext: context.componentContext
  }
}

function jb_var(context,varname) {
  if (context.componentContext && context.componentContext.params[varname]) return context.componentContext.params[varname];
//  if (context.params[varname]) return context.params[varname];
  if (context.vars[varname]) return context.vars[varname];
  if (context.resources && context.resources[varname]) return context.resources[varname];
  return null;
}

function jb_expression(expression, context, jstype) {
  if (expression.indexOf('$debugger:') == 0) {
    debugger;
    expression = expression.split('$debugger:')[1];
  }
  if (expression.indexOf('$log:') == 0) {
    var out = jb_expression(expression.split('$log:')[1],context,jstype);
    jbart.comps.log.impl(context, out);
    return out;
  }
  if (expression.indexOf('{{') == -1) return expression;

  if (expression.lastIndexOf('{{') == 0 && expression.indexOf('}}') == expression.length-2) // just one expression filling all string
    return jb_evalExpressionPart(expression.substring(2,expression.length-2),context,jstype);

  return expression.replace(/{{(.*?)}}/g, function(match,contents) {
    return jb_tostring(jb_evalExpressionPart(contents,context,jstype));
  });
}

function jb_evalExpressionPart(expressionPart,context,jstype) { 
  // example: {{$person.name}}.     
  if (expressionPart == ".") expressionPart = "";

  // empty primitive expression
  if (!expressionPart && (jstype == 'string' || jstype == 'boolean' || jstype == 'number')) 
    return jbart.jstypes[jstype](context.data);

  if (expressionPart.indexOf('=') == 0) { // function
    var parsed = expressionPart.match(/=([a-zA-Z]*)\(?([^)]*)\)?/);
    var funcName = parsed && parsed[1];
    if (funcName && jbart.functions[funcName])
      return jb_tojstype(jbart.functions[funcName](context,parsed[2]),jstype);
  }

  var parts = expressionPart.split('.');
  var item = context.data;

  for(var i=0;i<parts.length;i++) {
    var part = parts[i], index, match;
    if ((match = part.match(/(.*)\[([0-9]+)\]/)) != null) { // x[y]
      part = match[1];
      index = Number(match[2]);
    }
    if (part == '') ;
    else if (part == '$parent' && item.$jb_parent && i > 0) 
      item = item.$jb_parent;
    else if (part.charAt(0) == '$' && i == 0 && part.length > 1)
      item = jb_var(context,part.substr(1));
    else if (jb_isArray(item))
      item = jb_map(item,function(inner) {
        return typeof inner === "object" ? jb_objectProperty(inner,part,jstype) : inner;
      });
    else if (typeof item === 'object')
      item = item && jb_objectProperty(item,part,jstype);

    if (index && Array.isArray(item)) 
      item = item[index];
    if (!item) return item;	// 0 should return 0
  }
  return item;
}

function jb_bool_expression(expression, context) {
  if (expression.indexOf('$debugger:') == 0) {
    debugger;
    expression = expression.split('$debugger:')[1];
  }
  if (expression.indexOf('$log:') == 0) {
    var calculated = jb_expression(expression.split('$log:')[1],context,'string');
    var result = jb_bool_expression(expression.split('$log:')[1], context);
    jbart.comps.log.impl(context, calculated + ':' + result);
    return result;
  }
  if (expression.indexOf('!') == 0)
    return !jb_bool_expression(expression.substring(1), context);
  var parts = expression.match(/(.+)(==|!=|<|>|>=|<=|\^=|\$=)(.+)/);
  if (!parts) {
    var asString = jb_expression(expression, context, 'string');
    return !!asString && asString != 'false';
  }
  if (parts.length != 4)
    return jb_logError('invalid boolean expression: ' + expression);
  var op = parts[2].trim();

  if (op == '==' || op == '!=' || op == '$=' || op == '^=') {
    var p1 = jb_expression(trim(parts[1]), context, 'string');
    var p2 = jb_expression(trim(parts[3]), context, 'string');
    if (op == '==') return p1 == p2;
    if (op == '!=') return p1 != p2;
    if (op == '^=') return p1.lastIndexOf(p2,0) == 0; // more effecient
    if (op == '$=') return p1.indexOf(p2, p1.length - p2.length) !== -1;
  }

  var p1 = jb_tojstype(jb_expression(parts[1].trim(), context), 'number');
  var p2 = jb_tojstype(jb_expression(parts[3].trim(), context), 'number');

  if (op == '>') return p1 > p2;
  if (op == '<') return p1 < p2;
  if (op == '>=') return p1 >= p2;
  if (op == '<=') return p1 <= p2;

  function trim(str) {  // trims also " and '
    return str.trim().replace(/^"(.*)"$/,'$1').replace(/^'(.*)'$/,'$1');
  }
}

function jb_tojstype(value,jstype) {
  if (!jstype) return value;
  if (!jbart.jstypes) jb_initJstypes();
  return jbart.jstypes[jstype](value);
}
function jb_tostring(value) { return jb_tojstype(value,'string'); }
function jb_toarray(value) { return jb_tojstype(value,'array'); }
function jb_toboolean(value) { return jb_tojstype(value,'boolean'); }
function jb_tosingle(value) { return jb_tojstype(value,'single'); }
function jb_tosingleDataBind(value) { return jb_tojstype(value,'singleDataBind'); }
function jb_tonumber(value) { return jb_tojstype(value,'number'); }

function jb_initJstypes() {
  jbart.jstypes = {
    'string': function(value) {
      if (jb_isArray(value)) value = value[0];
      if (value == null) return '';
      value = jb_val(value);
      if (typeof(value) == 'undefined') return '';
      return '' + value;
    },
    'number': function(value) {
      if (jb_isArray(value)) value = value[0];
      if (value == null || value == undefined) return null;	// 0 is not null
      value = jb_val(value);
      var num = Number(value);
      return isNaN(num) ? null : num;
    },
    'array': function(value) {
      if (jb_isArray(value)) return value;
      if (!value) return [];
      return [value];
    },
    'boolean': function(value) {
      if (jb_isArray(value)) value = value[0];
      return jb_val(value) ? true : false;
    },
    'single': function(value) {
      if (jb_isArray(value)) return value[0];
      if (!value) return value;
      value = jb_val(value);
      return value;
    },
    'singleDataBind': function(value) {
      if (jb_isArray(value)) return value[0];
      if (!value) return value;
      return value;
    }
  }
}

function jb_profileType(profile) {
  if (!profile) return '';
  if (typeof profile == 'string') return 'data';
  var comp_name = profile.$ || jb_firstProp(profile).split('$').pop();

  return (jbart.comps[comp_name] && jbart.comps[comp_name].type) || '';
}

function jb_compName(profile) {
  if (profile.$) return profile.$;
  var f = jb_firstProp(profile);
  return (f.indexOf('$') == 0 && f.indexOf('$jb_') != 0 && jb_firstProp(profile).split('$').pop()); // $comp sugar  
}
function jb_watch(calculator,$elem,listener,objectEquality,context) {
  if (context && context.vars.$scope) {
    context.vars.$scope.$watch(
      function() { return calculator() },
      function(newValue, oldValue) {
      if ($elem.closest("html")[0] && (objectEquality ? !objectEquality(newValue,oldValue) : newValue != oldValue )) {
        listener(newValue,oldValue);
      }
    },objectEquality);
  } else {
    jbart.watches = jbart.watches || [];
    jbart.watches.push({ value: jb_val(calculator()), calculator: calculator, $elem: $elem, listener: listener, objectEquality:objectEquality});
  }
}

function jb_digest(context) {
  jbart.watches = jbart.watches || [];

  for (i=0; i<jbart.watches.length; i++)        // remove dettached watches
    if (!jbart.watches[i].$elem.closest("html")[0]) 
      jbart.watches.splice(i--,1);

  jbart.watches.forEach(function(watch) {
    var newValue = jb_val(watch.calculator());
    if (watch.objectEquality ? !watch.objectEquality(newValue,watch.value) : watch.value != newValue) {
      watch.listener(newValue,watch.value);
      watch.value = newValue;
    }
  });

  context && context.vars.$scope && context.vars.$scope.$apply();
}

function jb_call_and_watch(calculator,$elem,listener,objectEquality) {
  jb_watch(calculator,$elem,listener,objectEquality);
  listener(calculator());
}

function jb_observe(databind,DOMElem,callback) {
  if (!databind || typeof databind != 'object') return;
  var propertyName = (databind.$jb_property || (databind.propertyName && databind.propertyName()) || '').replace(/ ,/g,'');
  $(DOMElem).addClass('jbobserve-'+propertyName);

  DOMElem.jbObserve = DOMElem.jbObserve || [];
  if (jb_map(DOMElem.jbObserve,function(item) { return item.databind == databind ? item : null}).length == 0)
    DOMElem.jbObserve.push({ databind: databind, callback: callback });
}
function jb_unobserve(databind,DOMElem) {
  if (!databind || typeof databind != 'object') return;
  var propertyName = (databind.$jb_property || (databind.propertyName && databind.propertyName()) || '').replace(/ ,/g,'');

  if (!Array.isArray(DOMElem.jbObserve)) return;
  DOMElem.jbObserve = jb_map(a,function(i) { return i.databind == databind ? null : i } ); // take it out
}

function jb_fireObjectChanged(databind,changeType,args) {
  if (!databind || typeof GLOBAL != 'undefined') return;
  var propertyName = (databind.$jb_property || '').replace(/[ ,\$\/]/g,'');

 try {
    $('.jbobserve-'+propertyName).get().forEach(function(elem) {
      (elem.jbObserve || []).forEach(function(observer) { 
        if (equals(observer.databind,databind))
         observer.callback(changeType,args); 
      });
    });
  } catch(e) {
    jb_logException(e,'error firing object changed callback');
  }

  function equals(x,y) {
    if (x==y) return true;
    if (x.$jb_equals) return x.$jb_equals(y);
    if (x.$jb_parent && y.$jb_parent && typeof x.$jb_parent[x.$jb_property] === 'object')
      return x.$jb_parent[x.$jb_property] === y.$jb_parent[y.$jb_property];
    if (x.$jb_parent) // primitive
      return x.$jb_parent === y.$jb_parent && x.$jb_property === y.$jb_property;
  }
}

function jb_writeValue(to,val,fireObjectChanged) {
  if (!to) return;

  if (to.$jb_val) return to.$jb_val(val); // possible bug - if the value is replaced we should fire event

  var to_parent = to.$jb_parent || to.$jb_origParent;
  if (!to_parent || to_parent == 'root') return;
  if (val && val.$jb_parent == to_parent && val.$jb_property == to.$jb_property) return;

  to_parent[to.$jb_property] = val;

  if (val && typeof val === 'object') { // typeof array is 'object'
    if (val.$jb_parent) delete val.$jb_parent[val.$jb_property];
    val.$jb_parent = to_parent; val.$jb_property = to.$jb_property;

    to.$jb_origParent = to_parent;
    delete to.$jb_parent;
  }
  if (fireObjectChanged) jb_fireObjectChanged(to,'replaced',jb_objectProperty(to.$jb_parent,to.$jb_property));
}
function jb_remove(val,fireObjectChanged) {
  if (!val || !val.$jb_parent) return;
  delete val.$jb_parent[val.$jb_property];
  if (fireObjectChanged) jb_fireObjectChanged(val.$jb_parent,'deleted',val);
  delete val.$jb_parent; delete val.$jb_property;
}
function jb_addToArray(array,add,fireObjectChanged) {
  if (!array || !Array.isArray(array)) return;

  var addAsArray = jb_toarray(add);
  array.push.apply(array, addAsArray);  // pushing items

  if (fireObjectChanged) jb_fireObjectChanged(array,'insert',{ start: array.length-addAsArray.length, addCount: addAsArray.length });
}

function jb_objectProperty(object,property,jstype) {
  if (!object) return null;

  if (property == '*') 
    return jb_objectProperties(object);

  if (jstype == 'string' || jstype == 'boolean' || jstype == 'number')
    return jbart.jstypes[jstype](object[property]); // no need for valueByRef

  if (!object.$jb_parent) return object[property];

  var val = object[property];
  var obj = (val && typeof val === 'object') ? val : {}; // typeof array is 'object'
  jb_extend(obj,{ $jb_parent: object, $jb_property: property });

  return obj;
}

function jb_objectProperties(object) {
    return jb_map(object,function(v,prop){
      if (prop.indexOf('$jb') != 0) 
        return jb_objectProperty(object,prop);
    });
}

function jb_val(val) {
  if (val == null) return val;
  if (val.$jb_val) return val.$jb_val();
  return (val.$jb_parent && val.$jb_parent != 'root') ? val.$jb_parent[val.$jb_property] : val;
}


function jb_propertyValue(parent,property) {
  parent = jb_val(parent);
  if (property == '') return parent;
  if (parent) return parent[property];  // TODO: support . in property (path)
}

function jb_assign(parent,property,newval) {
  if (!parent) return;
  if (property == '' && parent.jb_val) return parent.jb_val(newval);
  parent = jb_val(parent);
  parent[property] = newval;  // TODO: support . in property (path)
}
jb_component('openDialog', {
	type: 'action',
	params: {
		style: {
			type: 'dialog.style',
			defaultValue: { $:'dialog.default' }
		},
		content: {
			type: 'control',
			dynamic: true
		},
		title: { as: 'string' },
		features: {
			type: 'dialogFeature[]',
			dynamic: true
		}
	},
	impl: function(context, style, content, title, features) {
    jb_control(jb_ctx(context, { vars: { $appendControl: appendDialog } }),{
    	style: style,
    	title: title,
      appendContent: function(dialog,$appendControl) {
        return content( jb_ctx(context, { vars: { $dialog: dialog, $appendControl: $appendControl } } ));
      }
    },'$dialog');
    function appendDialog($dialog) {
      $dialog.$el.appendTo(jb_dialogsParent());
    }
	}
});

jb_component('openPopup', {
	type: 'action',
	params: {
		style: {
			type: 'dialog.style',
			defaultValue: 'dialog.defaultPopup'
		},
		content: { type: 'control',	dynamic: true },
		title: { as: 'string' },
		features: {
			type: 'dialogFeature[]',
			dynamic: true
		}
	},
	impl: function(context, style, content, title, features) {
      jb_control(jb_ctx(context, { vars: { $appendControl: appendDialog } }),
      	{
      		style: style,
      		title: title,
          appendContent: function(dialog,$appendControl) {
            return content( jb_ctx(context, { vars: { $dialog: dialog, $appendControl: $appendControl } } ));
          },      		
      	},'$dialog');
      function appendDialog($dialog) {
        $dialog.$el.appendTo(jb_dialogsParent());
      }
	}
});

jb_component('closeContainingPopup', {
	type: 'action',
	impl: function(context) {
		var dlg = context.vars.control.$el.closest('.jbart-dialog').prop('jbDialog');
		if (dlg) dlg.close();
	}
});

jb_component('dialogFeature.dragTitle', {
	type: 'dialogFeature',
	params: {
		id: { as:'string'}
	},
	impl: function(context,id) {
		var dialog = context.vars.$dialog;
		jb_bind(dialog, 'attach', function() {
			jb_dragDialog(dialog,id);
		});
	}
});

jb_component('dialogFeature.uniqueDialog', {
	type: 'dialogFeature',
	params: {
		id: { as: 'string' },
		remeberLastLocation: { type: 'boolean', as: 'boolean' }
	},
	impl: function(context,id,remeberLastLocation) {
		if (!id) return;
		var dialog = context.vars.$dialog;
		dialog.id = id;
		jb_bind(dialog, 'otherDialogCreated', function(otherDialog) {
			if (otherDialog.id == id)
				dialog.close();
		});
		if (remeberLastLocation) {
			var ssID = 'jbart-dialog-' + id;
			jb_bind(dialog,'attach',function() {
				if (sessionStorage[ssID])
					jb_map(JSON.parse(sessionStorage[ssID]),function(value,prop) {
						dialog.$el.css(prop,value);
					});
			});
			jb_bind(dialog, 'endDrag',function() {
				sessionStorage[ssID] = JSON.stringify({
					top: dialog.$el.css('top').split('px')[0] + 'px',
					left: dialog.$el.css('left').split('px')[0] + 'px'
				});
			});

		}
	}
});

jb_component('dialogFeature.nearLauncherLocation', {
	type: 'dialogFeature',
	impl: function(context,offsetLeft,offsetTop) {
		var dialog = context.vars.$dialog;
		var $control = context.vars.control.$el;
		jb_bind(dialog,'location',function() {
			var pos = $control.offset();
			dialog.$el.css( { left: pos.left , top: pos.top + $control.outerHeight(), position: 'absolute' });
		});
	}
});

jb_component('dialogFeature.launcherLocationNearSelectedNode', {
	type: 'dialogFeature',
	impl: function(context,offsetLeft,offsetTop) {
		var dialog = context.vars.$dialog;
		var $control = context.vars.treeControl.$el;
		jb_bind(dialog,'location',function() {
			var $ctrl = $control.find('.selected>.treenode-line').first();
			if (!$ctrl[0]) return;
			var pos = $ctrl.offset();
			dialog.$el.css( { left: pos.left , top: pos.top + $ctrl.outerHeight(), position: 'absolute' });
		});
	}
});

jb_component('dialogFeature.closeWhenClickingOutside', {
	type: 'dialogFeature',
	impl: function(context) {
		var dialog = context.vars.$dialog;
		jb_bind(dialog,'attach',function() {
			window.onmousedown = function(e) {
				if ($(e.target).closest(dialog.$el)[0]) return;
				dialog.close();
			};			
		})

		jb_bind(dialog,'close',function() {
			window.onmousedown = null;
		});

	}
});

jb_component('dialogFeature.autoFocusOnFirstInput', {
	type: 'dialogFeature',
	impl: function(context) {
		var dialog = context.vars.$dialog;
		jb_bind(dialog,'attach',function() {
			dialog.$('input,textarea').first().focus();
		})
	}
});

jb_component('dialogFeature.cssClassOnLaunchingControl', {
	type: 'dialogFeature',
	impl: function(context) {
		var dialog = context.vars.$dialog;
		jb_bind(dialog,'attach',function() {
			dialog.context.vars.control.$el.addClass('dialog-open');
		});

		jb_bind(dialog,'close',function() {
			dialog.context.vars.control.$el.removeClass('dialog-open');
		});

	}
});

jb_component('dialogFeature.maxZIndexOnClick', {
	type: 'dialogFeature',
	params: {
		minZIndex: { as: 'number'}
	},
	impl: function(context,minZIndex) {
		var dialog = context.vars.$dialog;
		jb_bind(dialog, 'attach', function() {
			setAsMaxZIndex();
			// dialog.$('.dialog-title').click(setAsMaxZIndex);
			dialog.$el.mousedown(setAsMaxZIndex);
		});

		function setAsMaxZIndex() {
			var zindex = minZIndex || 100;

			$(jb_dialogsParent()).children().each(function(index,dialogElem) {
				if (dialogElem.jbDialog && dialogElem.jbDialog != dialog)
					if ($(dialogElem).css('z-index') != 'auto')
						zindex = Math.max(zindex,parseInt($(dialogElem).css('z-index'))+1);
			});

			dialog.$el.css('z-index',zindex);
		}
	}
});

function jb_applyDialogFeatures(dialog, featuresProfile) {
	jb_toarray(featuresProfile).forEach(function(featureProfile) {
		jb_run(jb_ctx(dialog.context, {	profile: featureProfile }));		
	});
}

function jb_dialog(dialog) {
	$(jb_dialogsParent()).children().each(function(index,dialogElem) {
		if (dialogElem.jbDialog && dialogElem.jbDialog != dialog)
			jb_trigger(dialogElem.jbDialog,'otherDialogCreated',dialog);
	});
	
	dialog.$el[0].jbDialog = dialog;
	dialog.$el.addClass('jbart-dialog');
	dialog.$('.dialog-title').text(dialog.title || '');
	dialog.$('.dialog-close').click(function() {
		dialog.close();
	});
    dialog.appendContent(dialog,function(content) {
      dialog.$('.dialog-content').append(content.$el);
    });
//	$('body').find('>.jbart-dialogs').append(dialog.$el);

	jb_trigger(dialog, 'attach');
	jb_trigger(dialog, 'location');

	dialog.close = function() {
		jb_removeElement(dialog.$el[0]);
		dialog.$el = [];

		jb_trigger(dialog, 'close');
	}
}

function jb_dialogsParent() {
	if (jbart.dialogsParent) return jbart.dialogsParent();
	return $('body').find('>.jbart-dialogs')[0] || $('<div class="jbart-dialogs" />').appendTo('body')[0];
}

function jb_dragDialog(dialog,id) {		// TODO: fix for all browsers
	var titleElem = dialog.$('.dialog-title')[0];
	var frameElem = dialog.$el[0];	// possible fix if the dialog also contains the cover...
	var dragState = null;

	if (!titleElem) return;
	if (id && sessionStorage.getItem(id)) {
		var pos = JSON.parse(sessionStorage.getItem(id));
	  $(frameElem).css({ top: pos.top, left: pos.left });
	}

	$(titleElem).mousedown(function(e) {
		if (!dragState) {
			dragState = { mouseX: e.clientX, mouseY: e.clientY, frameX: frameElem.offsetLeft, frameY: frameElem.offsetTop	};
			jb_trigger(dialog, 'startDrag');
		}

		jb_setWindowEvent('mousemove',mouseMove);
		jb_setWindowEvent('mouseup',mouseUp);
	});

	function mouseMove(e) {
		if (dragState) 
		  $(frameElem).css({ 
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
			sessionStorage.setItem(id, JSON.stringify({ top:$(frameElem).css('top'), left:$(frameElem).css('left') }));
	}

}

jb_component('editableText',{
	type: "control",
	params: {
		parent: { as: 'single', defaultValue: '{{.}}' },
		property: { as: 'string' },
		style: { 
			type: "editableText.style", 
			defaultValue: { $: "editableText.textbox" }
		},
		title: { as: 'string' },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,parent,property,style,title) {
		return jb_control(context,{
			parent: parent,
			property: property
		});
	}
});

jb_type('editableText.style');

jb_component('editableText.textbox',{
	type: 'editableText.style',
	impl: function(context) {
		return {
			html: '<input/>',
			cssClass: "jb-textbox",
			create: function(textbox) {	jb_textbox(textbox); }
}}});

jb_component('editableText.textarea',{
	type: 'editableText.style',
	impl: function() {
		return {
			html: '<textarea/>',
			cssClass: "jb-textarea",
			create: function(textbox) {	jb_textbox(textbox); }
}}});

jb_component('editableText.codemirror',{
	type: 'editableText.style',
	params: {
		cm_settings: { as: 'single' },
    resizer: { description: 'resizer id or true (id is used to keep size in session storage)' },
		mode: { as: 'string' },
    lineWrapping: { as: 'boolean'},
    onChange: { type:'action', dynamic:'true'},
    onLoad: { type:'action', dynamic:'true'}
	},
	impl: function(context,cm_settings,resizer,mode,lineWrapping,onChange,onLoad) {
		return {
			html: '<textarea/>',
			cssClass: "jb-codemirror",
			create: function(textbox) {	
			  cm_settings = cm_settings || {};
        var resizer = typeof(context.profile.resizer) == 'string' ? { id: context.profile.resizer } : {};
        var settings = { cm_settings: cm_settings, resizer: resizer };
        if (mode) cm_settings.mode = mode;
        if (lineWrapping) cm_settings.lineWrapping = lineWrapping;
        if (jb_profileHasValue(context,'onChange'))
          settings.onChange = function() { onChange() };
        var cm_editor = jb_codemirror(textbox,settings); 
        onLoad(jb_ctx(context,{ vars: { cm_editor: cm_editor } }));
    }
}}});

function jb_textbox(textbox) {
  var $input = textbox.$el.findIncludeSelf('input,textarea');

  $input.val(valAsStr);

  if (textbox.updateOnBlurAndEnter) {
    $input.on('blur',function() { $input[0].jbUpdated(); });
    jb_bind(textbox,'keyup',function(e) { if (e.keyCode == 13) $input[0].jbUpdated(); });
  } else {
    $input.on('input',function() {
      this.jbUpdated();
    });
  }

  $input.on('keyup',function(e) { jb_trigger(textbox,'keyup',e); });

  $input[0].jbUpdated = function() {
    var prevValue = valAsStr();
    var newval = $input.val();
    if (newval != prevValue) {
      jb_assign(textbox.parent,textbox.property,newval);
      jb_trigger(textbox,'update',{ value: newval, prevValue: prevValue });
      jb_digest(textbox.context);
    }
  }

  jb_watch(
    function() { return valAsStr() },
    $input,
    function(newVal,oldVal) { 
    	if ($input.val() != newVal)
    		$input.val(newVal); 
    },null,textbox.context
  );

  function valAsStr() {
  	return jb_tostring(jb_propertyValue(textbox.parent,textbox.property));
  }
}

function jb_codemirror(textbox,settings) {
  if (!window.CodeMirror)
    return;

  settings.cm_settings = jb_extend({
      theme: 'solarized light', mode: 'jbart5', 
      extraKeys: { "Ctrl-Space": "autocomplete" },
      foldGutter: true, gutters: ['CodeMirror-foldgutter']
    },
    settings.cm_settings);

  textbox.$el.val(valAsStr());
  settings.cm_settings.extraKeys = settings.cm_settings.extraKeys || {};
  var ctrlEnterFunc = settings.cm_settings.extraKeys['Ctrl-Enter'];
  settings.cm_settings.extraKeys['Ctrl-Enter'] = function(editor) {
    ctrlEnterFunc && ctrlEnterFunc(editor);
    jb_trigger(textbox,'ctrlenter',editor);
  }

  var editor = CodeMirror.fromTextArea(textbox.$el[0], settings.cm_settings);
  textbox.$el[0].jbEditor = editor;

  editor.on("change",function() {
    var newval = editor.getValue();
    var prevValue = valAsStr();
    jb_assign(textbox.parent,textbox.property,newval);
    jb_trigger(textbox,'update',{ value: newval, prevValue: prevValue });
    jb_digest(textbox.context);
  });

  editor.on("blur",function() {
    jb_digest(textbox.context);
  });

  $(editor.getWrapperElement()).css('box-shadow', 'none').css('height', '200px');
  if (settings.resizer)
    jb_codemirrorResizer(editor,editor.getWrapperElement(), settings.resizer);

  function valAsStr() {
  	return jb_tostring(jb_propertyValue(textbox.parent,textbox.property));
  }
  return editor;
}

jb_component('updateOnBlurAndEnter', {
  type: 'feature',
  impl: function(context) {
    if (context.vars.control)
      context.vars.control.updateOnBlurAndEnter = true;
  }
});
jb_component('expandableSection',{
	type: "control",
	spritePosition: '1,1',
	params: {
		style: { 
			type: "expandableSection.style", 
			defaultValue: {	$: "expandableSection.panelBS" } 
		},
		title: { as: 'string' },
		controls: { type: "control[]", dynamic: true },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,style,title,controls) {
		return jb_control(context,{
			title: title,
			appendControls: function($appendControl) {
				return controls(jb_ctx(this.context, { vars: { $appendControl: $appendControl } } ));
			}
		});
	}
});

jb_type('expandableSection.style');

jb_component('expandableSection.panelBS',{
	type: 'expandableSection.style',
	impl: function() {
		return {
			html: '<div class="panel panel-default"><div class="panel-heading"><div class="panel-title"><a href="javascript:()"/></div></div><div class="panel-collapse"><div class="panel-body"></div></div>',
			cssClass: "jb-expandableSection",
			create: function(control) { jb_expandableSection(control); }
		}
	}
});

function jb_expandableSection(control) {
	var $panel = control.$('.panel');
	$panel.addClass('collapsed');
	$panel.find('.panel-title a').text(control.title || '');
	var $contentParent = $panel.find('.panel-body');

	$panel.find('.panel-heading').click(function() {
		if ($panel.hasClass('collapsed')) {
			if (!$contentParent[0].jbRendered) {
				control.appendControls(function(child) {
					$contentParent.append(child.$el);
					$contentParent[0].jbRendered = true;
				});
			}
		} else {
		}
		$panel.toggleClass('collapsed');
	});
}


jb_component('refreshOnUpdate',{
	type: 'feature',
	params: {
		id: { as: 'string' }
	},
	impl: function(context,id) {
		jb_bind(context.vars.control,'update',function() {
			jb_refreshControl(id,context.vars.control.$el[0]);
		});
	}
});

jb_component('id',{
	type: 'feature',
	params: {
		id: { as: 'string' }
	},
	impl: function(context,id) {
		context.vars.control.id = id;
	}
});

jb_component('cssClass',{
	type: 'feature',
	params: {
		className: { as: 'string', dynamic: true },
		condition: { type: 'boolean', as:'boolean', dynamic:true, defaultValue: true }
	},
	impl: function(context,className,condition) {
		var control = context.vars.control;

		jb_bind(control,'render',function() {
			control.$el.addClass(calcClassName());

			jb_watch(calcClassName,control.$el,function(newClass,prevClass) {
				control.$el.removeClass(prevClass).addClass(newClass);
			});
		})

		function calcClassName() {
			return condition() ? className() : '';
		}
	}
});

jb_component('hidePropertyTitle',{ 
	type: 'feature',
	impl: function(context) {
		context.vars.control.hidePropertyTitle = true;
	}
});

jb_component('title',{ 
	type: 'feature',
	params: { title: { as: 'string', dynamic: true }},
	impl: function(context,title) {
		context.vars.control.title = title();
		context.vars.control.titleFunc = title;
	}
});

jb_component('onload',{
	type: 'feature',
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'render',function() {
			action();
		});
	}
});

jb_component('onclick',{
	type: 'feature',	
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'render',function() {
			context.vars.control.$el.click(function() { 
				action();
				jb_digest(context);
			});
		});
	}
});

jb_component('ondblclick',{
	type: 'feature',	
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'render',function() {
			context.vars.control.$el.dblclick(function() { 
				action();
				jb_digest(context);
			});
		});
	}
});

jb_component('onupdate',{
	type: 'feature',	
	params: {
		action: { type: 'action', dynamic: true },
		valueVariable: { as:'string', defaultValue: '$value' },
		prevValueVariable: { as:'string', defaultValue: '$prevValue' }
	},
	impl: function(context,action,valueVariable,prevValueVariable) {
		jb_bind(context.vars.control,'update',function(event) {
			action(jb_ctx(context, { vars: jb_obj(valueVariable,event.value, jb_obj(prevValueVariable,event.prevValue)) }));
			jb_digest(context);
		});
	}
});

jb_component('onctrlenter',{
	type: 'feature',	
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action,valueVariable,prevValueVariable) {
		jb_bind(context.vars.control,'ctrlenter',function(event) {
			action();
			jb_digest(context);
		});
	}
});

jb_component('onenterClicked',{
	type: 'feature',	
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'keyup',function(e) {
			if (e.keyCode == 13) {
				action();
				jb_digest(context);
			}
		});
	}
});

jb_component('prepare',{
	type: 'feature',
	params: {
		action: { type: 'action', dynamic: true },
		loadingControl: { type: 'control', defaultValue: { $label: 'loading...' } }
	},
	impl: function(context,action,loadingControl) {
		var control = context.vars.control;
		control.loadingControl = loadingControl;
		control.prepare = action;
	}
});

jb_component('autoRefresh',{
	type: 'feature',
	params: {
		databind: { as: 'singleDataBind' }
	},
	impl: function(context,databind) {
		var control = context.vars.control;
		jb_bind(control,'render',function() {
			jb_observe(databind,control.$el[0],function() {
				jb_refreshControl(control);
			});
		});
	}
});

jb_component('markSearchPattern',{
	type: 'feature',
	params: {
		pattern: { as:'string' },
		ignoreCase: { type:'boolean', as:'boolean', defaultValue:true },
		style: { type: 'searchMark', defaultValue: { $:'searchMark.default'} },
		minPatternLength: { as:'number', defaultValue: 2 }
	},
	impl: function(context,pattern,ignoreCase,style,minPatternLength) {
		var control = context.vars.control;
		if (!pattern || pattern.length < minPatternLength) return;
		jb_bind(control,'render',function() {
			var flags = ignoreCase ? 'gi' : 'g';
     	control.$el.html(control.$el.html().replace( new RegExp( '(' + pattern + ')', flags ), 
     		function(match,content) { return $('<span class="jb-tmp"/>').text(content)[0].outerHTML; }))
     	control.$el.find('.jb-tmp').get().forEach(function(markedElem) {
     		var ctx = jb_ctx(context, { vars: { 
     			$appendControl:function(markedControl) {
     				$(markedElem).replaceWith(markedControl.$el);
     		} } });
     		jb_control(ctx, { text: $(markedElem).text() });
     	});
		});
	}
});

jb_component('placeholder',{
	type: 'feature',
	params: {
		text: { as: 'string' }
	},
	impl: function(context,text) {
		var control = context.vars.control;
		jb_bind(control,'render',function() {
			control.$('input,textarea').attr('placeholder',text);
		});
	}
});

jb_component('show',{
	type: 'feature',
	params: {
		condition: { type:'boolean', as: 'boolean', dynamic:true }
	},
	impl: function(context,condition) {
		var control = context.vars.control;
		if (!condition()) {
			control.hidden = true;
			jb_bind(control,'render',function() {
				control.$el.hide();
			},'show-hide');
		} 
		jb_bind(control,'render',function() {
			jb_watch(condition, control.$el, control.jb_refresh);
		},'show');
	}
});

jb_component('hide',{
	type: 'feature',
	params: {
		condition: { type:'boolean', as: 'boolean', dynamic:true }
	},
	impl: function(context,condition) {
		if (condition()) {
			var control = context.vars.control;
			control.hidden = true;
			jb_bind(control,'render',function() {
				control.$el.hide();
			});
		}
		jb_bind(control,'render',function() {
			jb_watch(condition, control.$el, control.jb_refresh);
		});
	}
});

jb_component('feature.variable',{
	type: 'feature',
	params: {
		varName: { as: 'string'},
		value: { dynamic: true }
	},
	impl: function(context,varName,value) {
		var ctx = context.vars.control.context;
		ctx.vars[varName] = value(ctx);
	}
});

jb_component('htmlId',{
	type: 'feature',
	params: {
		id: { as:'string'}
	},
	impl: function(context,id) {
		var control = context.vars.control;
		jb_bind(control,'render',function() {
			control.$el.attr('id',id);
		});		
	}
});

jb_component('watch', {
	type: 'feature',
	params: {
		value: { dynamic:true, as:'single' }
	},
	impl: function(context,value) {
		var control = context.vars.control;
		jb_bind(control,'render',function() {
			control.jb_watch(value);	
		});
	}
});

jb_component('focus', {
	type: 'feature',
	params: {
		condition: { as:'boolean', dynamic:true, defaultValue:'true' }
	},
	impl: function(context,condition) {
		var control = context.vars.control;
		jb_bind(control,'render',function() {
			jb_call_and_watch(
				condition,
				control.$el,
				function(newValue) {
					newValue ? control.$el.focus() : control.$el.blur();
				});
		});
	}
});


jb_function('count',function(context,expression) {
	var content = jb_expression('{{' + expression + '}}',context);
	if (!content) return 0;
	if (jb_isArray(content)) return content.length;
	return 1;
});

jb_function('name',function(context,expression) {
	var content = jb_expression('{{' + expression + '}}',context);
	return content && content.$jb_property;
});
jb_component('httpCall',{
	type: "data,action",
	params: {
		url: {},
		features: { type: 'httpFeature[]', dynamic:true }
	},
	impl: function(context,url,features) {
    var httpCall = { options:{ url: url } };
    httpCall.run = function() {
    	return $.ajax(httpCall.options);
    }
    features( jb_ctx(context, { vars: { $httpCall: httpCall } }));
    return httpCall.run();
	}
});

jb_component('logHttpCall', {
	type: 'httpFeature',
	
	params: {
		format: { as: 'string', dynamic:true, defaultValue: '{{$url}}'}
	},
	impl: function(context, format) {
		var httpCall = context.vars.$httpCall;
		var text = format(jb_ctx(context, { vars: { url: httpCall.options.url }} ));
		if (text) console.log(text);
	}
});

jb_component('httpPost', {
	type: 'httpFeature',
	params: {
		postData: { as: 'single' }
	},
	impl: function(context,postData) {
		var httpCall = context.vars.$httpCall;
    httpCall.options.type = 'POST';
    httpCall.options.data = postData;
	}
});

jb_component('onSuccess', {
	type: 'httpFeature',
	params: {
		action: { type:'action', dynamic:true },
		resultVariable: { as:'string', defaultValue: 'result' }
	},
	impl: function(context,action,resultVariable) {
		var httpCall = context.vars.$httpCall;
		httpCall.options.success = function(data,status,jqXHR) { 
			var ctx = jb_ctx(context,{ vars: jb_obj(resultVariable,data), data:data });
			action(ctx); 
		}
	}
});

jb_component('itemlist',{
	type: "control",
	params: {
		title: {},
		items: { as: 'array', dynamic:true }, 
		itemVariable: { as: 'string'},
		style: { 
			type: "itemlist.style", 
			defaultValue: {	$: "itemlist.default" } 
		},
		controls: { type: "control[]", dynamic: true },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,title,items,itemVariable,style,controls,features) {
		return jb_control(context,{
			items: items(),
			itemVariable: itemVariable,
			appendControls: function(item,$appendControl) {
				var vars = jb_obj(itemVariable,item,{$appendControl:$appendControl});
				if (context.vars.$scope) {
					vars.$scope = context.vars.$scope.$new();
					vars.$scope[itemVariable] = item;
				}
				return controls(jb_ctx(this.context,{ data: item, vars: vars }));
			},
			calcItems: items
		});
	}
});

function jb_listItemContext(itemlist,item,el) {
	return jb_ctx(itemlist.context,{ data: item, vars: jb_extend(jb_obj(itemlist.itemVariable,item), el ? { itemElement : el } : null ) } );
}

// style
jb_type('itemlist.style');

jb_component('itemlist.default',{
	type: 'itemlist.style',
	impl: function() {
		return {
			html: '<ul class="itemlist-parent"><li class="itemlist-item"/></ul>',
			cssClass: "jb-itemlist",
			create: function(control) {
				jb_itemlist(control);
			}
		}
	}
});

/* style function */

function jb_itemlist(itemlist,settings) {
	itemlist.$itemParent = itemlist.$('.itemlist-parent');
	itemlist.$itemTemplate = itemlist.$('.itemlist-item');

	itemlist.$itemTemplate.remove();

	itemlist.renderItem = function(item, appendFunc) {
			var $elem = itemlist.$itemTemplate.clone();
			$elem[0].jbItem = item;
			jb_handledObject(item);
			(appendFunc || itemlist.append)($elem);

			itemlist.appendControls(item, function(control) {
				$elem.append(control.$el);
			});
			jb_trigger(itemlist,'renderItem',$elem,item);
			return $elem;
	}

	itemlist.append = function($elem) {
		$elem.appendTo(itemlist.$itemParent);
	}

	itemlist.fill = function() {
		itemlist.items.forEach(function(item) {
			itemlist.renderItem(item);
		})
		jb_trigger(itemlist,'fill');
	}
	itemlist.clean = function() {
		itemlist.$itemParent.children().get().forEach(function(elem) { 
			jb_removeElement(elem); 
		});
	}
	jb_trigger(itemlist,'defineMethods');

	itemlist.fill();

	jb_watch(
		function() { return itemlist.calcItems().slice() }, // duplicate the array
		itemlist.$el,
		function(newArray, oldArray) {
			itemlist.items = newArray;
			if (oldArray.filter(function(val,index) { return newArray[index] == val; }).length == oldArray.length)	
				// append at end
				newArray.slice(oldArray.length, newArray.length).forEach(function(item) {
					itemlist.renderItem(item);
				});
			else {
				itemlist.clean();
				itemlist.fill();
			}
		}, 
		function(newArray, oldArray) { // equality function
			return newArray.length == oldArray.length &&
				oldArray.filter(function(val,index) { return newArray[index] == val; }).length == oldArray.length;
		},
		itemlist.context
	);
}

/* features */

jb_component('groupItems',{
	type: 'feature',
	params: {
		groupOfItem: { dynamic:true, as:'single' },
		control: { type:'control', dynamic:true, as:'single', defaultValue: { $label: '{{.}}'} },
		groupVariableName: { as:'string', defaultValue:'group'},
		itemsVariableName: { as:'string', defaultValue:'groupItems'},
		groupId: { dynamic:true, as:'string', defaultValue: '{{}}'}
	}, 
	impl: function(context,groupOfItem,control,groupVariableName,itemsVariableName,groupId) {
		var itemlist = context.vars.control;
		jb_bind(itemlist,'defineMethods',function(settings) {
			itemlist.fill = function() {
				var groups = {};
				for (var i=0; i<itemlist.items.length; i++) {
					var id = groupId(context,groupOfItem(context,itemlist.items[i]));
					groups[id] = groups[id] || { items: [] };
					groups[id].items.push(itemlist.items[i]);
				}
				// todo: sort groups
				for (var i in groups)
					if (groups.hasOwnProperty(i)) {
						// adding group
						var vars = { $appendControl: function(groupControl) {
						   (itemlist.appendGroup || itemlist.append)(groupControl.$el.addClass('jb-group'));
						}};
						vars[groupVariableName] = i;
						vars[itemsVariableName] = groups[i].items;
						control(jb_ctx(context,{vars:vars}),groups[i]);
						for (var j=0; j<groups[i].items.length; j++) {
							var $elem = itemlist.renderItem(groups[i].items[j]);
							if (j==0)	$elem.addClass('jb-first-in-group');
							if (j==groups[i].items.length-1) $elem.addClass('jb-last-in-group');
							itemlist.append( $elem );
						}
					}
				}
		});
	}
});

jb_component('itemClick',{
	type: 'feature',
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'renderItem',function($elem,item) {
			$elem.click(function() {
				action( jb_listItemContext(context.vars.control,item,this) );
				jb_digest();
			});
		});
	}
});

jb_component('itemSelection',{
	type: 'feature',
	params: {
		bindSelection: { as: 'singleDataBind'},
		itemid: { dynamic: true, as: 'string', defaultValue: '{{.}}'},
		onSelection: { type: 'action', dynamic: true },
		autoSelectFirst: { type: 'boolean', as:'boolean', defaultValue:true }
	},
	impl: function(context,bindSelection,itemid,onSelection,autoSelectFirst) {
		var itemlist = context.vars.control;

		jb_bind(itemlist,'render',function() {
			var elems = itemlist.$itemParent.children();
			elems.click(function() { select(this); });
		});

		jb_bind(itemlist,'fill',function() {
			var elems = itemlist.$itemParent.children();
			var elemToSelect = findElemOfItem(defaultSelected()) || (autoSelectFirst && elems[0]);
			select(elemToSelect);
		});


		jb_bind(itemlist,'selection',function (args) {
			var ctx = jb_ctx(context,{ data: args.item, vars: { selectionArgs: args } });
			ctx.vars[itemlist.itemVariable] = args.item;
			if (bindSelection)
				jb_writeValue(bindSelection,itemid(ctx),true);
			onSelection(ctx);
		});

		function defaultSelected() {
			var selectedID = jb_tostring(bindSelection);
			if (!selectedID) return null;

			var ctx = jb_ctx(context,{});

			for(var i=0;i<itemlist.items.length;i++) {
				ctx.data = ctx.vars[itemlist.itemVariable] = itemlist.items[i];
				if (itemid(ctx) == selectedID)
					return itemlist.items[i];
			}
		}

		function select(elem) {
			if (elem && $(elem).hasClass('selected')) return;
			var prevSelected = itemlist.$itemParent.children().filter('.selected');
			var elems = itemlist.$itemParent.children().removeClass('selected');
			if (elem && elem.jbItem) {
				$(elem).addClass('selected');
				jb_trigger(itemlist,'selection',{ item: elem.jbItem, elem: elem, prevElem: prevSelected[0] });
			}
		}

		function findElemOfItem(item) {
			if (!item) return null;
			var elems = itemlist.$itemParent.children();
			for(var i=0;i<elems.length;i++)
				if (elems[i].jbItem == item) return elems[i];
		}
	}
});

/** table **/

jb_component('table',{
	type: "control",
	params: {
		items: { as: 'array' }, 
		itemVariable: { as: 'string' },
		style: { 
			type: "table.style", 
			defaultValue: {	$: "table.default" } 
		},
		controls: { type: "control[]", dynamic: true },
		features: { type: "feature[]", dynamic: true },
		title: {}
	},
	impl: function(context,items,itemVariable,style,controls,features,title) {
		return jb_control(context,{
			items: items,
			itemVariable: itemVariable,
			appendControls: function(item,$appendControl) {
				var ctx = jb_ctx(this.context,{ data: item, vars: jb_obj(itemVariable,item,{$appendControl:$appendControl}) });
				return controls(ctx);
			}
		});
	}
});

jb_type('table.style');

jb_component('table.default',{
	type: 'table.style',
	impl: function() {
		return {
			html: '<table><thead><tr><th/></tr></thead><tbody><tr><td/></tr></tbody></table>',
			cssClass: "jb-table",
			create: function(control) {
				jb_table(control);
			}
		}
	}
});

function jb_table(table) {
	table.$th = table.$el.find('th');
	table.$theadRow = table.$el.find('thead').find('tr');
	table.$tbody = table.$el.find('tbody');
	table.$tr = table.$el.find('tbody').find('tr');
	table.appendControls(null, function(control) {
		table.$th.clone().text(control.title).appendTo(table.$theadRow);
	});
	table.$th.remove();

	for(var i=0;i<table.items.length;i++) {
		var item = table.items[i];
		var $row = table.$tr.clone().appendTo(table.$tbody);
		$row[0].jbItem = item;

		var $td = $row.find('td');
		table.appendControls(item, function(control) {
			$td.clone().append(control.$el).appendTo($row);
		});
		$td.remove();
  }
  table.$tr.remove();
}


jb_component('feature.searchTextbox',{
	type: 'feature',
	params: {
		itemlistID: { as: 'string' }
	},
	impl: function(context,itemlistID) {
		var itemlist;
		jb_bind(context.vars.control,'render',function() {
			context.vars.control.$('input').keydown(function (event) {
				if ([40,38,13].indexOf(event.keyCode) == -1) return;

				itemlist = jb_findControlElement(context.vars.control.$el[0],itemlistID);	// look for it every time (maybe is has beeen refreshed)
				if (event.keyCode == 40) { down(); event.stopPropagation(); }
				if (event.keyCode == 38) { up(); event.stopPropagation(); }
				if (event.keyCode == 13) { itemAction(); }
			});
		});

		function itemAction() {
			$(itemlist).find('.selected').click();
		}

		function down() {
			var $selected = $(itemlist).find('.selected');
			selectItem($selected.next()[0],$selected[0]);
		}
		function up() {
			var $selected = $(itemlist).find('.selected');
			selectItem($selected.prev()[0],$selected[0]);
		}

		function selectItem(elem,current) {
			if (!elem) return;
			$(current).removeClass('selected');
			$(elem).addClass('selected');
		}
	}
});

jb_component('itemClass', {
	type: 'feature',
	useIn: 'itemlist',
	params: {
		cssClass: { as:'string'},
		condition: { type:'boolean', as:'boolean', dynamic:true, defaultValue: true }
	},
	impl: function(context,cssClass,condition) {
		jb_bind(context.vars.control,'renderItem',function($elem,item) {
			var ctx = jb_ctx(context, { vars: jb_obj(context.vars.control.itemVariable,item), data:item });
			if (condition(ctx))
				$elem.addClass(cssClass);

			jb_watch( function() { 
				return condition(ctx) 
			}, $elem, function(newVal, oldVal) {
					newVal ? $elem.addClass(cssClass) : $elem.removeClass(cssClass);
				});
		});
	}
});

jb_component('ng.directive.PutOnScope',{
	type: 'ng.register.directive',
	impl: function(context) {
		var module = context.vars.ngModule, comp = context.vars.comp,id = context.vars.compId, idLower = id.toLowerCase();
		module.directive(idLower, function () { return {
			restrict : 'A',
//			priority: 2,
			link: {
				 pre: function preLink(scope, element, attrs) {
					var profile = jb_extend({ $: id }, JSON.parse(jb_fixJSON(attrs[idLower])));
					scope[id] = jb_run(jb_ctx(jb_ctx(),{ profile: profile , vars: { $scope: scope} } ));
				}
			}
		}});
}});

jb_component('ng.directive.ngTripletPrimitive',{
	type: 'ng.register.directive',
	impl: function(context) {
		var module = context.vars.ngModule, comp = context.vars.comp,id = context.vars.compId, idLower = id.toLowerCase();
		module.directive(idLower, function () { return {
			restrict : 'A',
	    require: '?ngModel', // get a hold of NgModelController
//			priority: 3,
			link: function postLink(scope, element, attrs, ngModel) {
					var profile = jb_extend({ $: id }, JSON.parse(jb_fixJSON(attrs[idLower])));
					var triplet = jb_run(jb_ctx(jb_ctx(),{ profile: profile , vars: { $scope: scope} } ));
					element.html(triplet.html);
					element.addClass(triplet.cssClass);
					triplet.create(scope,element[0],ngModel);
			}
		}});
}});

function jb_initNgModule() {
	var jbModule = angular.module('jbart',['ng']);
	jbart.angular = jbart.angular || {
		loadAndRegister: function(providers) {
			angular.injector(['jbart']).invoke(providers.concat(function() {})); // load all providers
			jb_map(jbart.comps,function(comp,id) { // register relevant components
				if (comp.ngRegistration) 
					jb_run(jb_ctx(jb_ctx(),{profile:comp.ngRegistration, vars: {comp: comp, compId: id, ngModule: jbModule} }));
			})
		}
	};

	jbModule.run(function($rootScope,$compile, $parse,$templateCache) {
		jb_extend(jbart.angular, {$rootScope: $rootScope, $compile: $compile, $parse: $parse, $templateCache: $templateCache });
	});

	jbModule.directive('jbartControl', function ($compile) {
		return function (scope, elem, attrs) {
			var $elem = $(elem);
			var profile = { $: $elem.attr("jbart-control") };
			show_widget($elem,profile,scope);
		}
	});
	
	jbModule.directive('jbart', function ($compile) {
		return function (scope, elem, attrs) {
			var $top = $(elem).prop("tagName").toLowerCase().indexOf('jb') == 0 ? $(elem) : $(elem).children();
			var profile = { $: $($top).prop("tagName").toLowerCase().substring(3) };
			xml2prof($top,profile);
			show_widget($(elem),profile,scope);
			
			function xml2prof($elem,prof) {
				var htmlTags = ['div','span'];
				$elem.children().get().forEach(function(child) {
					var subProf = {};
					var tagName = $(child).prop("tagName").toLowerCase();
					if (tagName == 'style_') tagName = 'style';
					if (htmlTags.indexOf(tagName) >= 0)	{// html
						prof.controls = prof.controls || [];
						prof.controls.push({ $ngHtml: child.outerHTML });
					}
					else if (tagName.indexOf('jb') == 0) {
						prof.controls = prof.controls || [];
						subProf['$'] = tagName.substring(3).toLowerCase().replace(/editabletext/g,'editableText');
						prof.controls.push(subProf);
					} else	// param value
						prof[tagName] = subProf;

					xml2prof($(child),subProf);
				});
				for (var i = 0; i < $elem[0].attributes.length; i++) {
					var attrib = $elem[0].attributes[i];
					prof[attrib.name] = attrib.value;
				}
				return prof;
			}
		}
	});

	jbModule.config(function($provide) {
		$provide.decorator("$templateCache",function($delegate) {
			return { 
				put:function(k,v) { 
					console.log('put: template id = ' + k); 
					return $delegate.put(k,v) 
				},
				info: $delegate.info,				
				get:function(k) { 
					console.log('get: template id = ' + k); 
					return $delegate.get(k) 
				}
			}
		})
	})

	function show_widget($elem,profile,scope) {
		var widgetName = profile.$.split('.')[0];
		jb_resource(widgetName,'scope',scope);
		var context = jb_ctx(jb_ctx(),{ vars: { $scope: scope }, profile: profile, data: scope });
		context.resources = {};
		var widget = jbart_widgets[widgetName];
		if (widget) {
			for (var resourceName in widget.resources || {})
				context.resources[resourceName] = widget.resources[resourceName];
		}

		$elem.addClass('jbart_widget');
		$elem[0].jbRefreshPreview = function() {
			$elem.children().empty();
			jb_appendControl($elem,context);
		}
		$elem[0].jbRefreshPreview();
	}
}




jb_component('ng', {
	type: 'data',
	params: {
		expression: { as:'string' }
	},
	impl: function(context,expression) {
		if (context.vars && context.vars.$scope) 
			return context.vars.$scope.$eval(expression);
	}
});

jb_component('ngHtml', {
	type: 'control',
	params: {
		html: { as: 'string', ignore:true }
	},
	impl: function(context,ngApp) {
		var html = context.profile.$ngCompile || context.profile.$ngHtml;
		var out = jbart.angular.$compile(html)(context.vars.$scope);
		return jb_simpleControl(context,$(out));
	}
});

if (typeof angular != 'undefined') jb_initNgModule();

function jb_fixJSON(json) { // { a: 3} -> { "a" : 3 }
	// separate the strings
	var parts = parseAndSplitStrings('"',json);
	parts = jb_map(parts,function(part) {
		if (part.type == 'unknown' && part.content.indexOf("'") != -1)
			return parseAndSplitStrings("'",part.content)
		else
			return part;
	})
	// now we parse the unkown parts with {,} and sournd them with quotes
	parts = jb_map(parts,function(part) {
		if (part.type == 'string') return part;
		var KeyChars = /[{},:]/mg,found,lastPos=0,innerParts=[];
		while((found = KeyChars.exec(part.content)) !== null) {
			var content = part.content.substr(lastPos,KeyChars.lastIndex-lastPos-1).trim();
			var notString = content.match(/^[{},]$/) || content.match(/^[0-9\.\-]*$/);
			if (content)
				innerParts.push({ type: notString ? 'unknown' : 'string' , content: content });
			innerParts.push({ type: 'keyChar' , content: found[0] });
			lastPos = KeyChars.lastIndex;
		}
		return innerParts;
	})
	// add quotes to strings
	parts = jb_map(parts,function(part) {
		if (part.type == 'string' && part.content[0] != '"' )
			part.content = '"' + part.content + '"';
		if (part.type == 'string' && part.content[0] == "'" && part.content.slice(-1) == "'" )
			part.content = '"' + part.content.slice(1,-1).replace(/"/,'\\"') + '"';

		return part;
	})
	return parts.map(function(p) {return p.content}).join('');


	function parseAndSplitStrings(QuoteChar,buffer) {
		var QuoteReg = new RegExp(QuoteChar,'mg'),found,inString=false,lastPos=0,parts=[];
		while((found = QuoteReg.exec(buffer)) !== null) {
			if (QuoteReg.lastIndex-1 == "\\") continue; // escape
			var content = buffer.substr(lastPos,QuoteReg.lastIndex-lastPos-1)
			parts.push({ type: inString ? 'string' : 'unknown' , content: content });
			parts.push({ type: 'Quote' , content: found[0] });
			lastPos = QuoteReg.lastIndex;
			inString = !inString;
		}
		parts.push({ type: 'unknown' , content: buffer.substr(lastPos) });
		return parts;
	}
}

/*
var x = jb_fixJSON('{ a: 3}');
var x1 = jb_fixJSON('{ "a": "3px"}');
var x2 = jb_fixJSON('{ a: 3px}');
var x3 = jb_fixJSON('{ a: 3px, b: { c: "aa" }, "e": "e", \'f\': \'f\' }');
*/
jb_component('hello-world.main',{ type: 'control', 
	impl: { $: 'group', 
			style: { $: 'group.vertical', spacing: 10 }, 
			controls: [
				{ $: 'label', 
					text: 'Hello {{$person.name}}', 
					features: { $id: 'label1' }, 
					
				}, 
				{ $: 'editableText', 
					parent: '{{$person}}', 
					property: 'name', 
					features: [{ $refreshOnUpdate: 'label1' }, { $id: 'edit name' }], 
					
				}, 
				{ $: 'label', text: ['{{$person.name}}', 'in pipeline: {{}}'] }, 
				{ $: 'propertySheet', 
					controls: [
						{ $: 'editableText', 
							title: 'name', 
							parent: '{{$person}}', 
							property: 'name', 
							id: 'name', 
							features: { $refreshOnUpdate: 'label1' }, 
							
						}, 
						{ $: 'editableText', 
							title: 'age', 
							parent: '{{$person}}', 
							property: 'age', 
							
						}
					], 
					
				}, 
				{ $: 'editableText', parent: '{{$person}}', property: 'undefinedField' }, 
				{ $: 'picklist', 
					parent: '{{$person}}', 
					property: 'hobby', 
					options: { $picklistOptionsByCommas: 'tennis,swimming,reading' }, 
					
				}, 
				{ $: 'label', text: '{{$person.hobby}}' }, 
				{ $: 'label', text: '{{=count($person.children)}} children' }, 
				{ $: 'label', 
					text: function (context) {
				return 'In 10 years I will be ' + (Number(context.resources.person.age)+10);
			}, 
					
				}
			], 
			
		}, 
	
})


jb_component('picklist',{
	type: "control",
	params: {
		parent: { as: 'single', defaultValue: '{{.}}' },
    property: { as: 'string' },
		options: { type: 'picklistOptions' },
		style: { 
			type: "picklist.style",
			defaultValue: { $: "picklist.native" }
		},
		title: { as: 'string' },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,parent,property,options,style,title) {
		return jb_control(context,{
			parent: parent,
			property: property,
      options: options,
      allowEmptyValue: true
		});
	}
});

jb_type('picklistOptions');

jb_component('picklistOptionsByCommas',{
  type: 'picklistOptions',
  params: { options: { as: 'string'} },
  impl: function(context,options) {
    return options.split(',').map(function(code) { 
      return { code: code, text: code }
    })
  }
});


jb_type('picklist.style');

jb_component('picklist.native',{
	type: 'picklist.style',
	impl: function(context) {
		return {
			html: '<select/>',
			cssClass: "jb-picklist-native",
			create: function(control) {	jb_picklistNative(control); }
}}});

function jb_picklistNative(control) {
  var $select = control.$el.findIncludeSelf('select');

  var options = control.options || [];
  if (control.allowEmptyValue) options = [{ code: '', text: ''}].concat(options);

  options.forEach(function(option) {
    var $option = $('<option/>').val(option.code).text(option.text).appendTo($select);
    if (option.disabled) $option.attr('disabled','disabled');
  });

  $select.val(valAsStr);

  $select.change(function() {
    var prevValue = valAsStr();
    var newval = $select.val();
    if (newval != prevValue) {
      jb_assign(control.parent,control.property,newval);
      jb_trigger(control,'update',{ value: newval, prevValue: prevValue });
      jb_digest();
    }
  });

  jb_watch(function() { return valAsStr() },$select,
    function(newVal,oldVal) { 
    	if ($select.val() != newVal)
    		$select.val(newVal); 
    }
  );

  function valAsStr() {
  	return jb_tostring(jb_propertyValue(control.parent,control.property));
  }
}

function jb_uiText(uiText) {
  uiText.$el.html(uiText.text.replace(/\n/g,'<br/>'));
}

function jb_group(group) {
  var $parent = group.$el;

  group.appendControls(function(control) {
    $parent.append(control.$el);
  });
}

function jb_horizonalGroup(group,spacing) {
  jb_group(group);
  if (spacing)  // add spacing to all but the last
    $(group.$el.children().slice(0,-1)).css('margin-right',spacing+'px');
}

function jb_horizonalSpacing(top,spacing) {
  if (spacing)
    $(top.$el.children().slice(0,-1)).css('margin-right',spacing+'px');
}

function jb_verticalGroup(group,spacing) {
  var $repeat = group.$el.find('.control-in-vertical');

  group.appendControls(function(control) {
    var $wrapper = $repeat.clone().insertBefore($repeat);
    $wrapper.append(control.$el);
  });

  if (spacing)  // add spacing to all but the last
    $($repeat.siblings().slice(0,-1)).css('margin-bottom',spacing+'px');

  $repeat.remove();
}

function jb_checkbox(checkbox) {
  var $input = checkbox.$el.findIncludeSelf('input');
  var $text = checkbox.$el.findIncludeSelf('span');

  $text.text(checkbox.title);
  $input.prop("checked", jb_toboolean(checkbox.databind));
  $input.change(function() {
    var prevValue = jb_toboolean(checkbox.databind);
    var newValue = $(this).is(':checked');
    if(newValue != prevValue) {
      jb_writeValue(checkbox.databind,newValue,true);
      jb_trigger(checkbox,'update',{ prevValue: prevValue });
      jb_digest(checkbox.context);      
    }
  });
}

function jb_propertySheet(propSheet,settings) {
  settings = $.extend({
    addColon: true
  },settings);

  var $property = propSheet.$el.findIncludeSelf('.property');

  propSheet.appendControls(function(control) {
    var $elem = $property.clone().insertBefore($property);
    var $propertyTitle = $elem.findIncludeSelf('.property-title');
    var $propertyContent = $elem.findIncludeSelf('.property-content');

    $propertyTitle.text(control.title + (settings.addColon ? ':' : '')).attr('title',control.title);
    if (control.hidePropertyTitle) $propertyTitle.hide();
    $propertyContent.append(control.$el);
  });

  $property.remove();
}

function jb_image(image) {
  if (image.width) image.$el.width(image.width);
  if (image.height) image.$el.height(image.height);

  if (image.url) {
    var $img = $('<img/>').appendTo(image.$el).attr('src',image.url);
  }

}


/*********** label ******************/

jb_type('label.style');

jb_component('label.simpleText',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<div/>',
			cssClass: "jb-label",
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('label.h1',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<h1/>',
			cssClass: "jb-label-h1",
			create: function(uiText) { jb_uiText(uiText); }
}}});

jb_component('label.label',{
	type: 'label.style',
	impl: function() {
		return {
			html: '<label/>',
			cssClass: "jb-label-label",
			create: function(uiText) { jb_uiText(uiText); }
}}});

/*********** editable boolean ******************/

jb_type('editableBoolean.style');

jb_component('editableBoolean.checkbox',{
	type: 'editableBoolean.style',
	impl: function(context) {
		return {
			html: '<label><input type="checkbox" /><span></span></label>',
			cssClass: "jb-checkbox",
			create: function(checkbox) { jb_checkbox(checkbox); }
}}});

/*********** group ******************/

jb_type('group.style');

jb_component('group.default',{
	type: 'group.style',
	impl: function() {
		return {
			html: '<section />',
			cssClass: "jb-group",
			create: function(group) {	jb_group(group); }
}}});

jb_component('group.vertical',{
	type: 'group.style',
	params: {
		spacing: { as: 'number' }
	},
	impl: function(context,spacing) {
		return {
			html: '<section><div class="control-in-vertical"/></section>',
			cssClass: "jb-group",
			create: function(group) {	jb_verticalGroup(group,spacing); }
}}});

jb_component('group.horizontal',{
	type: 'group.style',
	params: {
		spacing: { as: 'number' }
	},
	impl: function(context,spacing) {
		return {
			html: '<section />',
			cssClass: "jb-horizontal-group",
			create: function(group) {	jb_horizonalGroup(group,spacing); }
}}});

/*********** propertySheet ******************/

jb_type('propertySheet.style');

jb_component('propertySheet.default',{
	type: 'propertySheet.style',
	impl: function() {
		return {
			html: '<div><div class="property"><label class="property-title"/><div class="property-content" /></div></div>',
			cssClass: "jb-propertySheet",
			create: function(propSheet) {	jb_propertySheet(propSheet); }
}}});

jb_component('propertySheet.titlesAboveFields',{
	type: 'propertySheet.style',
	params: {
		spacing: { as: 'number', defaultValue: 3 }
	},
	impl: function(context,spacing) {
		return {
			html: '<div><div class="property"><label class="property-title"/><div class="property-content" /></div></div>',
			cssClass: "jb-titlesAboveFields",
			create: function(propSheet) {	
				jb_propertySheet(propSheet);
				jb_horizonalSpacing(propSheet,spacing); 
			}
}}});


/*********** image ******************/

jb_type('image.style');

jb_component('image.default',{
	type: 'image.style',
	impl: function() {
		return {
			html: '<div/>',
			cssClass: "jb-image",
			create: function(image) {	jb_image(image); }
}}});

/*********** table ******************/

jb_type('table.style');

jb_component('button.default',{
	type: 'button.style',
	impl: function() {
		return {
			html: '<button/>',
			cssClass: "jb-btn-default",
			create: function(button) { jb_button(button); }
}}});

/************ searchMark ***************/


jb_type('searchMark');

jb_component('searchMark.default', {
	type: 'searchMark',
	impl: function(context) {
		return {
			html: '<span/>',
			cssClass: 'jb-default-search-mark',
			create: function(control) {
				control.$el.text(control.text);
			}
		};
	}
});

/************* dialog ***************/

jb_component('dialog.default', {
	type: 'dialog.style',
	impl: function(context) {
		return {
			html: '<div><div class="dialog-title"/><button class="dialog-close">&#215;</button><div class="dialog-content"/></div>',
			cssClass: 'jb-default-dialog',
			create: function(dialog) {
				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.dragTitle'}
				]);
				jb_dialog(dialog);
			}
		}
	}
});

/************ hyperlink ***************/


jb_type('hyperlink.style');

jb_component('hyperlink.default', {
	type: 'hyperlink.style',
	impl: function(context) {
		return {
			html: '<a/>',
			cssClass: 'jb-default-hyperlink',
			create: function(control) {
				control.$el.text(control.text).attr('href',control.href);
			}
		};
	}
});

jb_component('tabControl',{
	type: "control",
	spritePosition: '1,1',
	params: {
		style: { 
			type: "tabControl.style", 
			defaultValue: {	$: "tabControl.accordionBS" } 
		},
		autoRefreshTab: { type: 'boolean', as: 'boolean', defaultValue: true },
		controls: { type: "control[]", dynamic: true },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,style,autoRefreshTab,controls) {
		return jb_control(context,{
			autoRefreshTab: autoRefreshTab,
			onlyOneTabOpen: true,
			controls: function() { return controls(jb_ctx(context,{ vars: { $appendControl: null } })); }
		});
	}
});

jb_type('tabControl.style');

jb_component('tabControl.accordionBS',{
	type: 'tabControl.style',
	impl: function() {
		return {
			html: '<div><div class="panel panel-default"><div class="panel-heading"><div class="panel-title"><a href="javascript:()"/></div></div><div class="panel-collapse"><div class="panel-body"></div></div></div>',
			cssClass: "jb-accordion",
			create: function(control) { jb_accordion(control); }
}}});

function jb_accordion(control) {
  var $panelTemplate = control.$('.panel');

  var panels = control.controls();

  panels.forEach(function(panel,index) {
  	var $panel = $panelTemplate.clone().insertBefore($panelTemplate);
  	$panel.prop('jbControl',panel).prop('jbPanelHeading',$panel.find('.panel-heading'));
  	$panel.addClass('collapsed');
  	var $panelText = $panel.find('.panel-title a');
  	if (panel.titleFunc)
  		jb_watch(panel.titleFunc,$panelText,function(newtitle) { $panelText.text(newtitle); },null,control.context);
  	
  	$panelText.text(panel.title);

  	var $contentParent = $panel.find('.panel-body');

  	$panel.find('.panel-heading').click(function() {
  		if ($panel.hasClass('collapsed')) {
	  		if (!control.autoRefreshTab && !$contentParent[0].jbChildCreated) return;
	  		$panel.removeClass('collapsed');
	  		panel.render(function(innerControl) {
	  			$contentParent.append(innerControl.$el);
	  			$contentParent[0].jbChildCreated = true;
	  		});
	  		if (control.onlyOneTabOpen) {
	  			$panel.siblings().not('.collapsed').each(function(i,elem) {
	  				elem.jbPanelHeading.click();
	  			})
  			}
  		} else {
			if (control.autoRefreshTab) {
				$contentParent.children().remove();
				$contentParent[0].jbChildCreated = false;
			}
			$panel.addClass('collapsed');
  		}
  	});
  });

  $panelTemplate.remove();

  control.$('.panel-heading').first().click();
}


jb_component('dataTest',{
	params: {
		calculate: { dynamic:true },
		runBefore: { type: 'action', dynamic: true },
		resultVariable: { as: 'string', defaultValue:'result' },
		action: { type: 'action', dynamic: true },
		expectedResult: { type: "boolean", dynamic: true, as: 'boolean' }
	},
	impl: function(context,calculate,runBefore,resultVariable,action,expectedResult) {
		runBefore();
		var value = calculate();
		if (!value || !value.promise)	// sync
			return result(value);
		else 
			return $.when(value).then(result);

		function result(value) {
			if (context.vars.$testContext) 
				context.vars.$testContext.result = value;
			action(jb_ctx(context, { data: value, vars: jb_obj(resultVariable,value) }));
			return expectedResult(jb_ctx(context,{ data: value, vars: jb_obj(resultVariable,value) }));
		}
	}
});

jb_component('autoTest',{
	params: {
		page: { type: "control", dynamic: true },
		runBefore: { type: "action", dynamic: true },
		run: { type: "action", dynamic: true },
		wait: { type:"boolean", as:'boolean'},
		waitFor: { type:"action", as:'single', dynamic:true},
		expectedResult: { type: "expectedResult", dynamic: true, as: 'boolean' },
		cleanAfter: { type: "action", dynamic: true }
	},
	impl: function(context,page,runBefore,run,wait,waitFor,expectedResult,cleanAfter) {
		runBefore();
		var wrapper = context.vars.testWrapper;
		if (!wrapper) wrapper = $('<div/>').appendTo("body").hide()[0];
		var control = jb_appendControl(wrapper, context, page);
		run(jb_ctx(context,{vars: { control: control }}));
		var waitingFor = waitFor();
		if (!wait && !waitingFor) 
			return result();
		else if (waitingFor)
			return $.when(waitingFor).then(result);
		else {
			var deferred = $.Deferred();
			waitNext();
			return deferred.promise();
		}
		function waitNext() {
			var waitingElem = $(wrapper).find('.jb-waiting').andSelf('.jb-waiting')[0];
			if (!waitingElem) 	// done
				deferred.resolve( result() );
			else 
				jb_bind(waitingElem.jbControl,'prepareDone',waitNext);
		}

		function result() {
			var result = expectedResult(jb_ctx(context,{data: wrapper}));
			cleanAfter();
			if (!context.vars.testWrapper)
				jb_removeElement(wrapper);
			return result;			
		}
	}
});

jb_component('dialogsParent', {
	type: 'data',
	impl: function(context) {
		return jb_dialogsParent();
	}
});

jb_component('closeAllDialogs', {
	type: 'action',
	impl: function(context) {
		$('.jbart-dialog').each(function(i,dlg) {
			dlg.jbDialog && dlg.jbDialog.close();
		});
	}
});


jb_component('customCssStyle',{
	type: '*',
	params: {
		base: { as: 'single' },
		cssClass: { as: 'string' }
	},
	impl: function(context,base,cssClass) {
		return jb_extend({},base,{ cssClass: cssClass});
	}
});

jb_component('group',{
	type: "control",
	spritePosition: '1,1',
	params: {
		controls: { type: "control[]", dynamic: true, essential: true },
		title: { as: 'string', dynamic: true },
		style: { 
			type: "group.style", 
			defaultValue: {	$: "group.default" } 
		},
		databind: { as: "singleDataBind", defaultValue: '{{.}}' },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,controls,title,style,databind) {
		return jb_control(jb_ctx(context,{data: databind}),{			
			appendControls: function($appendControl) {
				return controls(jb_ctx(this.context, { data: databind, vars: { $appendControl: $appendControl } } ));
			}
		});
	}
});

jb_component('customControl',{
	type: "control",
	params: {
		html: { as: 'string' },
		cssClass: { as: 'string' },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,html,cssClass) {
		return jb_control(context,{
			style: {
				html : html,
				cssClass: cssClass,
				create: function(control) { if (typeof context.profile.create == 'function') return context.profile.create(control); }
			}
		});
	}
});

jb_component('propertySheet',{
	type: "control",
	spritePosition: '1,1',
	params: {
		controls: { type: "control[]", dynamic: true },
		databind: { as: "singleDataBind", defaultValue: '{{.}}' },
		style: { 
			type: "propertySheet.style", 
			defaultValue: {	$: "propertySheet.default" } 
		},
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,controls,databind,style) {
		return jb_control(context,{
			data: databind,
			appendControls: function($appendControl) {
				return controls(jb_ctx(this.context, { data: this.data, vars: { $appendControl: $appendControl } } ));
			}
        });
	}
});

jb_component('label',{
	type: "control",
	params: {
		text: { as: 'string', dynamic:true, essential: true },
		title: { as: 'string' },
		style: { 
			type: "label.style", 
			defaultValue: {	$: "label.simpleText"	}
		},
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,text) {
		return jb_control(context,{
			text: text()
		}).jb_watch(text);
	}
});

jb_component('editableBoolean',{
	type: "control",
	params: {
		title: { as: 'string' },
		databind: { as: 'singleDataBind' },
		style: { 
			type: "editableBoolean.style", 
			defaultValue: {
				$: "editableBoolean.checkbox"
			}
		},
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,title,databind) {
		return jb_control(context,{ 
			title: title,
			databind: databind
		});
	}
});

jb_component('refresh',{
	type: 'action',
	params: {
		control: { as: 'string' }
	},
	impl: function(context,control) {
		jb_refreshControl(control,context.vars.control.$el[0]);
	}
});


jb_component('image',{
	type: "control",
	params: {
		url: { as: 'string', dynamic:true },
		imageWidth: { as: 'number' },
		imageHeight: { as: 'number' },
		width: { as: 'number' },
		height: { as: 'number' },
		style: { 
			type: "image.style", 
			defaultValue: {	$: "image.default" }
		},
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,url,imageWidth,imageHeight,width,height) {
		return jb_control(context,{
			url: url(), imageWidth: imageWidth, imageHeight: imageHeight, width: width, height: height
		}).jb_watch(url);
	}
});

jb_component('hyperlink', {
	type: 'control',
	params: {
		href: { as:'string', dynamic:true },
		text: { as:'string', dynamic:true },
		style: { type:'hyperlink.style', defaultValue: { $:'hyperlink.default'} },
		features: { type: "feature[]", dynamic: true }
	},
	impl: function(context,href,text,style) {
		return jb_control(context, {
			href: href(),
			text: text()
		}).jb_watch([href,text]);
	}
});
function jb_control(context,properties,varName) {
  var control = {
    originalContext: context,
    title: ''
  };
  if (typeof context.params.title == 'string') control.title = context.params.title;
  else if (typeof context.params.title == 'function') {
    control.title = context.params.title();
    control.titleFunc = context.params.title;
  }

  jb_extend(control,properties);

  control.jb_refresh = function() {
    jb_run(jb_ctx(context, { vars: { $appendControl: 
      function(newControl) {
        jb_IE_cleanMemoryLeaks(control.$el);
        control.$el.replaceWith(newControl.$el);
    } } }));
    return control;
  }
  control.jb_watch = function(calculators,objectEquality) {
    jb_toarray(calculators).forEach(function(calc) {
        jb_watch(calc,control.$el,control.jb_refresh,objectEquality,context);
    });
    return control;
  }

  var ctx = jb_ctx(context,{ vars: jb_obj(varName || 'control', control) });
  control.context = ctx;
  context.params.features && context.params.features(ctx);  // let the features enrich the control

  if (control.prepare && !control.prepareDone) {
    control.$el = control.loadingControl.$el.addClass('jb-waiting').each(function() { this.jbControl=control;} );
    if (context.vars.$appendControl)
      context.vars.$appendControl(control.loadingControl);
    $.when(control.prepare()).then(function() {
      control.prepareDone = true;
      run(function(control) {
        $(control.loadingControl.$el).replaceWith(control.$el);
      });
      jb_trigger(control,'prepareDone');
    });
    return control;
  }

  return run(context.vars.$appendControl);

  function run($appendControl) {
    var style = (context.params.style != undefined) ? context.params.style : properties.style;
    if (typeof style == 'string') {
      var compName = jb_compName(context.profile);
      var defaultStyle = jb_run(jb_ctx(context,{profile: jbart.comps[compName].params.style.defaultValue }));
      style = jb_extend({},defaultStyle,{ cssClass: style});  // just overriding css class name
    }

    if (style.html) {
      var content = $(style.html).addClass(style.cssClass)[0];
      control.$el = $(content);
      control.$ = jb_controlFindIncludegSelf;
      if (content) {
        content.jbControl = control;
        if ($appendControl)
          $appendControl(control);
        else
          control.render = run;
      }
    }
    try {
      if (control.$el && control.$el.parent().length && style.create && !control.hidden) // activate onload only if used
        style.create(control);
    } catch(e) {
      jb_logException(e,'exception when running js of style');
    }
    if (control.id)
      control.$el.addClass('id-'+jb_fixid(control.id));

    jb_trigger(control,'render');
    
    return control;
  }
}

function jb_simpleControl(context,$el,moreProperties) {
  var control = {
    originalContext: context,
    $el: $el,
    el: $el[0]
  };
  $.extend(control,moreProperties);
  if (context.vars.$appendControl)
    context.vars.$appendControl(control);
  if (control.id) control.$el.addClass('id-'+jb_fixid(control.id));
  return control;
}

function jb_appendControl(parent, context, controlFunc) {
  var ctx = jb_ctx(context, { vars: { 
      $appendControl: function(control) {
        $(parent).append(control.$el);
  } } });
  controlFunc = controlFunc || jb_run;
  return controlFunc(ctx);
}
function jb_controlFindIncludegSelf(selector) {
  return selector ? this.$el.findIncludeSelf(selector) : this.$el;
}
function jb_removeElement(elem) {
  $(elem).remove(); // to clean memory leaks
  if ($.browser && $.browser.msie) jb_IE_cleanMemoryLeaks(elem);
}

function jb_IE_cleanMemoryLeaks(elem) {
  // TODO: remove all jb... properties from DOM ELEMENTS, + set .innerHTML to ''
}

function jb_firstElement(elem) {
  for(var iter=elem.firstChild;iter;iter=iter.nextSibling)
    if (iter.nodeType == 1) return iter;
}

function jb_findClass(objectOrElem,cls) {
  return $(objectOrElem.$el || objectOrElem).findIncludeSelf('.'+cls).first();
}

function jb_fixid(id) {
  return id.replace(/\s+/g,'-');
}
function jb_onElementDetach(elem,callback) {
  // TODO: implement
}

function jb_refreshControl(control,baseElem) {
  var elem;
  if (typeof control == 'string') {
    var controlID = control;
    if (controlID.indexOf(',') > -1)
      return jb_each(controlID.split(','),function(item) { jb_refreshControl(item,baseElem); });

    elem = jb_findControlElement(baseElem,controlID);
  } else if (control.nodeType) elem = control; // the html element
  else if (control.$el) elem = control.$el[0];  // control object

  if (!elem || !elem.jbControl) return; // control not found
  var vars = { 
    $appendControl: function(newControl) {
      $(elem).replaceWith(newControl.$el);
    }
  };

  jb_run(jb_ctx(elem.jbControl.originalContext, { vars: vars }));
}
function jb_findControlElement(baseElem,controlID) {
  // find the closest control element
  baseElem = baseElem || document.body;  
  var cls = 'id-'+jb_fixid(controlID);
  var found = searchChildren(baseElem);
  if (found) return found;

  // now go up and look parents/cousins
  var prevIter = baseElem;
  for(var iter=baseElem.parentNode;iter;iter=iter.parentNode) {
    if (isSearchedElement(iter)) return iter;
    var found = searchSiblings(prevIter);
    if (found) return found;

    prevIter = iter;
  }

  function isSearchedElement(elem) {
    return $(elem).hasClass(cls) && elem.jbControl.id == controlID;
  }

  function searchChildren(elem) {
    if (isSearchedElement(elem)) return elem;
    var controls = $(elem).find('.'+cls);
    if (controls[0]) return controls[0];
  }

  function searchSiblings(elem) {
    var parent = elem.parentNode;
    for(var iter=parent.firstChild;iter;iter=iter.nextSibling) {
      if (iter != elem) {
        var found = searchChildren(iter);
        if (found) return found;
      }
    }
  }
}

function jb_urlParam(param) {
  var out = (RegExp(param + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1];
  return (out && decodeURIComponent(out)) || '';
}

function jb_urlHashParam(param,value) {
  jb_listenToUrlChange();

  var regex = RegExp(param + '=' + '(.+?)(&|$)');

  if (typeof value == 'undefined') { 
    var out = (regex.exec(location.hash.replace(/([^[#]*)\?/,'?$path=$1&')) || [, null])[1]; // convert path to $path parameter. E.g., #doc1?a=b becomes #?$path=doc1&a=b
    return (out && decodeURIComponent(out)) || '';
  }

  if (param === '$path') {
    location.hash = location.hash.replace(/([^[#]*)\?/,value + '?');
    return;
  }

  var h = location.hash; 
  if (value) {
    if (!h.match(regex)) { // new param - add it to the end
      var sep = (h.indexOf('?') != -1) ? '&' : '?';
      location.hash = h + sep + param + '=' + value;
    }
    else     // replace existing param
      location.hash = h.replace(regex,function(x) { return param + '=' + value + (x.indexOf('&') != -1 ? '&' : '') });
  } else  // remove param
    location.hash = h.replace(RegExp('[&]?' + param + '=' + '(.+?)(&|$)'),'');
}

function jb_compareUrls(newUrl,oldUrl) {
  var res = [];
  var params = {};
  jb_each(oldUrl.split('?').pop().split('&'),function(param){
    var parts = param.split('=');
    params[parts[0]] = parts[1];
  })
  jb_each(newUrl.split('?').pop().split('&'),function(param){
    var parts = param.split('=');
    if (!params[parts[0]] || params[parts[0]] != parts[1])
      res.push(jb_run({profile: { $urlHashParam: parts[0]} }));
  });
  if ( (/([^[#]*)\?/.exec(newUrl) || [, null])[1] != (/([^[#]*)\?/.exec(oldUrl) || [, null])[1] ) // compare paths
    res.push(jb_run({profile: { $urlHashParam: '$path'} }));
  return res;
}

function jb_listenToUrlChange() {
  if (jbart.listeningToUrlChange) return;
  jbart.listeningToUrlChange = true;
  $(window).bind('hashchange', function(e) {
    e = e.originalEvent;
    jb_each(jb_compareUrls(e.oldURL.split('#').pop(), e.newURL.split('#').pop()),function(param) { 
      jb_fireObjectChanged(param);
    });
    jb_trigger(jbart,'afterhashchange', { url: e.newURL.split('#').pop() });
    jb_digest();
  });
}

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

function jb_disableSelection(elem) {
  if (!jbart.disableSelectionCssAppended) {
    jbart.disableSelectionCssAppended = true;
    var style = $('<style/>').html('.jb_unselected { webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}');
    style.appendTo('head');
  }
  $(elem).addClass('jb_unselected');
}

function jb_undisableSelection(elem) {
  $(elem).removeClass('jb_unselected');
}

function jb_showWidget(settings) {
  if (typeof(settings) == 'string')
    settings = { widget: settings };
  settings = $.extend({ 
    control: settings.widget + '.main',
    placeholder: $("body")[0]
  },settings);

  var context = jb_ctx();
  var widget = jbart_widgets[settings.widget] || { resources: {} };
  for (var resourceName in widget.resources || {}) 
    context.resources[resourceName] = widget.resources[resourceName];
  context.profile = typeof(settings.control) == 'string' ? { $:settings.control } : settings.control;
  jb_appendControl(settings.placeholder,context);
  $(settings.placeholder).addClass('jbart_widget');
  jb_extend( $(settings.placeholder)[0], { jbWidgetName: settings.widget } );

}


function jb_init() {
  if (typeof $ != 'undefined' && $.fn) 
    $.fn.findIncludeSelf = function(selector) { return this.find(selector).addBack(selector); }  
  jbart.show = jb_showWidget;
}

jb_init();


function jb_handledObject(object) {
  if (typeof object == 'object')
    object.$jb_parent = object.$jb_parent || 'root';
  return object;
}
function jb_initJbartObject() {
  jbart.classes = jbart.classes || {};
}

function jb_profile(profile) {  
  return profile;   // TODO: add support for alt-N
}

function jb_component(compName,component) {
  jbart.comps[compName] = jb_handledObject(component);
  if (jbart.currentFileName) 
    jb_path(jbart,['studio','componentFiles',compName],jbart.currentFileName);
}

function jb_type(typeName,typeObj) {
  jb_path(jbart,['types',typeName],typeObj || {});
}

function jb_function(funcName, func) {
  jb_path(jbart,['functions',funcName],func);
}

function jb_resource(widgetName,name,resource) {
  jb_path(jbart_widgets,[widgetName,'resources',name],jb_handledObject(resource));
}

function jb_tests(widgetName,tests) {
  jbart_widgets[widgetName] = jbart_widgets[widgetName] || {};
  jbart_widgets[widgetName].tests = jb_extend(jbart_widgets[widgetName].tests || {},tests);
}

function jb_ctx(context,ctx2) {
  if (!context) 
    return { vars: {}, params: {}, resources: {} };  // jb_ctx() means create new context

  return {
    profile: (typeof(ctx2.profile) != 'undefined') ?  ctx2.profile : context.profile,
    data: (typeof ctx2.data != 'undefined') ? ctx2.data : context.data,     // allowing setting data:null
    vars: ctx2.vars ? jb_extend({},context.vars,ctx2.vars) : context.vars,
    params: ctx2.params || context.params,
    resources: context.resources,
    componentContext: (typeof ctx2.componentContext != 'undefined') ? ctx2.componentContext : context.componentContext
  }
}

// end: context creation functions

function jb_profileHasValue(context,paramName) {
  return typeof context.profile[paramName] != 'undefined';
}

function jb_logError(errorStr) {
  jbart.logs = jbart.logs || {};
  jbart.logs.error = jbart.logs.error || [];
  jbart.logs.error.push(errorStr);
  jb_trigger(jbart.logs,'add',{ type: 'error', text: errorStr });
  console.error(errorStr);
}

function jb_logException(e,errorStr) {
  jb_logError('exception: ' + errorStr + "\n" + (e.stack||''));
}

// js type handling functions
function jb_isArray(obj) {
  if (typeof Array.isArray === 'undefined') {
    Array.isArray = function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }
  }
  return Array.isArray(obj);
}

// functions

function jb_extend(obj,obj1,obj2,obj3) {
  if (!obj) return;
  // similar to jQuery.extend but much faster for simple cases
  for(var i in obj1) obj[i] = obj1[i];
  if (obj2) for(var i in obj2) obj[i] = obj2[i];
  if (obj3) for(var i in obj3) obj[i] = obj3[i];

  return obj;
}
function jb_each(array,func) {
  for(var i=0;i<array.length;i++)
    func(array[i],i);
}
function jb_map(array,func) {
  var res = [];
  for(var i in array) {
    if (i.indexOf('$jb') == 0) continue;
    var item = func(array[i],i);
    if (jb_isArray(item))
      res = res.concat(item); // to check is faster than: for(var i=0;i<item.length;i++) res.push(item[i]);
    else if (item != null)
      res.push(item);
  }
  return res;
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
function jb_firstProp(obj) {

  for(var i in obj)
    if (obj.hasOwnProperty(i)) 
      return i;
  return '';
}
function jb_obj(k,v,base) {
  var ret = base || {};
  ret[k] = v;
  return ret;
}
function jb_cleanSystemProps(obj) {
  var ret = {};
  for(var i in obj) 
    if (! i.indexOf('$jb_') == 0)
      ret[i] = obj[i];

  return ret;
}

function jb_pushItemOrArray(arr,item) {
  // adds item to arr. if item is null, it is not added. if item is an array, all of its items are added. if it's a single object, it's just added
  if (typeof item == 'undefined' || item === null) return;
  if (!jb_isArray(item)) return arr.push(item);
  for(var i=0;i<item.length;i++)
    arr.push(item[i]);
}


function jb_bind(object,eventType,handler,identifier,elementForAutoUnbind,addAsFirstListener) {
  if (!object) return;
  object.$jbListeners = object.$jbListeners || {};
  object.$jbListeners.counter = object.$jbListeners.counter || 0;
  var listenerID = ++object.$jbListeners.counter;

  var listeners = object.$jbListeners[eventType] = object.$jbListeners[eventType] || [];

  for(var i=0;i<listeners.length;i++) {
    if (identifier && listeners[i].eventType == eventType && listeners[i].identifier == identifier) {
      listeners[i].handler = handler;
      return;
    }
  }
  var item = {eventType: eventType, handler: handler, identifier: identifier, listenerID: listenerID };
  if (addAsFirstListener)
    listeners.unshift(item);
  else
    listeners.push(item); 

  if (elementForAutoUnbind) {
    jb_onElementDetach(elementForAutoUnbind,function() { 
      jb_unbind(object,listenerID);
    });
  }

  return listenerID;
}

function jb_unbind(object,listenerID) {
  if (!object || !object.$jbListeners) return;

  for(var i in object.$jbListeners) {
    var listeners = object.$jbListeners[i];
    if (!listeners.length) continue;

    for(var j=0;j<listeners.length;j++) {
      if (listeners[j].listenerID == listenerID) {
        listeners.splice(j,1);
        return;
      }
    } 
  }
}

function jb_trigger(object,eventType,eventObject) {
  if (!object || !object.$jbListeners || !object.$jbListeners[eventType]) return;
  eventObject = eventObject || {};
  eventObject.eventType = eventType;
  var params = [eventObject].concat(Array.prototype.slice.call(arguments,3));
  
  var listeners = object.$jbListeners[eventType];
  for(var i=0;i<listeners.length;i++) {
    try {
      listeners[i].handler.apply(object,params);
    } catch(e) {
      jb_logException(e,'error trigerring event ' + eventType);
    }
  } 
}

function jb_cloneData(data) {
  if (!data) return null;
  if (data.nodeType) return $(data).clone(true)[0];
  if (typeof data != 'object') return data;

  if (Array.isArray(data))
    return data.map(function(item) { return jb_cloneData(item); })
  
  var out = {};
  for(var propName in data)
    if (propName.indexOf('$jb_') != 0) 
      out[propName] = jb_cloneData(data[propName]);
  return out;
}

jbart.run = function(context,data) {
  if (!context.profile) {
    context = jb_ctx(jb_ctx(), {profile: jb_profile(context), data: data });
  }
  return jb_run(context);
}

function jb_ref(obj,top) {
  if (typeof obj === 'string') {
    console.log('can find a ref for string: ' + obj);
    return null;
  }
  for(var i in top) {  
    if (i.indexOf('$jb') === 0 || (!top.hasOwnProperty(i))) continue;
    if (top[i] === obj) 
      return { parent: top, prop: i};
    if (typeof top[i] === 'object') {
      var res = jb_ref(obj,top[i]);
      if (res) 
        return res;
    }
  }
}
function jb_doOnCodeMirrorObject(func) {
	if (window.CodeMirror) 
		return func(window.CodeMirror);
	else 
		jb_bind(jbart,'CodeMirrorLoaded', function() { func(CodeMirror); });
	// TODO: load code mirror dynamically or else wait for it to load
}
 
function jb_codemirrorResizer(editor,cmElem, settings) {
	settings = $.extend({
		imageUrl: 'studio/img/resizer.gif',
		width: '16px',
		height: '16px',
		minWidth: 50,
		minHeight: 50,
		zIndex: 10,
		onDrag: function(width, height) {},
		onDragEnd: function(width, height) {}
	}, settings);

	$(cmElem).css('position', 'relative');
	var $resizer = $('<div class="jb-codemirror-resizer" style="position:absolute;bottom:0;right:0;background-repeat:no-repeat;" />');
	$resizer.css('background', 'url(' + settings.imageUrl + ')').css('width', settings.width).css('height', settings.height).css('cursor', 'se-resize').css("z-index", settings.zIndex);
	$resizer.appendTo(cmElem);

	if (settings.id && sessionStorage.getItem(settings.id)) {
		var size = JSON.parse(sessionStorage.getItem(settings.id));
		$(cmElem).width(size.width).height(size.height);
		editor.refresh();		
	}

	var dragState, $cover;

	$resizer.mousedown(function(e) {
		if (!dragState) {
			dragState = {
				mouseX: e.clientX,
				mouseY: e.clientY,
				width: $(cmElem).width(),
				height: $(cmElem).height()
			};

			$cover = $('<div style="height:100%; width: 100%; background:#000;z-index:10000; opacity:0; filter: alpha(opacity=0);position:fixed;top:0;left:0;top:0;bottom:0"/>');
			$cover.appendTo('body');
			jb_disableSelection(cmElem);
		}
		jb_setWindowEvent('mousemove', mouseMove);
		jb_setWindowEvent('mouseup', mouseUp);
	});

	function mouseMove(e) {
		var newWidth = Math.max(dragState.width + (e.clientX - dragState.mouseX), settings.minWidth);
		var newHeight = Math.max(dragState.height + (e.clientY - dragState.mouseY), settings.minHeight);

		$(cmElem).width(newWidth).height(newHeight);
		settings.onDrag(newWidth, newHeight);
	}

	function mouseUp(e) {
		dragState = null;
		jb_restoreWindowEvent(['mouseup', 'mousemove']);
		$cover.remove();
		jb_undisableSelection(cmElem);
		settings.onDragEnd($(cmElem).width(), $(cmElem).height());
		if (settings.id)
			sessionStorage.setItem(settings.id, JSON.stringify({width:$(cmElem).width(), height:$(cmElem).height() }));

		editor.refresh();		
	}
}
jb_component('studio.openjbEditor', {
	type: 'action',
	params : { profile: { defaultValue: { $:'studio.currentProfile' } } },
	impl: {
		$: 'openDialog',
		title: [{ $urlHashParam: 'studioPage' }, 'jBart Editor'],
		style: { $: 'dialog.studioFloating', id: 'studio jbEditor' },
		content: { $: 'studio.jbEditor', profile: '{{$profile}}'	}
	}
});

jb_component('studio.jbEditor',{
	type: 'control',
	params : { profile : {} },
	impl: {
		$: 'tree', style: 'studio-control-tree',
		nodes: { $: 'studio.jbEditorNodes' , profile: '{{$profile}}'},
		itemVariable: 'jbProfileValue',
		itemText: { $: 'studio.itemTextInjbEditor' },
		features: [ 
		  { $: 'studio.controlTreeIcon' }, { $: 'treeSelection' },
			{ $treeDoubleClickNode: { $: 'openDialog', 
		  		style: { $: 'studio.jbEditorPopup' },
		  		content: { $: 'studio.jbExpressionEditor', 
		  			parent: '{{parent}}', property: '{{propName}}', arrayIndex: '{{arrayIndex}}' 
		  		}
			}},
			{ $rightClickToAddItems: { $: 'studio.jbEditorRightClickPopup' } },
			{ $deleteNode: [{ $: 'studio.removeProfileValue', profileValue: '{{.}}' }, {$: 'studio.refreshPreview'}] },
		]
	}
});

jb_component('studio.jbEditorNodes', {
	type: 'treeNodes',
	params : { 
		profile: {}
	},
	impl: function(context,profile) {
		jb_initProfileValue();
		var profile_ref = jb_ref(profile,jbart_widgets) || jb_ref(profile,jb_jbart());
		profile_ref = profile_ref || { $asIs: profile , prop: '$asIs' }; 
		return [new jbart.classes.ProfileValue(profile_ref.parent,profile_ref.prop)];
	}
});

jb_component('studio.itemTextInjbEditor', {
	impl: function(context) {
		return context.data && context.data.title && context.data.title();
	}
});

jb_component('studio.removeProfileValue', {
	type: 'action',
	params: {
		profileValue: {},
	},
	impl: function(context,profileValue) {
		if (profileValue.arrayIndex != null)
			  profileValue.parent[profileValue.propName].splice(profileValue.arrayIndex,1);
		else
				delete profileValue.parent[profileValue.propName];
	}
});

function jb_initProfileValue() { 
	if (jbart.classes.ProfileValue) return;
	var extra_params = { $vars: { type: 'jbVars'}, $log: {}, $trace: {} };

	jbart.classes.ProfileValue = function(parent,propName,paramDef,arrayIndex) {
		this.parent = parent; 
		this.propName = propName;
		this.paramDef = paramDef || ((jbart.comps[jb_compName(parent)] || {}).params || {})[propName] || {};
		this.arrayIndex = arrayIndex; // only for array values
		this._calcVal();
		this.value = this; // used by the tree-node interface - the value is the node in this case
	}
	jbart.classes.ProfileValue.prototype = {
		_calcVal: function() {
			this.val = this.parent[this.propName];	// can be null
			if (this.arrayIndex != null) 
			  this.val = this.parent[this.propName] && this.parent[this.propName][this.arrayIndex];
		},
		assign: function(value) {
			// assign default values
			if (typeof value === 'object') {
				var params = (jbart.comps[jb_compName(value)] || {}).params || {};
				jb_map(params, function(paramDef,param) {
					if (paramDef.essential) {
						var type = paramDef.type || 'data';
						var valToAssign = paramDef.defaultValue;
						if (!valToAssign && type.indexOf('[') != -1)
							valToAssign = [];
						if (valToAssign === undefined) valToAssign = null;
						value[param] = valToAssign;
					}
				})
			}
			if (this.arrayIndex != null) {
				this.parent[this.propName] = this.parent[this.propName] || [];
			  this.parent[this.propName][this.arrayIndex] = value;
		  } else {
				this.parent[this.propName] = value;
			}
			this._calcVal();
		},
		title: function() {
			this._calcVal();

			var prop =  this.propName;
			if (this.arrayIndex != null) {
				var index = (this.parent[this.propName].length == this.arrayIndex) ? '+' : this.arrayIndex;
				prop =  this.propName + '[' + index + ']';
			} 
			var val = jb_compName(this.val || {}) || (typeof this.val == 'string' ? this.val : '');
			return val ? (prop + ' = ' + val) : prop;
		},
		children: function(inWatch) {
			this._calcVal();
			var self = this,val = this.val || '';
			if (typeof val != 'object') return []; // primitive or empty

			var params = jb_extend({},extra_params,(jbart.comps[jb_compName(val)] || {}).params);
			var out = jb_map(params,function(paramDef, prop) {
				if (val[prop] === undefined) return;
				if ((paramDef.type || 'data') == 'data' && Array.isArray(val[prop])) // open pipeline shortcut
					val[prop] = {$: 'pipeline', items: val[prop], $jb_arrayShortcut : true };
				var res = [];
				if (paramDef.type && paramDef.type.indexOf('[') != -1) { // flatten arrays
					var array = val[prop] || [];
					for(var i=0;i<=array.length;i++) // extra iteration for extra array element
						res.push(inWatch ? (prop + i) : new jbart.classes.ProfileValue(val,prop,paramDef,i));
				} else {
					res = inWatch ? prop : new jbart.classes.ProfileValue(val,prop,paramDef); 
				}
				return res;
			});
			if (this.paramDef && this.paramDef.type == 'jbVars')
				out = out.concat(Object.getOwnPropertyNames(val).concat(['+']).map(function(p) {
					return inWatch ? p : new jbart.classes.ProfileValue(val,p,{type: 'jbVar'});
			}));
			return out;
		},
		type: function() {
			return (this.paramDef.type || 'data').split('[')[0];
		},
		componentsOfType: function() {
			var type = (this.paramDef.type || 'data').split('[')[0];
			return jb_map(jbart.comps,function(c,name) { 
        if ((c.type || 'data') === type) return name;
      });
		},
		rightClickOptions: function() {
			this._calcVal();
			var val = this.val || '';
			var params = jb_extend({},extra_params,(jbart.comps[jb_compName(val)] || {}).params);
	    return jb_map(params,function(paramDef, prop) {
	    	if (val[prop] === undefined) return prop;		
	    });
		},
	}
}

// ======== Expression Editor ============

jb_component('studio.jbExpressionEditor', {
	type: 'control',
  params: { 
  	parent: {},
  	property: { as: 'string'} ,
	arrayIndex: { as: 'number'} ,
  },
	impl: function(context,parent,property,arrayIndex) {
		jb_initProfileValue();
		var profileValue = new jbart.classes.ProfileValue(parent,property,null,arrayIndex);

		var ctrl = { $: 'editableText',
			style: function() {	return {
				html: '<textarea/>',
				create: function(textbox) {	
					if (profileValue.type() == 'data')
						textbox.$el.val(jb_tostring(profileValue.val));
  					var cm = CodeMirror.fromTextArea(textbox.$el[0], {
          	mode: 'jbExpressionEditor', theme: 'jbExpressionEditor',
		        extraKeys: {
		          'Shift-4': function(cm) { // $
		          	cm.getDoc().replaceSelection('$');
		          	cm.jbHints = componentsOfType;
		          	cm.showHint();
		          },
 		          'Enter': function(cm) { 
 		          	profileValue.assign(cm.getDoc().getValue());
					    	context.vars.$dialog.close();
					    	context.vars.control.$el.focus();
    		    		jb_digest();
    		    		jb_studioRefreshPreview();
		          },
 		          'Esc': function(cm) { 
					    	context.vars.$dialog.close();
					    	context.vars.control.$el.focus();
		          }
		        }
          }); 
          setTimeout(function() { cm.focus() },1);
        }
			}}
		}
	 	return  jb_run(jb_ctx(context,{ profile: ctrl } ));

    function componentsOfType() {
      var comps = profileValue.componentsOfType();
      return comps.map(function(compName) { return {
	        text: compName, displayText: compName,
	        hint: function(cm) { // onSelect
	        	cm.getDoc().setValue(compName); // visual only
	        	profileValue.assign({ $: compName });
			    	context.vars.$dialog.close();
			    	try {
 		    			jb_studioRefreshPreview();
 		    		} catch(e) {}
			    	context.vars.control.$el.focus();

			    	jb_digest();
	        }
      	}
      });
    }
  }
});


jb_component('studio.jbEditorPopup', {
	type: 'dialog.style',
	impl: function(context,id) {
		return {
			html: '<div><div class="dialog-content"/></div>',
			cssClass: 'studio-jbExpression-popup',
			create: function(dialog) {
				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.uniqueDialog', id: 'jbEpression popup', remeberLastLocation: false },
					{$: 'dialogFeature.maxZIndexOnClick' },
					{$: 'dialogFeature.closeWhenClickingOutside' },
					{$: 'dialogFeature.cssClassOnLaunchingControl' },
					{$: 'dialogFeature.launcherLocationNearSelectedNode' }					
//					{$: 'dialogFeature.autoFocusOnFirstInput'}
				]);
				jb_dialog(dialog);
			}
		}
	}
});

// ============ jbEditorRightClickPopup  ==========

jb_component('studio.jbEditorRightClickPopup',{
	type: 'action',
	impl: {
	  	$: 'openPopup',
	  	style: { $: 'studio.selectPTPopupStyle', fromTree: true },
	  	content: {
				$: 'group',
				features: [
				  { $: 'feature.variable', varName: 'searchPattern', value: { $writableText: '' } }
				],
				controls: [
				  { $: 'editableText', parent: '{{$searchPattern}}', property: 'v', style: 'studio-select-pt-input',
				    features: { $: 'feature.searchTextbox', itemlistID: 'jbEditorRightClickPopupItemList' }
				  },
				  { 
				  	$: 'itemlist',
				  	items: [ 
				  	  function(context) {
			    			return context.vars.jbProfileValue.rightClickOptions()
						  },
						  { $filter: { $: 'searchFilter', pattern: '{{$searchPattern.v}}' } }
						],
				  	style: 'studio-select-pt-itemlist',
				  	features: [
					  	{ $id: 'jbEditorRightClickPopupItemList' },
				  		{ $: 'itemSelection' },
				  		{ $itemClick: [
						  	{ $: 'closeContainingPopup'},
				  			{ $: 'jbEditor.rightClickChosen' } 
				  		  ]
				  		}
				  	],
				  	controls: [
				  	  { $: 'label', text: '{{.}}', style: 'jb-studio-select-pt-item' }
				  	]		  	
				  }
				]	  		
	  	}
	}
});

jb_component('jbEditor.rightClickChosen',{
	type: 'action',
	impl: function(context) {
		var param = context.data;
		var profileValue = context.vars.jbProfileValue;
		var params = (jbart.comps[jb_compName(profileValue.val)] || {}).params;
		var paramDef = (params||{})[param];
		if (paramDef) {
			var type = paramDef.type || 'data';
			var valToAssign = paramDef.defaultValue;
			if (!valToAssign && type.indexOf('[') != -1)
				valToAssign = [];
			if (valToAssign === undefined) valToAssign = null;
			profileValue.val[param] = valToAssign;
		}

		setTimeout(function() {
			// select the new tree element...				
			var $newNode = context.vars.node.$el.find('.treenode').filter(function(index,el) { return el.jbItem.propName == param}).first();
			if ($newNode[0]) {
				context.vars.node.$el.removeClass('selected');
				$newNode.addClass('selected');
				jb_trigger(context.vars.treeControl,'selectionChanged',$newNode);
				$newNode.find('>.treenode-line').dblclick();
			}
		},50);
	}
});


// ============ jbExpressionEditor Grammar & hints ==========

jb_doOnCodeMirrorObject(function(CodeMirror) {
	CodeMirror.defineMode('jbExpressionEditor', function(config, parserConfig) {
		return jb_cmGrammar({
		  expressions : {
		    value: { $firstMatch: [
		      { $token: 'comp_name hint_helper', match: /\$[a-zA-Z][a-zA-Z0-9_]*/ },
		      { $exp: 'string_def' }, 
		    ]},
		    string_def: {$sequence: [
		      { $token: 'string_content string', match: /.*?{{/, backwards: 2 },
		      { $token: 'exp_begin quote', match: '{{' },
		      { $token: 'expression header', match: /.*?}}/ , backwards: 2 },
		      { $token: 'exp_end quote', match: '}}', next: 'string_def' },
		    ]},
		  },
		  actions: {},
		  checks: {},
		  startExp: 'value',
	  	startState: {},
		  cm_options: {}
		}, config, parserConfig);
	});

	CodeMirror.registerHelper('hint', 'jbExpressionEditor', function(cm, options) {
	  setTimeout(function() { 
	  	$('.CodeMirror-hints').css('z-index',3000).addClass('jbExpressionEditor'); 
	  }, 1);

	  var cur = cm.getCursor(), token = cm.getTokenAt(cur), comp=token.string.substr(1);
	  var filtered = cm.jbHints().filter(function(i) { 
	  	return i.text.indexOf(comp) != -1;
	  });

	  return { list: filtered , from: cur , to: cur };
	});	
})

jb_doOnCodeMirrorObject(function(CodeMirror) {

CodeMirror.defineMode("jbart5", function(config, parserConfig) {
  return jb_cmGrammar({
    expressions : {
      value: { $firstMatch: [
        { $exp: 'profile' }, { $exp: 'array' }, { $exp: 'string' }, 
        { $token: 'boolean atom', match: /(true|false)/},
        { $token: 'number atom', match: /[0-9\-]+/ },
        { $externalMode: 'javascript', probe: 'function' },
        { $token: 'comp_name error hint_helper', match: /[a-zA-Z][a-zA-Z0-9_]*/, action: 'pushComp' },
      ]},
      profile: {$sequence: [
        { $token: 'begin_profile bracket', match: '{' },
        { $firstMatch: [ { $exp: 'comp'}, { $exp: 'prop', action: 'pushComp'} ] },
        { $token: 'sep_profile', match: ',' , optional: true },
        { $repeat: 'prop' , sep: ',', end: '}' , sep_token: 'sep_profile bracket', end_token: 'end_profile bracket', postAction: 'popComp' }
      ]},
      comp: {$sequence: [
          { $token: 'begin_comp', match: '$' },
          { $firstMatch: [ {$exp: 'regular_comp'}, {$exp: 'sugar_comp'} ]}
      ]},
      regular_comp: { $sequence: [ 
        { $token: 'comp_colon bracket', match: ':'}, 
        { $startQuote: 'quote', match: /'|"/ },
        { $token: 'comp_name variable-2', match: {$toEndOfQuote: ''}, action: 'pushComp' }, 
        { $endQuote: 'quote'} 
      ]},
      sugar_comp: {$sequence: [ 
        { $token: 'comp_name comp-sugar variable-2' ,match: /[a-zA-Z][a-zA-Z0-9_]*/, action: 'pushComp'}, 
        { $token: 'prop_colon bracket', match: ':', action: 'pushFirstParam' }, 
        { $exp: 'value'}
      ], postAction: 'popParam'},
      prop: { $sequence: [
        { $token: 'profile_prop attribute', match: /[a-zA-Z\$][a-zA-Z0-9_\$]*/, action: 'pushParam' }, 
        { $token: 'prop_colon bracket', match: ':' },
        { $exp: 'value'}
      ], postAction: 'popParam'},
      array: {$sequence: [
        { $token: 'begin_array bracket', match: '[' },
        { $repeat: 'value' , sep: ',' , end: ']', sep_token: 'sep_array bracket', end_token: 'end_array bracket' }
      ]},
      recover: { $firstMatch: [ {$exp: 'prop'}, {$exp: 'value'} ]},
      string: { $startQuote: 'begin_string quote', match: /'/, next: 'string_def' },
      string_def: {$firstMatch: [
          {$sequence: [
            { $token: 'string_content string', match: /[^']*?{{/, backwards: 2 },
            { $token: 'exp_begin quote', match: '{{' },
            { $token: 'expression header', match: /[^']*?}}/ , backwards: 2 },
            { $token: 'exp_end quote', match: '}}', next: 'string_def' },
          ]},
          {$sequence: [
            { $token: 'string_content', match: {$toEndOfQuote: ''}},
            { $endQuote: 'end_string quote'} 
          ]}
      ]}
    },
    actions: {
      pushComp: function(state) { state.tgpStack.push('comp:' + state.match[0]) },
      popComp: function(state) { state.tgpStack.pop() },
      pushParam: function(state) { state.tgpStack.push('param:' + state.match[0]) },
      popParam: function(state) { state.tgpStack.pop() },
      pushFirstParam: function(state) { state.tgpStack.push('param:$first') }
    },
    checks: {
      profileOfType: function(state) {},
      paramOfProfile: function(state) {},
    },
    ignoreWhiteSpaces : true,
    startExp: 'value',
    startState: { tgpStack: [] },
    cm_options: {
//      indent: function(state, textAfter) { return state.tgpStack.length * 2; },
    //    electricInput: /^\s*[{$]/,
      blockCommentStart: "/*",
      blockCommentEnd: "*/",
      lineComment: "//",
      fold: "profile",
    }
  },config, parserConfig);
});

CodeMirror.registerHelper("hint", "jbart5", function(cm, options) {

    function locateToken(to_search,pos) {
      var t = lineTokens.filter(function(t) { return t.state.token.indexOf(to_search) == 0 && t.begin >= cur.ch })[0];
      return t && t[pos];
    }

    var hints = {
      comp: {
        options: 'components_of_type', backwards: 4,
        trans: function(comp) { 
          if (comp == 'pipeline') return '[]';
          return "{ $:'" + comp +"' }, " 
        }
      },
      param: {
        options: 'params_of_comp',backwards: 1,
        trans: function(param) { 
          var paramObj = param_obj(param);
          var addComma = token.type === 'quote' ? ', ' : '';
          var isArray = paramObj && paramObj.type && paramObj.type.indexOf('[') != -1;
          return addComma + param + ": " + (isArray ? '[ ]' : '');
        }
      },
    };
    hints.begin_array = hints.sep_array = hints.prop_colon;

    var options = {
      components_of_type: function() {
        var param = state.tgpStack.slice(-1).pop();
        if (!param || !param.indexOf('param:') == 0) return [];
        var comp = state.tgpStack.slice(-2)[0];
        if (!comp || !comp.indexOf('comp:') == 0) return [];

        var params = jbart.comps[comp.split(':').pop()].params;
        var paramObj = params && params[param.split(':').pop()];
        var type = ((paramObj && paramObj.type) || 'data').split('[')[0];
        return jb_map(jbart.comps,function(c,name) { 
          if ((c.type || 'data') === type) return name;
        });
      },
      params_of_comp: function() {
        var comp = state.tgpStack.slice(-1)[0];
        if (!comp || !comp.indexOf('comp:') == 0) return [];
        var params = (jbart.comps[comp.split(':').pop()] || {}).params;
        return Object.getOwnPropertyNames(params || {});
      }
    }


    var cur = cm.getCursor(), curLine = cm.getLine(cur.line), lineTokens = cm.getLineTokens(cur.line,true);
    var token = cm.getTokenAt(cur), state = token.state, editable_length = 0;
    if (token.type.indexOf('profile_prop') != -1 || token.type.indexOf('comp_name') != -1) { 
      editable_length = token.end - token.start;
      state.tgpStack.pop(); // the edited param is pushed
    }

    var hint_key = (state.tgpStack.slice(-1)[0]||'').indexOf('comp') == 0 ? 'param' : 'comp';
    var list = (hints[hint_key] && hints[hint_key].options && options[hints[hint_key].options]() ) || [];
    if (editable_length) list = list.filter(function(i) { return i.indexOf(token.string) != -1 }); // filter with user typing

    list = list.concat(['--state---','token: ' + token.state.token ,'next: ' + token.state.next,'string: ' + token.string,'---stack---'])
    .concat(token.state.handlersStack)
    .concat(['--tgpStack--'])
    .concat(token.state.tgpStack);
    list = list.map(function(op){ return {
        text: (hints[hint_key] && hints[hint_key].trans && hints[hint_key].trans(op) ) || op, 
        displayText: op,
        hint: function() {
          cm.getDoc().replaceRange(this.text, { line: cur.line, ch: cur.ch - editable_length }, cur);
          cm.getDoc().setCursor({line: cur.line, ch: cur.ch - editable_length + this.text.length - (hints[hint_key].backwards || 0) })
        }
      }
    });

    setTimeout(function() { $('.CodeMirror-hints').css('z-index',3000); }, 1);

    return {list: list, from: { line: cur.line, ch: cur.ch - editable_length } , to: cur };


    function param_obj(param) {
        var comp = state.tgpStack.slice(-1)[0];
        if (!comp || !comp.indexOf('comp:') == 0) return [];
        var params = (jbart.comps[comp.split(':').pop()] || {}).params;
        return (params || {})[param];
    }

});

// ************** Fold ****
(function(CodeMirror) {

  function doFold(cm, pos, options, force) {
    if (typeof pos == "number") pos = CodeMirror.Pos(pos, 0);

    var range = getRange(true);
    if (!range || range.cleared || force === "unfold") return;

    var _widget = makeWidget(getCompName(range.from) || 'profile');
    CodeMirror.on(_widget, "mousedown", function(e) {
      myRange.clear();
      CodeMirror.e_preventDefault(e);
    });
    var myRange = cm.markText(range.from, range.to, {
      replacedWith: _widget, clearOnEnter: true,__isFold: true
    });
    myRange.on("clear", function(from, to) {
      CodeMirror.signal(cm, "unfold", cm, from, to);
    });
    CodeMirror.signal(cm, "fold", cm, range.from, range.to);

    function getRange(allowFolded) {
      var range = findRange(cm, pos);
      var marks = cm.findMarksAt(range.from);
      for (var i = 0; i < marks.length; ++i) {
        if (marks[i].__isFold && force !== "fold") {
          if (!allowFolded) return null;
          range.cleared = true;
          marks[i].clear();
        }
      }
      return range;
    }
    function getCompName(start) {
       var tokens = cm.getLineTokens(start.line,true);
       var comp_name = tokens.filter(function(t) { return (' ' + t.type + ' ').indexOf(' comp_name ') != -1 })[0];
       return comp_name && comp_name.state.tgpStack.slice(-1)[0].split(':').pop()
    }
    function makeWidget(text) {
      var widget = document.createElement("span");
      widget.appendChild(document.createTextNode(text));
      widget.className = "CodeMirror-foldmarker";
      return widget;
    }
    function findRange(cm, start) {
      var lastLine = cm.lastLine();
      var lastToken = cm.getLineTokens(lastLine).pop(); lastToken.line = lastLine;

      var from = getFirstMatch(start,'begin_profile'); from.ch = from.start;
      var to = getFirstMatch(from,'end_profile'); to.ch = to.end;

      return { from: from, to: to }

      function getFirstMatch(from,token) {
        for(var line=from.line;line <= lastLine;line++) {
          var tokens = cm.getLineTokens(line,true);
          var found = tokens.filter(function(t) { return (' ' + t.type + ' ').indexOf(' ' + token + ' ') != -1 })[0];
          if (found) { 
            var same_stack = !from.state || from.state.tgpStack.length == found.state.tgpStack.length;
            if (same_stack) {
              found.line = line;
              return found;
            }
          }
        }
        return lastToken; // not found
      }
    }
  }

  CodeMirror.defineExtension("foldCode", function(pos, options, force) {
    doFold(this, pos, options, force);
  });

  CodeMirror.defineExtension("isFolded", function(pos) {
    var marks = this.findMarksAt(pos);
    for (var i = 0; i < marks.length; ++i)
      if (marks[i].__isFold) return true;
  });

  CodeMirror.commands.toggleFold = function(cm) {
    cm.foldCode(cm.getCursor());
  };
  CodeMirror.commands.fold = function(cm) {
    cm.foldCode(cm.getCursor(), null, "fold");
  };
  CodeMirror.commands.unfold = function(cm) {
    cm.foldCode(cm.getCursor(), null, "unfold");
  };
  CodeMirror.commands.foldAll = function(cm) {
    cm.operation(function() {
      for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
        cm.foldCode(CodeMirror.Pos(i, 0), null, "fold");
    });
  };
  CodeMirror.commands.unfoldAll = function(cm) {
    cm.operation(function() {
      for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
        cm.foldCode(CodeMirror.Pos(i, 0), null, "unfold");
    });
  };

  CodeMirror.registerHelper("fold", "auto", function(cm, start) {
    var helpers = cm.getHelpers(start, "fold");
    for (var i = 0; i < helpers.length; i++) {
      var cur = helpers[i](cm, start);
      if (cur) return cur;
    }
  });

})(CodeMirror);

});

function jb_cmGrammar(options,config, parserConfig) {
  var stream,state;
  var match = { $toEndOfQuote: function(state) { var a = /[^']*/, b = /[^"]*/; return (state.Quote == "'") ? a : b }  };
  var generic_states = {
    token: function(profile,path) {
      if (profile.debug) debugger;
      var pattern = profile.match;
      if (typeof pattern === 'object' && !(pattern instanceof RegExp))
        pattern = match[jb_firstProp(pattern)](state);
      return {
        check: function() { return !!stream.match(pattern,false); },
        next: function() { 
          state.match = stream.match(pattern);
          if (state.match === true) state.match = ['']; // empty string match
          if (!state.match && !profile.optional) 
            return { token: 'error'} 
          if (profile.backwards) {
            stream.backUp(profile.backwards);
            if (state.match[0]) state.match[0].slice(0,0-profile.backwards);
          }
          performAction(profile.action,state);
          var next = profile.next;
          var checks_token = profile.check && options.checks[profile.check](state);
          var token = profile.$token;
          if (checks_token) token = [token, checks_token].join(' ');

          return { token: token, next: next}
        }
      }
    },
    startQuote: function(profile, path) {
      return {
        check: function() { return stream.match(profile.match,false) },
        next: function() { 
          state.Quote = stream.match(profile.match)[0]; 
          return {token: profile.$startQuote, next: profile.next } 
         }
       }
    },
    endQuote: function(profile,path) {
      return {
        check: function() { return stream.match(state.Quote,false) },
        next: function() { 
          stream.match(state.Quote); 
          return {token: profile.$endQuote, next: profile.next} 
        }
      }
    },
    sequence: function(profile,path) {
      return {
        check: function() { return profToObj(profile.$sequence[0]).check() },
        next: function(_index) { 
          var index = parseInt(_index) || 0;
          if (index >= profile.$sequence.length) {
            performAction(profile.postAction,state);
            return {}; 
          }
          if (index < profile.$sequence.length - (profile.postAction ? 0 : 1))
            state.handlersStack.push(path + ':' + (index+1));
          return profToObj(profile.$sequence[index],path +'.$sequence.'+index).next();
        }
      }
    },
    repeat: function(profile,path) {
      return {
        check: function() { 
          return stream.match(profile.sep,false) || stream.match(profile.end,false);
        },
        next: function(expectSep)  { 
          if (stream.match(profile.end)) {
            performAction(profile.postAction,state);
            return { token: profile.end_token || 'end', next:  state.handlersStack.pop()}
          }
          if (expectSep === 'true') {
            if (stream.match(profile.sep))
              return { token: profile.sep_token || 'sep', next: path }
          } else {
            state.handlersStack.push(path + ':true');
            return profToObj(options.expressions[profile.$repeat],profile.$repeat).next();
          }
          return { token: profile.error || 'error' }
        }
      }
    },
    exp: function(profile,path) {
      if (profile.debug) debugger;
      var obj = profToObj(options.expressions[profile.$exp],profile.$exp);
      return {
        check: function() { return obj.check() },
        next: function()  { return obj.next() } // { token: profile.$exp, next: profile.$exp} },
      }
    },
    externalMode: function(profile,path) {
      return {
        check: function() { return stream.match(profile.probe,false) },
        next: function()  { 
          state.localMode = CodeMirror.getMode(config, profile.$externalMode);
          state.localState = state.localMode.startState();
          return {};
        },
      }
    },
    firstMatch: function(profile,path) {
      return {
        check: function() { return true },
        next: function() { 
          if (profile.debug) debugger;
          var options = profile.$firstMatch;
          for (var i=0; i<options.length; i++) {
            var exp = profToObj(options[i],path +'.$firstMatch.'+ i);
            if (exp.check())
             return exp.next();
          }
  }}}};

  function performAction(action) {
    if (!action) return;
    if (Array.isArray(action))
      action.forEach(function(i){ options.actions[i](state) })
    else 
      options.actions[action](state);
  }

  function profToObj(profile,path) {
    if (typeof profile === 'string') profile = options.expressions[profile];
    var pt = jb_firstProp(profile).split('$').pop();
    if (!generic_states[pt]) 
      console.log('Can not find PT ' + pt);
    if (profile.debug) debugger;
    return generic_states[pt](profile,path);
  }

  function nextStrToObj(nextStr) {
    var path = nextStr.split(':')[0];
    var profile = path.split('.').reduce(function(prof,prop){ return prof[prop]},options.expressions);
    if (!profile)
      console.log('can not find profile of path: ' + nextStr);
    return profToObj(profile,path);
  }

  function processLocalMode() {
    var res = state.localMode.token(stream, state.localState);
    if (state.localState.lastType == '}') { // ugly heuristics for end of local mode
      if (!state.localState.lexical.prev || !state.localState.lexical.prev.prev) { 
        state.localMode = state.localState = null;
        return null;
      }
    }
    return res;
  }

  function nextToken() {
    state.token = null;
    if (!state.next && state.handlersStack.length == 0) {
      stream.skipToEnd();
      var ret = { token: 'error' };
    } else {
      state.next = state.next || state.handlersStack.pop();
      var pos_before = stream.pos;
      var ret = nextStrToObj(state.next).next(state.next && state.next.split(':').pop());
      if (!ret && stream.pos == pos_before) { // stream not advancded
        stream.match(/./); // mark next char as error
        ret = { token: 'error' };
      }
    }

    state.next = ret && ret.next; 
    state.token = ret ? ret.token : 'error';
  }

  return jb_extend({
    startState: function() {
      return jb_extend({ handlersStack: [], next :  options.startExp }, options.startState ) ;
    },

    token: function(_stream, _state) {
      stream = _stream; state = _state;
      try {
        if (state.localMode) 
          state.token = processLocalMode();
        else if (options.ignoreWhiteSpaces && stream.match(/\s+/))
          state.token = 'space'; 
        else
          nextToken();
//      console.log(state.token);
        return state.token;
      } catch (e) {
        console.log(e);
      }
    },
  },options.cm_options);
}

jb_component('studio.probeControl',{ 
  type:'data',
  params: {
    control: { as:'single', dynamic:true },
    profile: { as:'single' }
  },
  impl: function(context,control,profile) {
    var jb = jbart.previewjbart || jbart;
    var prevProbeVal = jb.probe;
    jb.probe = true;
    jb_appendControl($('<div/>'),context,control);
    jb.probe = prevProbeVal;
    return profile && profile.$jb_probe;
  }
});

jb_component('studio.probe',{
  type:'data',
  params: {
    profile: { as:'single' }
  },
  impl: function(context,profile) {
    return profile && profile.$jb_probe;
  }
});

jb_component('studio.showProbeData', {
	type: 'action',
	impl: {
      $: 'openDialog',
      title: [
        { $:'studio.currentProfile' }, 
        { $: 'studio.componentOfProfile' } 
      ],
      style: { $: 'dialog.studioFloating', id: 'studio preview tree' },
      content: { 
        $: 'propertySheet', 
        $vars: {
          probe: { $: 'studio.probe', profile: { $:'studio.currentProfile' } },
          databind: { $:'studio.probeDatabind', profile: { $:'studio.currentProfile' } }
        },
        controls: [ 
          { $:'label', title: 'input', text: { $:'studio.showProbeValue', value: '{{$probe.data}}', space:' ' } },
          { $:'label', title: 'databind', text: { $:'studio.showProbeValue', value: '{{$databind}}', space:' ' } }
        ],
        features: { $cssClass: 'probe-dialog-content' }
	}
  }
});

jb_component('studio.probeDatabind', {
  type: 'data',
  params: {
    profile: { as:'single', defaultValue: { $:'studio.currentProfile' } },
  },
  impl: function(context,profile) {
    var databindProf = jb_profileParamValue(profile,'databind') || jb_profileParamValue(profile,'items') || jb_profileParamValue(profile,'text');
    if (databindProf && profile.$jb_probe) 
	    return jb_map(profile.$jb_probe.all, function(probeContext) {
        return jb_run(jb_ctx(probeContext,{ profile:databindProf }));
      });
  } 
});

jb_component('studio.showProbeValue', {
  type: 'data',
  params: {
    value: { defaultValue: '{{}}'}
  },
  impl: function(context,value) {
    var out = '';
    jb_toarray(value).forEach(function(val) {
      if (val && val.$jb_property) {
        out += val.$jb_property + " : ";
        val = val.$jb_parent[val.$jb_property];
      }
      if (typeof val == 'object')
        out += JSON.stringify(val,null,' ');
      else
        out += val;
      out += '\n';
    });
    return out;
  }
});
jb_component('studio.componentDef',{ 
  type: 'data',
  params: { 
    id: { as:'string' },
    impl: { type:'boolean', as:'boolean'}
  },
  impl: function(context,id,impl) {
    var jb = jbart.previewjbart || jbart;
    return impl ? jb.comps[id] && jb.comps[id].impl : jb.comps[id];
  }
  });

jb_component('studio.componentOfProfile',{ 
  type: 'data',
  params: {
    profile: { as:'single', defaultValue: '{{.}}'}
  },
  impl: function(context,profile) {
    return jb_compName(profile);
  }
});

jb_component('studio.types',{ 
  type: 'data',
  impl: function(context) {
    return jb_handledObject(jb_jbart().types);
  }
});

jb_component('studio.components',{ 
  type: 'data',
  impl: function(context) {
    return jb_handledObject(jb_jbart().comps);
  }
});

jb_component('studio.componentsOfType',{
  type: 'data',
  params: {
    type: { as: 'string'}
  },
  impl: function(context,type) {
    type = type.replace('[]','');
    return jb_map(jb_jbart().comps,function(c,name) { 
        if (c.type == type) return name;
      });
  }
});
function jb_profileParamValue(profile,paramName) {
  if (profile[paramName]) return profile[paramName];  
  var compName = jb_compName(profile);
  var compParams = jb_path((jbart.jbartpreview || jbart).comps[compName],['params']);
  if (!compParams) return null;
  if (profile['$' + compName] && Object.keys(compParams)[0] == paramName) // $comp sugar
    return profile['$' + compName];
  return jb_path(compParams,[paramName,'defaultValue']);
}

function jb_jbart() {
  return jbart.previewjbart || jbart;
}

jb_component("studio.mainMenu", {
	type: 'control',
	impl: {
   $: 'group', style: 'studio-main-menu',
  	controls: [
  		{ $: 'studio.topMenuItem', text: 'File',
  		  controls: [
  		    { $: 'studio.MenuItem', text: 'Open ...', action: { $: 'studio.openWidget'} },
  		    { $: 'studio.MenuItem', text: 'Save', spritePosition: '4,0', action: { $: 'studio.saveWidget'} }
  		  ]
  		},
  		{ $: 'studio.topMenuItem', text: 'View',
  		  controls: [
  		    { $: 'studio.MenuItem', text: 'Refresh', spritePosition: '10,0', action: { $: 'studio.refreshPreview'} },
  		    { $: 'studio.MenuItem', text: 'Edit source', spritePosition: '3,0', action: { $: 'studio.editSource'} },
  		    { $: 'studio.MenuItem', text: 'Control tree', spritePosition: '5,0', action: { $: 'studio.openControlTree'} },
  		    { $: 'studio.MenuItem', text: 'jbEditor', spritePosition: '6,0', action: { $: 'studio.openjbEditor'} }
  		  ]
  		},
  		{ $: 'studio.topMenuItem', text: 'Data',
  		  controls: [
  		    { $: 'dynamicFields', list: { $: 'studio.dataResources' }, variable: 'dataResource',
  		    	genericField: { $: 'studio.MenuItem', text: '{{$dataResource.name}}', action: { '$studio.showDataResource': '{{$dataResource}}'} }
			},
  		    { $: 'studio.MenuItemSeparator' },
  		    { $: 'studio.MenuItem', text: 'Add Data Resource...', action: { $: 'studio.addDataResource'} }
  		  ]
  		}
  	]
	}
});

jb_component("studio.MenuItemSeparator", {
	type: 'control',
	impl: {
		$: 'customControl',
		html: '<div/>',
		cssClass: 'jb-studio-menu-separator',
		create: function(control) { }
	}
});

jb_component("studio.MenuItem", {
	type: 'control',
	params: {
		text: {},
		spritePosition: {},
		action: { type: 'action', dynamic: true },
		features: { type: "feature[]", dynamic: true }
	},
	impl: {
		$: 'button',
		text: '{{$text}}',
		style: { $: 'studio_button.menuButton', spritePosition: '{{$spritePosition}}' },
		action: [
		  { $: 'closeContainingPopup' },
		  { $call: 'action' }
		],
		features: { $call: 'features' }
	}
});

jb_component('studio_button.menuButton',{
	type: 'button.style',
	params: {
		spritePosition: { as: 'string', defaultValue: '0,0' }
	},
	impl: function(context,spritePosition) {
		return {
			html: '<button><span/></button>',
			cssClass: "studio-menu-item",
			create: function(button) {
				button.$el.text(button.text);
				button.$el.click(function() { button.action(); });
				if (spritePosition) {
					var pos = jb_map(spritePosition.split(','),function(item) { return (-parseInt(item)*16) + 'px'; }).join(' ');
					$('<span/>').css('background-position',pos).appendTo(button.$el);
				}
			}
		}
	}
});



jb_component("studio.topMenuItem", {
	type: 'control',
	params: {
		text: {},
		style: { type: 'studioTopMenuItem.style', defaultValue: { $: 'studioTopMenuItem.default' } },
		controls: { type: 'control[]', ignore: true }
	},
	impl: function(context,text,style,controls) {
		return jb_control(context,{
			text: text,
			controlsProfile: context.profile.controls || []
		});		
	}
});

jb_type('studioTopMenuItem.style');

jb_component('studioTopMenuItem.default',{
	type: 'studioTopMenuItem.style',
	impl: function() {
		return {
			html: '<div/>',
			cssClass: "jbstudio-top-menu-item",
			create: function(control) { jb_topMenuItem(control); }
}}});

function jb_topMenuItem(control) {
	control.$el.text(control.text);
	control.$el.click(openPopup);

	control.$el.mouseenter(function() {
		if ($('.studio-mainmenu-popup')[0]) openPopup();
	});

	control.openMenuProfile = jb_profile({
		$: 'openDialog',
		style: { $: 'studioPopup.mainMenuPopup'},
		content: {
			$: 'group',
			controls: control.controlsProfile
		}
	});

	function openPopup() {
		jb_run(jb_ctx(control.context,{ profile: control.openMenuProfile }));		
	}
}

jb_component('studioPopup.mainMenuPopup',{
	type: 'dialog.style',
	impl: function(context,id) {
		return {
			html: '<div><div class="dialog-content"/><div class="studio-menu-remove-top-border"/></div>',
			cssClass: 'studio-mainmenu-popup',
			create: function(dialog) {
				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.uniqueDialog', id: 'studio main menu popup', remeberLastLocation: false },
					{$: 'dialogFeature.maxZIndexOnClick' },
					{$: 'dialogFeature.closeWhenClickingOutside' },
					{$: 'dialogFeature.cssClassOnLaunchingControl' },
					{$: 'dialogFeature.nearLauncherLocation' }					
				]);
				jb_bind(dialog,'attach',function() {
					dialog.$('.studio-menu-remove-top-border').width( dialog.context.vars.control.$el.outerWidth() -2 );
				})
				jb_dialog(dialog);
			}
		}
	}
});

jb_component('studioPopup.contextMenuPopup',{
	type: 'dialog.style',
	impl: function(context,id) {
		return {
			html: '<div><div class="dialog-content"/></div>',
			cssClass: 'studio-contextmenu-popup',
			create: function(dialog) {
				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.uniqueDialog', id: 'studio context menu popup', remeberLastLocation: false },
					{$: 'dialogFeature.maxZIndexOnClick' },
					{$: 'dialogFeature.closeWhenClickingOutside' },
					{$: 'dialogFeature.cssClassOnLaunchingControl' },
					{$: 'dialogFeature.nearLauncherLocation' }					
				]);
				jb_dialog(dialog);
			}
		}
	}
});



jb_component('studio.openWidget',{
	type: 'action',
	impl: {
		$: 'openDialog',
		$vars: { allWidgets: { $object:[] }},
		content: {
			$: 'itemlist',
			items: '{{$allWidgets}}',
			itemVariable: 'html',
			controls: { $label: '{{$html}}', style: 'jb-studio-widget-to-open', features:
				{ $onclick: { $openUrl: [
					{ $:'split', separator:'.html', text:'{{$html}}' },
					'/jbart/studio.html?widget={{}}'
				] } }
			},
			features: { $prepare: {
				$if: { $isEmpty: '{{$allWidgets}}' },
				then: { $httpCall: '/?op=widgetList', features: { 
					$onSuccess: { $:'addToArray', array:'{{$allWidgets}}', 
						add: { $:'split', separator:','} } } } }
			}
		},
		title: 'Open Widget ...'
	}
});
jb_component('studio.select', {
	type: 'action',
	impl: function(context) {
		var _window = jbart.studio.previewWindow;
		var _$window = $(_window);
		var _body = _window.document.body;
		var _head = _window.document.head || _window.document.body;
		var prevMouseMove = _window.onmousemove, prevMouseDown = _window.onmousedown, prevKeyup = _window.onkeyup;

		if (!_window.jbAddedPickCss) {
			_window.jbAddedPickCss = true;
			addPickCss();
		}
		_window.onmousemove = mousemove;
		_window.onmousedown = mousedown;

		_window.onkeyup = keyup;
		
		$('.studio-widget-placeholder').addClass('shadow');
		if (! _$('#jbs-rect').length ) {
			$('<div id="jbs-rect"/>').appendTo(_body)
			$('<div id="jbs-title"><div class="text" /><div class="triangle"/></div>').appendTo(_body);
			$('<div class="jbs-shadow top"/>').appendTo(_body);
			$('<div class="jbs-shadow bottom"/>').appendTo(_body);
			$('<div class="jbs-shadow left"/>').appendTo(_body);
			$('<div class="jbs-shadow right"/>').appendTo(_body);
		}
		_$('.jbs-shadow').show();
		$(_body).addClass('jbs-select');
		clearSelection();

		function _$(selector) {
			return $(_body).find(selector);
		}
		function mousemove(e) {
			_$('#jbs-title,#jbs-rect,.jbs-shadow').css({ zIndex: -1 });
			$el1 = $(_window.document.elementFromPoint(e.pageX - _$window.scrollLeft(), e.pageY - _$window.scrollTop()));
			if (!$el1[0]) return;
			var $el = $($el1.get().concat($el1.parents().get())).filter(function(i,e) { return e.jbControl; }).first();
			if (!$el[0] && isAngularElement($el1[0])) 
				$el = $($el1.get().concat($el1.parents().get())).filter(function(i,e) { return !!e.getAttribute('_jb'); }).first();

			_$('.jbs-shadow').show().css({ zIndex: 6000 });
			if (!$el.length) { clearSelection(); return; }

			_$('#jbs-title').show().css({ zIndex: 60001 });
			_$('.jbs-shadow.top').css({ height: $el.offset().top });
			_$('.jbs-shadow.bottom').css({ top: $el.offset().top + $el.outerHeight(), height: docHeight() - $el.offset().top - $el.outerHeight() });
			_$('.jbs-shadow.left').css({ width: $el.offset().left });
			_$('.jbs-shadow.right').css({ left: $el.offset().left + $el.outerWidth() });
			_$('.jbs-shadow.left,.jbs-shadow.right').css({ top: $el.offset().top, height: $el.outerHeight() });
			$titleText = _$('#jbs-title .text');
			if ($el[0].jbControl) {
				var profile = $el[0].jbControl.originalContext.profile;
				$titleText.text(jb_compName(profile));
			} else {
				$titleText.text(angularElementName($el[0]));
			}
			setTimeout(function() {
				if ($el.offset().top - $titleText.outerHeight() -6 > _$window.scrollTop()) {
					_$('#jbs-title').css({
						top: $el.offset().top - $titleText.outerHeight() -6,
						left: $el.offset().left + ($el.outerWidth() - $titleText.outerWidth())/2
					}).removeClass('bottom');
					_$('#jbs-title .triangle').css({ marginLeft: $titleText.outerWidth()/2-6 });
				}	else {	// label under element
					_$('#jbs-title').css({
						top: $el.offset().top + $el.outerHeight(),
						left: $el.offset().left + ($el.outerWidth() - $titleText.outerWidth())/2
					}).addClass('bottom');
					_$('#jbs-title .triangle').css({ marginLeft: $titleText.outerWidth()/2-6 });
				};
			},1);
			jbart.studio.hover = $el[0];
		}

		function mousedown(e) {
			try {
				if (jbart.studio.hover && jbart.studio.hover.jbControl) {
					var profile = jbart.studio.hover.jbControl.originalContext.profile;
					jb_run(jb_ctx(context,{ 
						data: profile,
						profile: [
							{ $: 'writeValue', value: { '$studio.profilePath': '{{.}}' }, to: { $: 'studio.currentProfilePath'} },
							{ $: 'studio.openProperties' },
							{ $: 'studio.openControlTree' }
						]
					}),{ type:'action'});
				} else {	// angular
					jb_studioAngularPickElem(context,jbart.studio.hover);				
				}
			} catch(e) {
				console.log(e);
			}
			finish();
			$('<div class="jb-noclick-cover" style="z-index:5000;position:absolute;top:0;left:0;right:0;background:transparent;" />').css('height',docHeight()+'px')
			.mouseup(function() { $(this).remove(); })
			.appendTo(_window.document.body);
		}

		function keyup(e) {
			if (e.keyCode == 27)	// ESC
				finish();
		}

		function docHeight() {
			return Math.max($(jbart.studio.previewWindow).outerHeight(),$(jbart.studio.previewWindow.document).outerHeight());
		}
		function clearSelection() {
			_$('#jbs-title').hide();
			_$('.jbs-shadow.top').css({ height: 0 });
			_$('.jbs-shadow.bottom').css({ top: 0, height: docHeight() });
			_$('.jbs-shadow.left').css({ width: 0 });
			_$('.jbs-shadow.right').css({ left: 0 });
			_$('.jbs-shadow.left,.jbs-shadow.right').css({ top: 0, height: 0 });
		}

		function angularElementName(elem) {
			var out = elem.tagName.toLowerCase();
			if (elem.id) return out + ' ('+elem.id+')';
			if (elem.getAttribute('ng-model')) return out + ' ('+elem.getAttribute('ng-model')+')';

			return out;
		}

		function finish() {
			_$('#jbs-title').hide();
			_$('.jbs-shadow').hide();
			_window.onmousedown = prevMouseDown;
			_window.onmousemove = prevMouseMove;
			_window.onkeyup = prevKeyup;

			$('.studio-widget-placeholder').removeClass('shadow');
			$(_body).removeClass('jbs-select');
		}

		function isAngularElement(el) {
			return _window.angular && _window.angular.element(el)[0] == el;
		}
		function addPickCss() {
			var pickCss = '\
				\
				#jbs-title {	z-index: 6001;position: absolute;	transition:top 100ms, left 100ms ;}\
				#jbs-title .triangle {	width:0;height:0; border-style: solid; 	border-color: #fff transparent transparent transparent; border-width: 6px;	margin-left: 14px;}\
				#jbs-title .text {	background: #fff; font: 14px arial; padding: 3px 8px; }\
				#jbs-title.bottom .triangle { border-color: transparent transparent #fff transparent; transform: translateY(-28px);}\
				#jbs-title.bottom .text {	transform: translateY(6px);}\
				\
				.jbs-shadow { display: block; opacity: 0.4; background: rgb(102, 102, 102); position: absolute; z-index:6000; top:0; left:0;}\
				.jbs-shadow.bottom { right:0;}\
				.jbs-shadow.top { right:0;}\
				.jbs-shadow.right { right: 0;}\
				.jbs-shadow { transition: top 100ms,left 100ms,right 100ms,bottom 100ms,height 100ms,width 100ms; }\
				.jbs-select * { cursor: default !important; }\
				';

			$('<style/>').text(pickCss).appendTo(_head);
		}


	}
});

function jb_studioHighlightPreviewElems(elems) {
	var boxes = [];
	
	$('.jbstudio_highlight_in_preview').remove();
	
	$(elems).each(function() {
		var $box = $('<div class="jbstudio_highlight_in_preview"/>').css({ position: 'absolute', background: 'rgb(193, 224, 228)', border: '1px solid blue' ,opacity: '1', zIndex: 5000 });
		var offset = $(this).offset();
		$box.css('left',offset.left).css('top',offset.top).width($(this).outerWidth()).height($(this).outerHeight());				
		boxes.push($box[0]);
	})

	$(jbart.studio.previewWindow.document.body).append($(boxes));	

	$(boxes).css({ opacity: 0.5 }).
		fadeTo(1500,0,function() {
			$(boxes).remove();
		});
	
}

jb_component('studio.highlightProfileInPreview', {
	type: 'action',
	params: { profile: { as: 'single' }},
	impl: function(context,profile) {
		if (!jbart.studio.previewWindow) return;

		var cssClass = '';
		if (typeof profile.style == 'string') cssClass = profile.style;
		if (!cssClass) {
			var style = runProfileProperty(context,profile,'style');
			if (style) cssClass = style.cssClass;
		}
		if (!cssClass) return;

		var elems = $(jbart.studio.previewWindow.document).find('.'+cssClass).get().filter(function(elem) { return elem.jbControl && elem.jbControl.context.profile == profile});

		jb_studioHighlightPreviewElems(elems);

		function runProfileProperty(context,profile,param) {
			var ctx = jb_ctx(context,{});
			ctx.profile = profile[param];

			if (!ctx.profile) {
				var paramDef = (jbart.comps[jb_compName(profile)].params || {})[param] || {};
				ctx.profile = paramDef.defaultValue;
			}
			if (!ctx.profile) return null;
			return jbart.studio.previewWindow.jb_run(ctx);
		}
	}
});



function jb_openStudioPopupWindow(options) {
	jbart.run({
		$: 'openDialog',
		title: options.title,
		style: { $: 'dialog.studioFloating', id: options.id },
		content: function(context) {
			var control = { $el: $(options.content), originalContext: context, el: $(options.content)[0] };
			context.vars.$appendControl(control);
			return control;
		},
		features: { '$dialogFeature.uniqueDialog': options.id }
	})
}

function jb_openStudioSingletonPopupWindow(options) {
	jbart.run({
		$: 'openDialog',
		title: options.title,
		style: { $: 'dialog.studioFloatingSingleton', id: options.id, visible: options.visible || jbart.studio.state['popup-' + options.id + '-open'] },
		content: function(context) {
			var control = { $el: $(options.content), originalContext: context, el: $(options.content)[0] };
			context.vars.$appendControl(control);
			return control;
		}
	})
}

jb_component('dialog.studioFloatingSingleton', {
	type: 'dialog.style',
	params: {
		id: { as: 'string' },
		visible: { as: 'boolean' }
	},
	impl: function(context, id, visible) {
		return {
			html: '<div><div class="dialog-title"/><button class="dialog-hide">&#215;</button><div class="dialog-content"/></div>',
			cssClass: 'studio-floating-dialog',
			create: function(dialog) {
				dialog.id = id;
				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.dragTitle', id: id}, 
					{$: 'dialogFeature.maxZIndexOnClick', minZIndex: 5000 },
					{$: 'studio-dialogFeature.studioPopupLocation' },
				]);
				jb_dialog(dialog);
				jb_setStudioState(jb_obj('popup-' + id + '-open', visible));
				if (!visible)
					dialog.$el.hide();	
				dialog.$el.find('.dialog-hide').click(function() {
					jb_setStudioState(jb_obj('popup-' + id + '-open', false));
					dialog.$el.hide();
				});
				// remember last location
				var ssID = 'jbart-dialog-' + id;
				jb_bind(dialog,'attach',function() {
					if (sessionStorage[ssID])
						jb_map(JSON.parse(sessionStorage[ssID]),function(value,prop) {
							dialog.$el.css(prop,value);
						});
				});
				jb_bind(dialog, 'endDrag',function() {
					sessionStorage[ssID] = JSON.stringify({
						top: dialog.$el.css('top').split('px')[0] + 'px',
						left: dialog.$el.css('left').split('px')[0] + 'px'
					});
				});
			}
		}
	}
});

/*
function jb_openStudioPopupWindow1(options) {
	if (!$('#jb-inspector-top')[0]) {
		$('<div id="jb-inspector-top" />').appendTo('body');
	}

	var frame = $('<div class="jbart-window-frame" />');
	frame.append($('<div class="jbart-window-title" />').text(options.title));
	var closeBtn = $('<button class="jbart-window-close" />').text('×');
	frame.append(closeBtn);

	$('#jb-inspector-top').append(frame);

	if (typeof options.content == 'function') {
		var content = $('<div class="jbart-window-content" />').appendTo(frame);
		options.content(content);
	}
	else
		frame.append($('<div class="jbart-window-content" />').append(options.content));

	closeBtn.on('click',function() {
		frame.remove();
	})
	if (!options.noDragTitle)
		jb_studioPopupWindowDragTitle(frame);

	frame.css('z-index',5000);
	
	return frame;
}

function jb_studioPopupWindowDragTitle(frame) {
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
	}
}
*/
jb_component('studio.editSource', {
	type: 'action',
	impl: {
		$: 'openDialog',
		title: [{ $urlHashParam: 'studioPage' }, 'edit source - {{.}}'],
		style: { $: 'dialog.studioFloating', id: 'edit source' },
		content: {
			$: 'editableText',
			parent: {
				$: 'studio.jbScriptAsWritableString',
				jbscript: { $: 'studio.currentProfile' }
			},
			property: 'v',
			style: { $: 'editableText.codemirror', resizer: true,
                    cm_settings: {
                      extraKeys: {
                          "Ctrl-Space": "autocomplete",
                          "Ctrl-Enter": function(editor) {
                              jbstudio_updateJbartScriptFromCM(editor.getValue());
                          }
                      }
				}
			},
			features: [
			  { $onupdate: { $:'studio.markSourceAsDirty' } }
			]
		}
	}
});

jb_component('studio.markSourceAsDirty', {
  type: 'action',
  impl: function(context) {
    var $dialog = context.vars.$dialog;
    var $dialogTitle = $dialog.$el.find('.dialog-title');
    if ($dialogTitle.text().split('*').pop() != '')  // not ends with *
      $dialogTitle.text( $dialogTitle.text() + '*' );
  }
});

jb_component('studio.updateProfileJavascript', {
  type: 'action',
  params: {
  	profile: {},
  	newvalAsString: { as: 'string' }
  },
  impl: function(context) {
  	jbstudio_updateJbartScriptFromCM(newvalAsString,profile);
  }
});

function jbstudio_updateJbartScriptFromCM(newval) {
	var newProfile = eval('(function() { return ' + jb_tostring(newval) + ';}())');
	if (!newProfile) return;
	var path = jb_tostring(jbart.run({$: 'studio.currentProfilePath'}));
	var compName = jb_studioProfilePathToCompName(path);

	var profile = jb_studioProfileFromPath(path,jb_jbart());
	if (profile.$jb_parent && profile.$jb_parent != 'root') {
		jb_writeValue(profile,newProfile);
	} else {
		var parts = jb_studioSplitPath(path);
		var lastPart = parts.pop();
		if (parts.length == 0)
			jb_jbart().comps[lastPart].impl = newProfile;
		else {
			var parent = jb_studioProfileFromPath(parts.join('.'));
			parent[lastPart] = newProfile;
		}
		newProfile.$jb_parent = 'root';
	}

	jb_studioRefreshPreview();
	jb_studioUpdateModified(compName);
      
  // remove the dirty mark
  var $sourceDlgTitle = jb_dialogsParent().children('.id-edit-source').find('.dialog-title');
  $sourceDlgTitle.text($sourceDlgTitle.text().split('*')[0]);

  jb_digest();
}

jb_component('studio.jbScriptAsWritableString', {
	type: 'data',
	params: {
		jbscript: {
			as: 'single'
		}
	},
	impl: function(context, jbscript) {
		var out = '';
		if (typeof jbscript == 'function') out = jbscript.toString();
		else out = jb_prettyPrint(jbscript);

		return { v: out } 
	}
});

jb_component('dialog.studioFloating', {
	type: 'dialog.style',
	params: {
		id: { as: 'string' }
	},
	impl: function(context,id) {
		return {
			html: '<div><div class="dialog-title"/><button class="dialog-close">&#215;</button><div class="dialog-content"/></div>',
			cssClass: 'studio-floating-dialog',
			create: function(dialog) {
				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.dragTitle', id: id}, 
					{$: 'dialogFeature.uniqueDialog', id: id, remeberLastLocation: true },
					{$: 'dialogFeature.maxZIndexOnClick', minZIndex: 5000 },
					{$: 'studio-dialogFeature.studioPopupLocation' },
				]);
				jb_dialog(dialog);
				jb_setStudioState( jb_obj('popup-' + id + '-open', true) );
				jb_bind(dialog,'close',function() {
					jb_setStudioState(jb_obj('popup-' + id + '-open', false) );
				});
			}
		}
	}
});

jb_component('studio-dialogFeature.studioPopupLocation',{
	type: 'dialogFeature',
	impl: function(context) {
		var dialog = context.vars.$dialog;

		jb_bind(dialog,'attach',function() {
			if (sessionStorage['jbart-dialog-'+dialog.id]) return;
			if (dialog.id == 'studio properties')
				// dialog.$el.css('top','100px').css('left',(window.outerWidth-320)+'px');
				dialog.$el.css('top','110px').css('right','0px').css('left','initial');
			if (dialog.id == 'studio control tree')
				dialog.$el.css('top','0px').css('right','306px').css('left','initial');
				// dialog.$el.css('top','100px').css('left',(window.outerWidth-320-310)+'px');
			if (dialog.id == 'studio main window')
				dialog.$el.css('top','0px').css('right','0px').css('left','initial');
			if (dialog.id == 'studio templates')
				dialog.$el.css('top','73px').css('right','0px').css('left','initial');
			if (dialog.id == 'studio template code')
				dialog.$el.css('bottom','0px').css('left','0px').css('top','initial');
			if (dialog.id == 'code-mirror')
				dialog.$el.css('top','0px').css('left','0px');
		});
	}
})
jb_component('studio.openProperties', {
	type: 'action',
	impl: {
		$: 'openDialog',
		title: {
			$: 'pipeline',
			$vars: { pt: { $: 'studio.profileCompName', profile: { $: 'studio.currentProfile' } } },
			items: [ 'Properties of {{$pt}}' ]
		},
		style: { $: 'dialog.studioFloating', id: 'studio properties' },
		content: {
			$: 'tabControl',
			style: { $:'tabControl.studioPropertiesAccordion' },
			controls: [{
				$: 'group', title: 'Properties',
				style: 'studio-properties-in-dialog',
				controls: [
					{ $: 'studio.properties' }
				]
			},
			{
				$: 'group',
				features: [
					{ $title: { $:'pipeline', 
						$vars: { features: { $:'jsonPath', parent: { $: 'studio.currentProfile' }, path: 'features' } }, 
						items: ['Features ({{=count($features)}})'] 
					} }
				], controls: [
					{	
						$: 'studio.propertyField',
						profile: { $: 'studio.currentProfile' },
						paramDef: [ { $: 'studio.currentProfile' }, { $: 'studio.profileParamDefinitions' }, { $filter: '{{=name}} == features' } ]
					}
				]
			}]
		}
	}
});

jb_component('studio.properties',{
	type: 'control',
	params: {
		topProfile: { defaultValue: { $: 'studio.currentProfile' } }
	},
	impl: {
		$: 'propertySheet',
		databind: '{{$topProfile}}',
		style: 'studio-propertySheet',
		features: [
			{ $prepare: { $: 'studio.cleanProfileSugar', profile: '{{$topProfile}}' } }
		],
		controls: [
		  { $: 'dynamicFields', 
		    list: [ { $: 'studio.profileParamDefinitions' }, { $: 'filter', filter: { $not: { $: 'contains', allText: ',controls,features,', text: '{{=name}}' } } } ],
		    variable: 'paramDef',
		    genericField: {	$: 'studio.propertyField', paramDef: '{{$paramDef}}' } 
		  }
		]
	}
});

jb_component('studio.profileParamDefinitions',{
	type: 'data',
	params: {
		profile: { as: 'single', defaultValue: '{{.}}'}
	},
	impl: function(context,profile) {
		if (!profile || !jbart.comps[jb_compName(profile)]) return [];
		return jb_objectProperties(jb_handledObject(jbart.comps[jb_compName(profile)].params));
	}
});

jb_component('studio.propertyField-Label',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: { 
		$: 'label', title: '{{$param}}',
		text: { $: 'jsonPath', parent: '{{$profile}}', path: '{{param}}' } 
	}
});

jb_component('studio.propertyField-Primitive',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: {
		$: 'group',
		title: '{{$param}}',
		controls: [{
			$: 'editableText',
			style: 'jb-studio-primitive-textbox',
			parent: '{{$profile}}', property: '{{$param}}',
			features: [
				{ $onenterClicked: { $: 'studio.refreshPreview' } }
			]
		},
		{
			$: 'button',
			style: 'jb-studio-primitive-arrow',
			action: { $: 'studio.openPrimitiveArrowPopup', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}', isPrimitive: true }
		}
		]
	}
});

jb_component('studio.propertyField-TgpType',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: {
		$: 'group',
		title: '{{$param}}',
		style: { $: 'group.vertical' },
		features: [
			{ $: 'feature.variable', varName: 'selectedPT', value: { 
				$writableText: { 
					$: 'studio.profileCompName', 
					profile: { $: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' }
				}}
			},
			{	$: 'feature.variable', varName: 'isTgpExpanded', value: { $writableText: ''} }
		],
		controls: [
			{ $: 'group',
			  controls: [
					{
						$: 'picklist',
						style: 'jb-studio-tgpType-picklist',
						parent: '{{$selectedPT}}', property: 'v',
						options: { $: 'studio.tgpTypeOptions', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}' },
						features: [
							{ $: 'onupdate', action: [ { $: 'studio.updateProfilePT',  profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}', newPT: '{{$$value}}'}, { $: 'studio.refreshPreview' } ]  }
						]
					},
					{ 
						$: 'button', style: 'jb-studio-toggle-tgpType-props',
						style: { $: 'button.studioToggleTgp' },
						action: { $: 'toggleBooleanValue', parent: '{{$isTgpExpanded}}', property: 'v' },
						features: [
						  { $cssClass: { $if: '{{$isTgpExpanded.v}}', then: '', 'else': 'collapsed'} },
						  { $show: { $: 'studio.componentHasParams', compName: '{{$selectedPT.v}}' } }
						]
					}
			  ]
			},
			{
				$: 'group',
				style: 'jb-studio-tgpType-props',
				controls: [
				  { $: 'studio.properties', topProfile: { $: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' } }
				],
				features: [
				  { $watch: '{{$selectedPT.v}}' },
				  { $show: '{{$isTgpExpanded.v}}' }
				]
			}
			]
	}
});

jb_component('studio.propertyField-JBEditor',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: {
		$: 'group',
		title: '{{$param}}',
		controls: [{
			$: 'button',
			text: '(..)',
			style: 'jb-studio-primitive-jbeditor',
			action: { $: 'studio.openjbEditor', 
				profile: {$: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' }
			}
		},
		{
			$: 'button',
			style: 'jb-studio-primitive-arrow',
			action: { $: 'studio.openPrimitiveArrowPopup', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}', isPrimitive: false }
		}
		]
	}
});

jb_component('studio.propertyField-Javascript',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: {
		$: 'group',
		title: '{{$param}}',
		controls: [{
			$: 'button',
			text: '(..)',
			style: 'jb-studio-primitive-javascript',
			action: { $: 'studio.openjsEditor', 
				profile: {$: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' }
			}
		},
		{
			$: 'button',
			style: 'jb-studio-primitive-arrow',
			action: { $: 'studio.openPrimitiveArrowPopup', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}', isPrimitive: false }
		}
		]
	}
});

jb_component('studio.propertyField-Array',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: { 
		$: 'group',
		controls: [
		// { $: 'label', text: '{{param}}:' },
		{
			$: 'itemlist',
			style: 'jb-studio-array',
			items: { $: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' },
			itemVariable: 'optionProfile',
			controls: [
			  { $: 'expandableSection', title: { $: 'studio.propertyArrayItemName' },
			  	style: { $: 'expandableSection.studioExpandableInArray'},
			    controls: [
			    	{ $: 'studio.properties', topProfile: '{{$optionProfile}}' }
			    ]
			  },
			  { $: 'button' , text: [ 'Delete {{$param}}', { $: 'replace', find: 's$', replace: '' } ], 
			    style: { $: 'customCssStyle', base: { $: 'button.imageOnly' }, cssClass: 'jb-studio-delete-array-item' },
			    action: { $: 'studio.deleteArrayItem', profile: '{{$profile}}', param: '{{$param}}', item: '{{$optionProfile}}' }
			  }
			],
			features: [
			  { $show: function(context) {
			  	  return context.vars.control.items.length > 0;
			    }
			  }
			]
		},
		{ $: 'button', 
		  text: [ 'Add {{$param}}', { $: 'replace', find: 's$', replace: '' } ],
		  style: 'jb-studio-add-array-item',
		  action: { 
		  	$: 'studio.selectPT',
		  	type: '{{$paramDef.type}}',
		  	selectAction: [ 
		  	  { $: 'studio.addToProfileArray', profile: '{{$profile}}', param: '{{$param}}' },
		  	  { $: 'studio.refreshPreview' },
		  	  function(context) {
		  	  	setTimeout(function() {
		  	  		// auto open the last added profile
		  	  		var $button = context.vars.$dialog.originalContext.vars.control.$el;
		  	  		var $lastPanel = $button.parent().find('.panel').last();
		  	  		$lastPanel.find('.panel-heading').first().click();	
		  	  		$lastPanel.find('input,textarea').first().focus();
		  	  	},20);
		  	  }
		  	]
		  }
		}
		],
		features: [
		  { $: 'hidePropertyTitle' }
		]
	}
});

jb_component('studio.propertyArrayItemName',{
	type: 'data',
	impl: function(context) {
		if (context.data.$) return context.data.$;
		var prop = jb_firstProp(context.data);
		if (prop) return prop.split('$')[1];
	}
});

jb_component('studio.propertyField',{
	type: 'control',
	params: {
		profile: { as: 'single', defaultValue: '{{.}}'},
		paramDef: { as: 'single' }
	},
	impl: function(context,profile,paramDef) {
		var param = paramDef.$jb_property;
		var control = runControl();

		if (!profile[param]) jb_studioCopyDefaultValue(profile,param);

		jb_watch(function() { return chooseFieldProfile().$; },context.vars.control.$el,function() {
			var newControl = runControl();
			control.$el.replaceWith(newControl.$el);
			control = newControl;
		})

		return control;

		function runControl() {
			return jb_run(jb_ctx(context,{ data: profile, profile: chooseFieldProfile() , vars: { paramDef: paramDef, param: param, profile: profile } }));
		}
		function chooseFieldProfile() {
			var fieldPT = 'studio.propertyField-Label';

			if (typeof profile[param] == 'function')
				fieldPT = 'studio.propertyField-Javascript';
			else if ( (paramDef.type || 'data') == 'data') {
				if (typeof profile[param] == 'string' || typeof profile[param] == 'undefined' || typeof profile[param] == 'number')
					fieldPT = 'studio.propertyField-Primitive';
				else
					fieldPT = 'studio.propertyField-JBEditor';
			}
			else if ( (paramDef.type || 'data').indexOf('[]') > -1) {
				profile[param] = profile[param] || [];
				if (profile[param] && !Array.isArray(profile[param])) profile[param] = [ profile[param] ];
				fieldPT = 'studio.propertyField-Array';
			}
			else if ( (paramDef.type || '').indexOf('.style') > -1 )
				fieldPT = 'studio.propertyField-Style';
			else fieldPT = 'studio.propertyField-TgpType';

			var fieldProfile = { $: fieldPT, param: '{{$param}}', paramDef: '{{$paramDef}}', profile: '{{$profile}}' };
			return fieldProfile;
		}
	}
});


jb_component('studio.addToProfileArray',{
	type: 'action',
	params: {
		profile: { },
		param: { as: 'string' }
	},
	impl: function(context,profile,param) {
		jb_studioInitActionClasses();
		var newProfile = { $: context.data };
		jb_studioRunAction(new jbart.classes.studioActionAddToArray(profile,param,newProfile));
	}
});

jb_component('studio.deleteArrayItem',{
	type: 'action',
	params: {
		profile: { as: 'single' },
		param: { as: 'string' },
		item: { as: 'single' }
	},
	impl: function(context,profile,param,item) {
		jb_studioInitActionClasses();
		var index = profile[param].indexOf(item);

		jb_studioRunAction(new jbart.classes.studioActionDeleteProfileInArray(profile,param,index));
		jb_studioRefreshPreview();		
	}
});

jb_component('tabControl.studioPropertiesAccordion',{
	type: 'tabControl.style',
	impl: function() {
		return {
			html: '<div><div class="panel"><div class="panel-heading"><div class="panel-title"><div class="panel-toggle"/><a href="javascript:()"/></div></div><div class="panel-collapse"><div class="panel-body"></div></div></div>',
			cssClass: "jb-studio-accordion",
			create: function(control) { 
				control.$('.panel-body').css('max-height',$(window).height()-250); 
				jb_accordion(control); 
			}
		}
	}
});

jb_component('expandableSection.studioExpandableInArray',{
	type: 'expandableSection.style',
	impl: function() {
		return {
			html: '<div class="panel"><div class="panel-heading"><div class="panel-title"><div class="panel-toggle"/><a href="javascript:()"/></div></div><div class="panel-collapse"><div class="panel-body"></div></div>',
			cssClass: "jb-studio-array-expandable",
			create: function(control) { jb_expandableSection(control); }
}}});

jb_component('studio.prepareToOpenJbEditorFromArrowPopup',{
	type: 'action',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: function(context,param,paramDef,profile) {
		if (typeof profile[param] == 'undefined')
			profile[param] = { $: 'pipeline' };
		else if (typeof profile[param] == 'string')
			profile[param] = { $: 'pipeline', items: [ profile[param] ] };
	}
});

jb_component('studio.deleteScriptFromArrowPopup',{
	type: 'action',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: function(context,param,paramDef,profile) {
		delete profile[param];
	}
});

jb_component('studio.openPrimitiveArrowPopup',{
	type: 'action',
	params: { param: {}, paramDef: {}, profile: {}, isPrimitive: {} },
	impl: {
		$: 'openPopup',
		style: { $: 'studioPopup.contextMenuPopup' },
		content: {
			$: 'group',
			controls: [
 		    { $: 'studio.MenuItem', text: 'Edit in jbEditor', spritePosition: '6,0', 
			    action: [
			      { $: 'studio.prepareToOpenJbEditorFromArrowPopup', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}' },
			      { $: 'studio.openjbEditor', 
			        profile: {$: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' }
			      }
			    ]
 		    },
		    { $: 'studio.MenuItem', text: 'Delete script',
			    action: [
			      { $: 'closeContainingPopup'},
			      { $: 'studio.deleteScriptFromArrowPopup', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}' }
			    ],
			    features: [
			      { $hide: '{{$isPrimitive}}' }
			    ]
 		    }
			]
		}
	}
})

jb_component('studio.tgpTypeOptions',{
  type: 'picklistOptions',
  params: { param: {}, paramDef: { as: 'single' }, profile: {} },
  impl: function(context,param,paramDef,profile) {
  	var type = paramDef.type || 'data';

    return jb_map(jb_jbart().comps,function(c,name) { 
        if (c.type == type) return { code: name, text: name };
	});
  }
});

jb_component('studio.updateProfilePT',{
  type: 'picklistOptions',
  params: { param: {}, paramDef: { as: 'single' }, profile: { as: 'single' }, newPT: { as: 'string'} },
  impl: function(context,param,paramDef,profile,newPT) {
  	// TODO: copy params from previous ot
  	profile[param] = { $: newPT };
  }
});

jb_component('button.studioToggleTgp',{
	type: 'button.style',
	impl: function() {
		return {
			html: '<button><span class="frame"/><span class="line1"/><span class="line2"/></button>',
			cssClass: "jb-studio-toggle-tgpType-props",
			create: function(button) { jb_buttonImageOnly(button); }
		}
	}
});

function jb_studioCopyDefaultValue(profile,param) {
	if (profile[param]) return;
	var comp = jb_compName(profile);
	if (!comp) return;
	var params = ((jb_jbart().comps[comp] || {}).params || {});
	if (params[param] && typeof params[param].defaultValue != 'undefined')
		profile[param] = jb_cloneData(params[param].defaultValue)
}
jb_component("studio.dataResources", {
	type: 'data',
	impl: function(context) {
		var widget = jbart.preview_jbart_widgets[ jb_urlParam('widget') ] || {};
		return jb_map(widget.resources,function(val,name) {
			return { name: name, value: val }
		})
	}
});

jb_component("studio.dataResourceAsString", {
	type: 'data',
	params: { dataResource: { as: 'single'} },
	impl: function(context,dataResource) {
		if (typeof dataResource.value == 'object' ) {
			var objToStringify = cloneAndClean(dataResource.value);
			return JSON.stringify(objToStringify, null, '\t');
		}

		function cloneAndClean(obj) {
			if (typeof obj == 'function') return null;
			if (typeof obj != 'object') return obj;
			if (Array.isArray(obj)) return obj.map(function(x) { return cloneAndClean(x) });

			var out = {};
			for(var i in obj) {
				if (i.indexOf('$jb') == 0 || i.indexOf('$') == 0 || ! obj.hasOwnProperty(i)) continue;
				if (typeof (obj[i]) == 'function') continue;
				out[i] = cloneAndClean(obj[i]);
			}
			return out;
		}
	}
});

jb_component("studio.showDataResource", {
	type: 'action',
	params: { dataResource: {} },
	impl: {
		$: 'openDialog',
		title: 'Resource - {{$dataResource.name}}',
		style: { $: 'dialog.studioFloating', id: 'studio resource' },
		content: {
			$: 'editableText',
			parent: { $writableText: { $: 'studio.dataResourceAsString', dataResource: '{{$dataResource}}' } },
			property: 'v',
			style: { $: 'editableText.codemirror', resizer: true, 
					onChange: { $:'studio.markResourceAsDirty' },
          cm_settings: {
          	mode: "application/ld+json",
            extraKeys: {
                "Ctrl-Enter": function(editor) {
                }
            }
					}
			}
		}
	}
});


jb_component('studio.saveWidget',{
	impl: function(context) {
		var deferred = $.Deferred(),asyncActions = [];
		var filesToSave = jb_path(jbart,['studio','modifiedFiles']) || {};
		for(fileName in filesToSave)
			asyncActions.push(jb_studioSaveComponentsInFile(fileName));

		$.when.apply(null,asyncActions).then(deferred.resolve,deferred.reject);

		return deferred.promise();
	}
});

function jb_studioUpdateModified(compName) {
	var fileName = jb_path(jbart.previewjbart,['studio','componentFiles',compName]);
	if (fileName)
		jb_path(jbart,['studio','modifiedFiles',fileName,'component',compName],{});
}

function jb_studioSaveComponentsInFile(fileName) {
	var deferred = $.Deferred();

	$.ajax({ url: fileName }).then(function(fileContents) {
		var comps = jb_path(jbart,['studio','modifiedFiles',fileName,'component']);
		for(var compName in comps || {})
			fileContents = jb_studioReplaceComponentInFile(fileContents,compName);

		var request = JSON.stringify({ Contents: fileContents, Path: fileName });

		$.ajax( { url: '/jbart/?op=saveFile', type: 'POST', data: request, headers: { 'Content-Type': 'text/plain' }  }).then(function(result) {
			if (!result.success) deferred.reject();
			jb_path(jbart,['studio','modifiedFiles',fileName],null);
			deferred.resolve();
		},deferred.reject);
	},deferred.reject);

	return deferred.promise();	
}

function jb_studioReplaceComponentInFile(fileContents,compName) {
	var newCode = "jb_component('"+compName+"'," + jb_prettyPrint(jbart.previewjbart.comps[compName]) + ")";

	var startIndex = fileContents.indexOf("jb_component('"+compName+"'");
	if (startIndex == -1) startIndex = fileContents.indexOf("jb_component(\""+compName+"\"");
	if (startIndex == -1) 
		return fileContents + '\n' + newCode;	

	var endIndex = findEndParenthesis(startIndex);
	return fileContents.substr(0,startIndex) + newCode + fileContents.substr(endIndex+1);

	function findEndParenthesis(startIndex) {
		var open = 0;
		var iter = 0;

		for(var i=startIndex;i<fileContents.length;i++) {
			if (nextTwoChars(i) == '//') {
				i = fileContents.indexOf('\n',i)-1;
			} else if (nextTwoChars(i) == '/*') {
				i = fileContents.indexOf('/*',i)-1;
			} else if (fileContents.charAt(i) == '(') {
				open++;
			} else if (fileContents.charAt(i) == ')') {
				open--;
				if (open == 0)
					return i;
			}
		}
		return -1;
	}

	function nextTwoChars(i) {
		return fileContents.charAt(i) + ((i+1 < fileContents.length) ? fileContents.charAt(i+1) : '');
	}
}

jb_component('studio.selectPT',{
	type: 'action',
	params: {
		type: {},
		fromTree: { type: 'boolean' },
		selectAction: { type: 'action', dynamic: true}
	},
	impl: {
	  	$: 'openPopup',
	  	style: { $: 'studio.selectPTPopupStyle', fromTree: '{{$fromTree}}' },
	  	content: {
			$: 'group',
			features: [
			  { $: 'feature.variable', varName: 'searchPattern', value: { $writableText: '' } }
			],
			controls: [
			  { $: 'editableText', parent: '{{$searchPattern}}', property: 'v', style: 'studio-select-pt-input',
			    features: { $: 'feature.searchTextbox', itemlistID: 'studio select pt list' }
			  },
			  { 
			  	$: 'itemlist',
			  	items: [ { $: 'studio.componentsOfType', type: '{{$type}}' }, { $: 'searchFilter', pattern: '{{$searchPattern.v}}' } ],
			  	itemVariable: 'compName',
			  	style: 'studio-select-pt-itemlist',
			  	features: [
			  		{ $id: 'studio select pt list' },
			  		{ $autoRefresh: '{{$searchPattern.v}}' },
			  		{ $: 'itemSelection' },
			  		{ $itemClick: [
					  	{ $: 'closeContainingPopup'},
			  			{ $call: 'selectAction' } 
			  		  ]
			  		}
			  	],
			  	controls: [
			  	  { $: 'label', text: '{{.}}', style: 'jb-studio-select-pt-item' }
			  	]		  	
			  }
			]	  		
	  	}
	}
});

jb_component('studio.selectPTPopupStyle',{
	type: 'dialog.style',
	params: { fromTree: { type: 'boolean', as: 'boolean' } },
	impl: function(context,fromTree) {
		return {
			html: '<div class="dialog-content"/>',
			cssClass: 'studio-select-pt-popup',
			create: function(dialog) {
				var locationFeature = {$: 'dialogFeature.nearLauncherLocation' };
				if (fromTree)
					locationFeature = { $: 'dialogFeature.launcherLocationNearSelectedNode' };

				jb_applyDialogFeatures(dialog, [
					{$: 'dialogFeature.uniqueDialog', id: 'studio select pt', remeberLastLocation: false },
					{$: 'dialogFeature.maxZIndexOnClick' },
					{$: 'dialogFeature.closeWhenClickingOutside' },
					{$: 'dialogFeature.cssClassOnLaunchingControl' },
					{$: 'dialogFeature.autoFocusOnFirstInput' },
					locationFeature
				]);
				jb_dialog(dialog);
			}
		}
	}
});



jb_component('studio.prettyPrint', {
  type: 'data',
  params: {
    object: { as:'single', defaultValue: '{{}}'},
    colWidth: { as:'number', defaultValue: 80},
    tabSize: { as:'number', defaultValue: 2}
  },
  impl: function(context,object,colWidth,tabSize) {
    return jb_prettyPrint(object,colWidth,tabSize);
  }
});

function jb_prettyPrint(profile,colWidth,tabSize) {
  colWidth = colWidth || 80;
  tabSize = tabSize || 2;
  var remainedInLine = colWidth;
  var result = '';
  var depth = 0;
  printValue(profile);
  return result;

  function printValue(val) {
    if (!val) return;
    if (val.$jb_arrayShortcut)
      val = val.items;
  	if (Array.isArray(val)) return printArray(val);
  	if (typeof val === 'object') return printObj(val);
    if (typeof val === 'function')
    	result += val.toString();
  	else if (typeof val === 'string') 
  		result += "'" + val + "'";
  	else
  		result += JSON.stringify(val);
  }

  function printObj(obj) {
      var obj_str = flat_obj(obj);
      if (!printInLine(obj_str)) { // object does not fit in parent line
        depth++;
        result += '{ ';
        if (!printInLine(obj_str)) { // object does not fit in its own line
          Object.getOwnPropertyNames(obj).filter(function(prop) { return prop.indexOf('$jb') != 0 })
            .forEach(function(prop,index,array) {
              printProp(obj,prop);
              if (index < array.length -1) {
              	result += ', ';newLine();
            }
          });
        }
        depth--;
        newLine();
        result += '}';
      }
  }
  function printProp(obj,prop) {
    if (obj[prop].$jb_arrayShortcut)
      obj = jb_obj(prop,obj[prop].items);

    if (printInLine(flat_property(obj,prop))) return;

    result += prop + ': ';
    depth++;
    printValue(obj[prop]);
    depth--;
  }
  function printArray(array) {
    if (printInLine(flat_array(array))) return;
    result += '[';
//    depth++;
    newLine();
    array.forEach(function(val,index) {
	    printValue(val);
      if (index < array.length -1) {
      	result += ', ';
      	newLine();
      }
    })
    depth--;newLine();depth++;
    result += ']';
  }
  function printInLine(text) {
    if (remainedInLine < text.length) return false;
    result += text;
    remainedInLine -= text.length;
    return true;
  }
  function newLine() {
    result += '\n';
    for (var i = 0; i < depth; i++) result += '               '.substr(0,tabSize);
    remainedInLine = colWidth - tabSize * depth;
  }
  function flat_obj(obj) {
    return '{ ' + jb_map(obj,function(value,prop){
   	 return prop + ': ' + flat_val(value);
    }).join(', ') + ' }'; 
  }
  function flat_property(obj,prop) {
    return prop + ': ' + flat_val(obj[prop]);
  }
  function flat_val(val) {
    if (Array.isArray(val)) return flat_array(val);
    if (typeof val === 'object') return flat_obj(val);
    if (typeof val === 'function') return val.toString();
   	if (typeof val === 'string') 
  		return "'" + val + "'";
  	else
      return JSON.stringify(val); // primitives
  }
  function flat_array(array) {
    return '[' + jb_map(array,function(item){ return flat_val(item) }).join(', ') + ']';
  }
}

jb_component('studio.propertyField-Style',{
	type: 'control',
	params: { param: {}, paramDef: {}, profile: {} },
	impl: {
		$: 'group',
		title: '{{$param}}',
		style: { $: 'group.vertical' },
		features: [
			{ $: 'feature.variable', varName: 'selectedPT', value: { 
				$writableText: { 
					$: 'studio.profileCompName',
					profile: { $: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' }
				}}
			},
			{	$: 'feature.variable', varName: 'isTgpExpanded', value: { $writableText: ''} }
		],
		controls: [
			{ $: 'group',
			  controls: [
					{
						$: 'picklist',
						style: 'jb-studio-tgpType-picklist',
						parent: '{{$selectedPT}}', property: 'v',
						options: { $: 'studio.tgpTypeOptions', profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}' },
						features: [
							{ $: 'onupdate', action: [ { $: 'studio.updateProfilePT',  profile: '{{$profile}}', param: '{{$param}}', paramDef: '{{$paramDef}}', newPT: '{{$$value}}'}, { $: 'studio.refreshPreview' } ]  },
							{ $hide: { $: 'studio.isStringProperty', profile: '{{$profile}}', param: '{{$param}}' }}
						],
					},
					{
						$: 'button', style: 'jb-studio-customize-style',
						action: { $: 'toggleBooleanValue', parent: '{{$isTgpExpanded}}', property: 'v' },
						features: [
						  { $cssClass: { $if: '{{$isTgpExpanded.v}}', then: '', 'else': 'collapsed'} },
						  { $show: { $: 'studio.componentHasParams', compName: '{{$selectedPT.v}}' } }
						]
					},
					{
						$: 'button',
						style: { $: 'button.studioToggleTgp' },
						action: { $: 'toggleBooleanValue', parent: '{{$isTgpExpanded}}', property: 'v' },
						features: [
						  { $cssClass: { $if: '{{$isTgpExpanded.v}}', then: '', 'else': 'collapsed'} },
						  { $show: { $: 'studio.componentHasParams', compName: '{{$selectedPT.v}}' } }
						]
					},
					{
						$: 'group', title: 'style containing string only',
						features: [
							{ $show: { $: 'studio.isStringProperty', profile: '{{$profile}}', param: '{{$param}}' }}
						],
						controls: [ {
							$: 'editableText', style: 'jb-studio-primitive-textbox',
							parent: '{{$profile}}', property: '{{$param}}',
							features: [
								{ $onenterClicked: { $: 'studio.refreshPreview' } }
							]
						}]
					}
			  ]
			},
			{
				$: 'group',
				style: 'jb-studio-tgpType-props',
				controls: [
				  { $: 'studio.properties', topProfile: { $: 'jsonPath', parent: '{{$profile}}', path: '{{$param}}' } }
				],
				features: [
				  { $watch: '{{$selectedPT.v}}' },
				  { $show: '{{$isTgpExpanded.v}}' }
				]
			}
			]
	}
});

jb_component('studio.isStringProperty',{
	type: 'boolean',
	params: { profile: { as: 'single'}, param: { as: 'string' } },
	impl: function(context,profile,param) {
		return profile && typeof(profile[param]) == 'string';
	}
})
jb_component("studio.allTests", {
	impl: {
		$: 'group',
		style: 'studio-allTests-main-group',
		features: [{
			$: 'prepare',
			action: { $: 'studio.runAllTests'},
			loadingControl: { $:'label', text: 'Running jbart tests...', style: 'studio-allTests-running' }
		}],
		controls: [
		{
			$: "label", style: 'studio-allTests-label',
			features: [ { $: "studio.testLabelFeature"}	]
		},
		{
			$: "itemlist",
			items: "{{$widgets.*.tests.*}}",
			itemVariable: "test",
			style: 'studio-allTests',
			features: {
				$: 'itemSelection',
				bindSelection: { $urlHashParam: 'test' },
				itemid: '{{=name($test.$parent.$parent)}},{{=name($test)}}'
			},
			controls: [{
				$: "label", text: '{{=name($test.$parent.$parent)}}: {{=name($test)}}',
				style: 'studio-allTest-testName',
				features: [{
					$: 'studio.showTestResultFeature',
					widgetName: "{{=name(.$parent.$parent)}}",
					testName: "{{=name($test)}}"
				}
				]
			}]
		}, 
		{
			$: "label",	id: 'studio widget name',
			text: { 
				$: 'replace', text: {$urlHashParam: 'test' }, find: ',', replace: ' : ', useRegex: true, regexFlags: '' 
			},
			style: 'studio-allTests-widget-label',
			features: [
			  // { $: 'autoRefresh', databind: { $urlHashParam: 'test'} },
				{ $onclick : function(context) {
						window.open('single-test.html?test='+jb_urlHashParam('test'));
				} }
			]
		},
		{
			$: 'group', id: 'studio show widget', style: 'studio-allTests-widget',
			features: { $watch: { $urlHashParam: 'test'} },
			controls: [{
				$: 'studio.showTestResultControl',
				test: { '$studio.testByFullName': { $urlHashParam: 'test' } }
			}]
		}]
	}
});

jb_component('studio.runAllTests', {
	type: 'action',
	impl: function(context) {
		jbart.settings = $.extend({ testTimeout: 2000 }, jbart.settings);

		var deferred = $.Deferred();
		var tests = jb_expression('{{$widgets.*.tests.*}}',context,'array');
		var lastRun = new Date().getTime();

		runNextTest(0);

		return deferred.promise();

		function runNextTest(testIndex) {
			if (testIndex == tests.length) 
				return deferred.resolve();

			if (new Date().getTime() - lastRun > jbart.settings.testTimeout) {
				lastRun = new Date().getTime();
				return setTimeout(function() { runNextTest(testIndex); },20);	// don't take too much CPU at once
			}

			var widget = jb_expression('{{.$parent.$parent}}',jb_ctx(context,{data: tests[testIndex]}),'object');
			var testName = tests[testIndex].$jb_property;
			var widgetName = widget.$jb_property;
			var resultPath = ['testResults',widgetName,testName];
			var testResult = jb_path(jbart,resultPath,{});

			$.when(jb_studio_runTest(widget, tests[testIndex])).then(function(passed) {
				if (!testResult.timedOut) {
					testResult.passed = passed;
					testResult.completed = true;
					runNextTest(testIndex+1);
				}
			},function() {
				if (!testResult.timedOut) {
					testResult.passed = false;
					testResult.completed = true;
					runNextTest(testIndex+1);
				}
			});

			setTimeout(function() {
				if (!testResult.completed) {
					testResult.passed = false;
					testResult.timedOut = true;
					runNextTest(testIndex+1);
				}
			},2000);

		}
	}
});


jb_component('studio.testByFullName', {
	type: 'data',
	params: {
		fullName: { as: 'string' }
	},
	impl: function(context,fullName) {
		if (fullName.indexOf(',')==-1) return;
		var widgetName = fullName.split(',')[0];
		var testName = fullName.substr(widgetName.length+1);		
		return widgetName && testName && jbart_widgets[widgetName].tests[testName];
	}
});

jb_component('studio.testLabelFeature', {
	type: 'feature',
	impl: function(context, widgetName, testName) {
		jb_bind(context.vars.control, 'render', function() {
			var passCount=0,failCount=0;
			var results = jb_expression('{{testResults.*.*}}',jb_ctx(context, {data: jbart }));
			for(var i=0;i<results.length;i++)
				if (results[i].passed) passCount++; else failCount++;

			context.vars.control.$el.text(failCount == 0 ? 'all jbart tests pass (' + passCount + ')' : failCount + ' jbart tests fail');
			if (failCount > 0)
				context.vars.control.$el.addClass('failed');
		});
	}
});

jb_component('studio.showTestResultFeature', {
	type: 'feature',
	params: {
		widgetName: {},
		testName: {}
	},
	impl: function(context, widgetName, testName) {
		jb_bind(context.vars.control, 'render', function() {
			var result = jb_path(jbart,['testResults',widgetName,testName]);
			if (result)
				context.vars.control.$el.addClass(result.passed ? 'passed' : 'failed');
		});
	}
});

jb_component('studio.showTestResultControl', {
	type: 'control',
	params: {
		test: { as: 'single' }
	},
	impl: function(context,test) {
		if (!test) return;
		var widget = test.$jb_parent.$jb_parent;

		var ctx = jb_ctx();

		for (var compName in widget.components || {}) jb_component(compName, widget.components[compName]);

		// global resources
		for (var resourceName in widget.resources || {})
			ctx.resources[resourceName] = jb_handledObject(jb_cloneData(widget.resources[resourceName]));

		if (test.$dataTest || test['$'] == 'dataTest') {
			var testContext = {};
			jb_run(jb_ctx(ctx,{ profile: test, vars: { $testContext:testContext } }));
			var result = testContext.result;

			if (jb_isArray(result) && result.length == 1)
				result = result[0];
			var text = typeof(result) == 'string' ? result : JSON.stringify(result,null," ");
			return jb_control(context, {	style: { html: $('<div/>').text(text)[0] } });
		}
	  else if (test.page)
			return jb_run(jb_ctx(ctx,{profile: test.page, vars: { $appendControl: context.vars.$appendControl } }));
	}
});


function jb_studio_runTest(widget, test) {
	var deferred = $.Deferred();
	try {
		var context = jb_ctx();
		if ($('#test-output')[0])
			context.vars.testWrapper = $('#test-output')[0];
		
		for (var compName in widget.components || {})
			jb_component(compName, widget.components[compName]);

		// global resources
		for (var resourceName in widget.resources || {})
			context.resources[resourceName] = jb_handledObject(jb_cloneData(widget.resources[resourceName]));

		var hasErrors = false;
		jb_bind(jbart.logs,'add',function(err) {
			if (err.type == 'error') hasErrors = true;
		},'tests');

		var passed = false;
		passed = jb_run(jb_ctx(context, {
			profile: test
		}));
		if (hasErrors) passed = false;

		if (passed && passed.promise) $.when(passed).then(function(_passed) {
			deferred.resolve(_passed);
		}, function() {
			deferred.resolve(false);
		});
		else return deferred.resolve(passed).promise();

	} catch (e) {
		jb_logException(e, 'when running test');
		return deferred.reject().promise();
	}

	return deferred.promise();
}

function jb_studio_renderAllTests() {
	var ctx = jb_ctx();
	jbart_widgets = jb_handledObject(jbart_widgets);
	ctx.vars.widgets = jbart_widgets;
	ctx.profile = {
		$: 'studio.allTests'
	};
	jb_appendControl($('#jbart-studio-tests'), ctx);
}

function jbstudio_tests() {
	try {
		jb_initJbartObject();
		
		jbart.logs = jbart.logs || {};
		jbart.logs.error = jbart.logs.error || [];

		jb_bind(jbart.logs,'add',function(args) {
			if (args.type == 'error')
				console.error(args.text);
		});	

		jb_studio_renderAllTests();
	} catch(e) {
		jb_logException(e,'error running jbstudio_start');
	}
}

function jbstudio_singleTest() {
	try {
		jb_initJbartObject();
		
		jbart.logs = jbart.logs || {};
		jbart.logs.error = jbart.logs.error || [];

		jb_bind(jbart.logs,'add',function(args) {
			if (args.type == 'error')
				console.error(args.text);
		});	

		var fullName = jb_urlParam('test');
		var widgetName = fullName.split(',')[0];
		var testName = fullName.substr(widgetName.length+1);		
		jbart_widgets = jb_handledObject(jbart_widgets);
		var widget = jb_objectProperty(jbart_widgets,widgetName);
		var tests = jb_objectProperty(widget,'tests');
		var test = widget && testName && jb_objectProperty(tests,testName);

		$('#test-name').text(fullName);

		$.when(jb_studio_runTest(jbart_widgets[widgetName], test)).then(setPassed,function() {
			setPassed(false)
		});

		function setPassed(passed) {
			var text = passed ? 'passed' : 'failed';
			$('#test-result').text(text).addClass(text).attr('title','click to refresh');
		}

		if (jb_compName(test) == 'dataTest')	// show output
			jb_appendControl($('#test-output'), jb_ctx(jb_ctx(), { 
				vars: { test: test }, 
				profile: { $:'studio.showTestResultControl', test:'{{$test}}' } 
			}));

		$('#test-result').unbind('click').click(function() {
			$('#test-output').empty();
			jbstudio_singleTest();
		});
	} catch(e) {
		jb_logException(e,'');
	}	
}
jb_component("studio.toolbar", {
	type: 'control',
	impl: {
	  $: 'group', style: 'studio-toolbar',
    controls: [
		  { $: 'label', text: '', style: 'studio-toolbar-left-margin' },
		  { $: 'button', text: 'Select',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '0,0' },
		  	action: { $: 'studio.select'}
		  },
		  { $: 'button', text: 'Save',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '4,0' },
		  	action: { $: 'studio.saveWidget'}
		  },
		  { $: 'button', text: 'Refresh',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '10,0' },
		  	action: { $: 'studio.refreshPreview'}
		  },
		  { $: 'button', text: 'Edit source',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '3,0' },
		  	action: { $: 'studio.editSource'}
		  },
		  { $: 'button', text: 'Control tree',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '5,0' },
		  	action: { $: 'studio.openControlTree'}
		  },
		  { $: 'button', text: 'Properties',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '7,0' },
		  	action: { $: 'studio.openProperties'}
		  },
		  { $: 'button', text: 'jbEditor',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '6,0' },
		  	action: { $: 'studio.openjbEditor'}
		  },
		  { $: 'button', text: 'preview',
		    style: { $: 'studio_button.toolbarButton', spritePosition: '9,0' },
		  	action: { $: 'studio.showProbeData'}
		  }
    ]
	}
});


jb_component('studio_button.toolbarButton',{
	type: 'button.style',
	params: {
		spritePosition: { as: 'string', defaultValue: '0,0' }
	},
	impl: function(context,spritePosition) {
		return {
			html: '<button><span/></button>',
			cssClass: "studio-btn-toolbar",
			create: function(button) {
				var pos = jb_map(spritePosition.split(','),function(item) { return (-parseInt(item)*16) + 'px'; }).join(' ');
				button.$('span').css('background-position',pos);
				button.$el.attr('title',button.text).click(button.action);
			}
		}
	}
});



jb_component('studio.openControlTree', {
	type: 'action',
	impl: {
		$: 'openDialog',
		title: 'Control Tree',
		style: { $: 'dialog.studioFloating', id: 'studio control tree' },
		content: {
			$: 'studio.controlTree'
		}
	}
});


jb_component('studio.controlTree',{
	type: 'control',
	impl: {
		$: 'tree',
		nodes: { $: 'studio.controlTreeNodes' },
		style: 'studio-control-tree',
		itemVariable: 'controlProfile',
		itemText: { $: 'studio.itemTextInControlTree' },
		features: [
		  { $: 'studio.controlTreeIcon' },
		  { $: 'treeSelection',
		    onSelection: [
			    { $: 'writeValue', value: { '$studio.profilePath': '{{.}}'}, to: { $: 'studio.currentProfilePath'} },
			    { $: 'studio.openProperties'},
			    { $: 'studio.highlightProfileInPreview', profile: '{{.}}' }
		    ]
		  },
		  { $: 'studioControlTree.autoSelect'},
		  { $rightClickToAddItems: { $if: { $: 'studio.profileHasParam', profile: '{{}}', param: 'controls' }, then: { $: 'studio.addToControlTreePopup', parentProfile: '{{$controlProfile}}' } } },
		  { $deleteNode: { $: 'studio.deleteProfileInControlTree' } },
		  { $id: 'studio-tree' }
		]
	}
});

jb_component('studio.controlTreeNodes',{
	type: 'treeNodes',
	params: { path: { as: 'string', defaultValue: { $: 'studio.currentProfilePath' } } },
	impl: function(context,path) {
		jb_studioInitControlTreeNodeClass();
		var compName = jb_studioProfilePathToCompName(path);
		return [new jbart.classes.studioControlTreeNode(jb_jbart().comps[compName].impl)];
	}
});

function jb_studioInitControlTreeNodeClass() {
	if (jbart.classes.studioControlTreeNode) return;

	jbart.classes.studioControlTreeNode = function(profile) {
		this.value = profile;
	}
	jbart.classes.studioControlTreeNode.prototype.children = function() {
		return jb_map(this.value.controls,function(subprofile) {
			return new jbart.classes.studioControlTreeNode(subprofile);
		});
	}
}

jb_component('studio.controlTreeIcon',{
	type: 'treeFeature',
	impl: function(context) {
		jb_bind(context.vars.control,'treenode',function($node) {
			var pos = '0 -16px';

			var item = $node[0].jbNode.value;
			var comp = jbart.comps[item.$];
			if (comp && comp.spritePosition)
			  pos = jb_map(comp.spritePosition.split(','),function(item) { return (-parseInt(item)*16) + 'px'; }).join(' ');

			if (item.$ == 'group') pos = '-16px -16px'; // TODO: keep it somewhere else (maybe in the component definition)
			$node.find('.treenode-icon').first().css('background-position',pos);
		})
	}
});

jb_component('studio.itemTextInControlTree',{
	type: 'data',
	impl: function(context) {
		var props = ['title','text','property'];

		for(var i=0;i<props.length;i++) {
			var titleStr = jb_tostring(context.data[props[i]]);
			if (titleStr && titleStr != '[object Object]') return titleStr;			
		}
		return jb_compName(context.data);
	}
});

jb_component('studioControlTree.autoSelect',{
	type: 'treeFeature',
	impl: function(context) {
		var tree = context.vars.control;
		jb_bind(tree,'render',function() {
			var path = jb_tostring( jb_run(jb_ctx(context,{ profile: { $: 'studio.currentProfilePath'} })) );
			var $parent = context.vars.control.$el,$node,profileIter;

			jb_studioSplitPath(path).forEach(function(part,index) {
				if ($node && $node.hasClass('collapsed')) $node[0].jbExpand();
				profileIter = index > 0 ? profileIter[part] : jb_jbart().comps[part].impl;
				if (part == 'controls' && index > 0) return;
				var children = $parent.find('>.treenode').get();
				for(var i=0;i<children.length;i++)
					if (children[i].jbItem == profileIter) {
						$node = $(children[i]);
						$parent = $node.find('>.treenode-children');
						return;
					}
			});
			if ($node) $node.addClass('selected');
		});
	}
});

jb_component('studio.addToControlTreePopup', {
	type: 'action',
	params: { parentProfile: {} },
	impl: { 
		$: 'studio.selectPT', type: 'control', fromTree: true,
		selectAction: function(context) {
			var parentProfile = jb_var(context,'parentProfile');
			jb_studioInitActionClasses();
			var newProfile = { $: context.data };
			jb_studioRunAction(new jbart.classes.studioActionAddToArray(parentProfile,'controls',newProfile));

			setTimeout(function() {
				// select the new tree element...				
				var $newNode = context.vars.node.$el.find('.treenode').filter(function(index,el) { return el.jbItem == newProfile});
				if ($newNode[0]) {
					context.vars.node.$el.removeClass('selected');
					$newNode.addClass('selected');
					jb_trigger(context.vars.treeControl,'selectionChanged',$newNode);

//					$newNode.find('>.treenode-line').dblclick();
					jb_studioRefreshPreview();
					setTimeout(function() { context.vars.treeControl.$el.focus(); },100);
				}
				
			},50);
		}
	}
});

jb_component('studio.deleteProfileInControlTree', {
	type: 'action',
	impl: function(context) {
		var pathArr = jb_studioSplitPath( jb_studioFindProfilePath(context.data,jb_jbart()) );
		var index = pathArr.pop();
		var param = pathArr.pop();
		if (param != 'controls') return;
		var parentProfile = jb_studioProfileFromPath(jb_studioJoinPath(pathArr),jb_jbart());

		jb_studioInitActionClasses();
		jb_studioRunAction(new jbart.classes.studioActionDeleteProfileInArray(parentProfile,'controls',index));

		jb_studioRefreshPreview();
	}
});

jb_component('studio.openjsEditor', {
	type: 'action',
	params: {
		profile: {}
	},
	impl: {
		$: 'openDialog',
		$vars: {
			jscode: { $: 'studio.jbScriptAsWritableString', jbscript: '{{$profile}}' } 
		},
		title: [{ $urlHashParam: 'studioPage' }, 'Edit javascript'],
		style: { $: 'dialog.studioFloating', id: 'edit javascript' },
		content: {
			$: 'editableText', parent: '{{$jscode}}', property: 'v',
			style: { $: 'editableText.codemirror', resizer: true, mode: 'javascript',
				features: [
					{ $onctrlenter: { $: 'studio.updateProfileJavascript', code: '{{$jscode.v}}' } }
				]
			}
		}
	}
});

function jb_studioInitActionClasses() {
	if (jbart.classes.studioActionAddToArray) return;

	jbart.classes.studioActionAddToArray = function(parent,param,value) {
		$.extend(this,{ parent: parent, param: param, value: value });
	};
	jbart.classes.studioActionAddToArray.prototype = {
		run: function() {
			this.parent[this.param] = this.parent[this.param] || [];
			this.parent[this.param].push(this.value);
			this.arrayIndex = this.parent[this.param].length-1;
		},
		undo: function() {

		}
	}

	jbart.classes.studioActionDeleteProfileInArray = function(parent,param,index) {
		$.extend(this,{ parent: parent, param: param, index: index });
	};
	jbart.classes.studioActionDeleteProfileInArray.prototype = {
		run: function() {
			this.value = this.parent[this.param].splice(this.index,1)[0];
		},
		undo: function() {

		}
	}
}

function jb_studioRunAction(studioAction) {
	jbart.studio.undoActions = jbart.studio.undoActions || [];
	if (jbart.studio.undoActions.length > 20)
		jbart.studio.undoActions.shift();
	
	jbart.studio.undoActions.push(studioAction);

	studioAction.run();
}
jb_component("studio.all", {
	type: 'control',
	impl: {
		$: 'group',
		style: 'studio-top-bar',
		controls: [
		  { $: 'group', style: 'studio-top-menu',
		    controls: [
			  { $: 'label', 
			    text: [ { $urlParam: 'widget' } , { $: 'replace', find: '_', replace: ' ' }],
			    style: 'studio-widget-name'
			  },
			  { $: 'studio.mainMenu' }
		    ]
		  },
		  { $: 'studio.toolbar' },
		  { $: 'group', style: 'studio-jbart-logo',
		    controls: [ { $: 'image', url: 'studio/img/favicon.png' }]
		  },
		  { $: 'group', style: 'studio-widget-placeholder', 
		    features: { $id: 'studio-widget-placeholder' },
		    controls: [ { $: 'studio.renderWidget'} ]
		  },
		  { $: 'group', style: 'studio-footer',
		    controls: [
		      { $: 'itemlist', items: { $: 'studio.widgetPageNames'}, style: 'studio-pages', itemVariable: 'studioPage',
		      	features: {
		      		$: 'itemSelection',
		      		bindSelection: { $urlHashParam: 'studioPage' },
		      		itemid: '{{.}}',
		      		onSelection: { $: 'writeValue', to: { $: 'studio.currentProfilePath'}, value: '"{{.}}"' }
		      	},
		        controls: [{ $: 'label', style: 'studio-page', text: { $: 'extractSuffix', separator: '.' } } ]
		      }
		    ],
		    features: [
		    	{ $: 'prepare', action: { $: 'studio.waitForPreviewIframe' }, loadingControl: { $label: '...' } }
		    ]
		  }
		]
	}
});

jb_component('studio.currentProfile', {
	type: 'data',
	impl: { '$studio.profileFromPath': { $: 'studio.currentProfilePath'} }
});

jb_component('studio.currentProfilePath', {
	type: 'data',
	impl: { $sessionStorage: 'jbstudio_currentProfilePath' }
});

jb_component('studio.profileFromPath',{
	type: 'data',
	params: { path: { as: 'string' } },
	impl: function(context,path) { return jb_studioProfileFromPath(path); }
});

jb_component('studio.profilePath',{
	type: 'data',
	params: {
		profile: { as: 'single' }
	},
	impl: function(context,profile) {
		return jb_studioFindProfilePath(profile,jb_jbart());
	}
});

jb_component('studio.profileCompName',{
	type: 'data',
	params: {
		profile: { as: 'single' }
	},
	impl: function(context,profile) {
		return profile ? jb_compName(profile) : '';
	}
});

jb_component('studio.waitForPreviewIframe',{
	type:'action',
	impl: function(context) {
		if (jbart.previewjbart) return;
		var deferred = $.Deferred();
		jb_bind(jbart,'previewjbart', function() {
			deferred.resolve();
		},'waitForPreviewIframe');
		return deferred;
	}
});
jb_component('studio.widgetPageNames',{
	type: 'data',
	impl: function(context) {
		var widgetName = jb_urlParam('widget');
		var out = [];
		for(var i in jbart.previewjbart.comps)
			if (i.indexOf(widgetName+'.') == 0 && jbart.previewjbart.comps[i].type == 'control')
				out.push(i);

		return out;
	}
});

jb_component('studio.refreshPreview',{
	type:'action',
	impl: function(context) { jb_studioRefreshPreview(); }
});

function jb_studioLoadWidget(widgetFile) {
	// var fileName = 'widgets/'+widgetFile + '/' + widgetFile+'.js';
	// document.write('<script type="text/javascript">jbart.currentFileName = "'+fileName+'";</sc'+'ript>');
	// document.write('<script type="text/javascript" src="'+fileName+'"></sc'+'ript>');
}
function jbstudio_start() {
	try {
		jbart.logs = jbart.logs || {};

		jb_bind(jbart.logs,'add',function(args) {
			if (args.type == 'error')
				console.error(args.text);
		});	

		jbstudio_renderAll();

	} catch(e) {
		jb_logException(e,'error running jbstudio_start');
	}
	
}

function jbstudio_renderAll() {
	var ctx = jb_ctx();
	ctx.profile = {$: 'studio.all'};

	jb_appendControl($('#jbart-studio-top'), ctx);
}

function jb_studioRefreshPreview() {
	var widgetName = jb_urlParam('widget');
	var page = jb_urlHashParam('studioPage');
	if (!jbart.studio.previewWindow) return;

	$(jbart.studio.previewWindow.document).find('.jbart_widget').each(function() {
		if (this.jbRefreshPreview)
			this.jbRefreshPreview();
		else {
			$(this).empty();
			jbart.studio.previewWindow.jbart.show({
				widget: this.jbWidgetName,
				control: page || this.jbWidgetName + '.main',
				placeholder: this
			});
		}
	})

//	jb_cancelPreviewSelection();
}

jb_component('studio.renderWidget',{
	type: 'control',
	params: {
		widgetName: { as:'string', defaultValue: { $urlParam:'widget'} }
	},
	impl: function(context,widgetName) {
		var $wrapper = $('<div/>').addClass('inner');
		var control = jb_simpleControl(context,$wrapper);
        var src = 'widgets/$/$.html'.replace(/[$]/g,widgetName);

        var iframe = $('<iframe frameborder="0" />').attr('src',src).appendTo($wrapper);
        jbart.studio.previewWindow = iframe[0].contentWindow;

        iframe[0].contentWindow.onload = function() { 
          jbart.previewjbart = this.jbart;
          jbart.preview_jbart_widgets = this.jbart_widgets;
          jbart.previewjbart.probe = true;          
          jb_studioRefreshPreview();	// so probe will take effect
          jb_trigger(jbart,'previewjbart'); 
//          jbart.studio.previewWindow.$('head').append('<link rel="stylesheet" href="../../studio/css/iframe.css" type="text/css" />');
        }

        var urlObj = jbart.run({ $urlHashParam: 'studioPage'});
        jb_observe(urlObj,iframe[0],jb_studioRefreshPreview);
		return control;
	}
});

function jb_studioProfilePathToCompName(path) {
	return jb_studioSplitPath(path)[0];
}

function jb_studioSplitPath(path) {
	return path.replace(/"[^"]*"/g,function(x) { return x.replace(/\./g,'#') }).split('.').map(function(x) { return x.replace(/#/g,'.').replace(/"/g,''); });
}

function jb_studioJoinPath(pathArr) {
	return pathArr.map(function(p) { return p.indexOf('.') == -1 ? p : '"' + p + '"' ; }).join('.');
}

function jb_studioProfileFromPath(path,jbartToLook) {
	return jb_studioSplitPath(path).reduce(function(current,pathElem,index) {
		var path = (current.unmatchedPath || '') + pathElem;
		if (!current.inProfile) {
			if (jb_path(jbartToLook || jb_jbart(),['comps',path,'impl']))
				return { inProfile:true, iter:jb_path(jbartToLook || jb_jbart(),['comps',path,'impl']) };
			else
				return { unmatchedPath:path + '.' };	// comp name may contain . like 'app.comp'
		} 
		if (!path) return current;
		return { iter: jb_path(current.iter||null,[path]), inProfile:true };
	},{}).iter;
}

function jb_studioFindProfilePath(profile,jbartToLook) {
	return findAndMap((jbartToLook || jb_jbart()).comps,function(comp,compName) {
		return findPath(comp.impl,escapePathPart(compName));
	});

	function findPath(parent,path) {
		if (parent == profile) return path;
		if (typeof parent != 'object') return null;
		for(var i in parent) {
			if (i.indexOf('$jb_') == 0) continue;
			var found = findPath(parent[i],path+'.'+escapePathPart(i));
			if (found) return found;
		}
	}

	function findAndMap(obj,func) {
		for(var i in obj) {
			if (i.indexOf('$jb_') == 0) continue;
			var value = func(obj[i],i);
			if (value) return value;
		}
	}

	function escapePathPart(p) { return p.indexOf('.') == -1 ? p : '"' + p + '"'; }
}

jb_component('studio.cleanProfileSugar',{
  type: 'action',
  params: { profile: { as: 'single' } },
  impl: function(context,profile) {
  	if (profile && !profile.$ && jb_compName(profile)) {
  		var firstProp = jb_firstProp(profile);
  		profile.$ = jb_compName(profile);
  		var firstParam = jb_firstProp(jbart.comps[profile.$].params);
  		profile[firstParam] = profile[firstProp];
  		delete profile[firstProp];
  	}
  }
});

jb_component('studio.profileHasParam',{
  type: 'boolean',
  params: { profile: { as: 'single' }, param: { as: 'string' } },
  impl: function(context,profile,param) {
  	var compDef = jb_jbart().comps[ jb_compName(profile) ];
  	return compDef && (compDef.params || {})[param] != null;
  }
});

jb_component('studio.componentHasParams',{
  type: 'boolean',
  params: { compName: { as: 'string' } },
  impl: function(context,compName) {
  	var compDef = jb_jbart().comps[compName];
  	return compDef && !!jb_firstProp(compDef.params || {});
  }
});

jbart.dialogsParent = function() {
	return $('#jb-inspector-top')[0] || $('<div id="jb-inspector-top" />').appendTo('body')[0];
}

function jb_setStudioState(state) {
	jbart.studio.state = $.extend(jbart.studio.state, state);
	sessionStorage['studio state'] = JSON.stringify(jbart.studio.state);
}

function jb_restoreStudioState() {
	jbart.studio.state = JSON.parse(sessionStorage['studio state'] || null) || {};
}
jbart.studio = jbart.studio || {};
jbart.studio.directives = ["ng-app", "ng-bind", "ng-bind-html", "ng-bind-template", "ng-blur", "ng-change", "ng-checked", "ng-class", "ng-class-even", "ng-class-odd", "ng-click", "ng-cloak", "ng-controller", "ng-copy", "ng-csp", "ng-cut", "ng-dblclick", "ng-disabled", "ng-focus", "ng-form", "ng-hide", "ng-href", "ng-if", "ng-include", "ng-init", "ng-jq", "ng-keydown", "ng-keypress", "ng-keyup", "ng-list", "ng-model", "ng-model-options", "ng-mousedown", "ng-mouseenter", "ng-mouseleave", "ng-mousemove", "ng-mouseover", "ng-mouseup", "ng-non-bindable", "ng-open", "ng-options", "ng-paste", "ng-pluralize", "ng-readonly", "ng-repeat", "ng-selected", "ng-show", "ng-src", "ng-srcset", "ng-style", "ng-submit", "ng-switch", "ng-transclude", "ng-value"];

jb_component("studio.angularAll", {
	type: 'control',
	impl: {
		$: 'group',
		style: 'studio-top-bar',
		controls: [
			{ $: 'group', style: 'studio-top-menu',
				controls: [
				{ $: 'label', text: '{{$ngProjectInfo.name}}', style: 'studio-widget-name' },
				{ $: 'studio.angularMainMenu' }
				]
			},
			{ $: 'studio.angularToolbar' },
			{ $: 'group', style: 'studio-jbart-logo', controls: [ { $: 'image', url: 'studio/img/favicon.png' }] },
			{ $: 'group', style: 'studio-widget-placeholder',
				features: { $id: 'studio-widget-placeholder' },
				controls: [ { $: 'studio.angularPreviewIframe'} ]
			},
			{ $: 'group', style: 'studio-footer' }
		]
	}
});

jb_component("studio.angularMainMenu", {
	type: 'control',
	impl: {
	 $: 'group', style: 'studio-main-menu',
		controls: [
			{ $: 'studio.topMenuItem', text: 'File',
				controls: [
					{ $: 'studio.MenuItem', text: 'Open ...', action: { $: 'studio.openWidget'} }
				]
			},
			{ $: 'studio.topMenuItem', text: 'View',
				controls: [
					{ $: 'studio.MenuItem', text: 'Refresh', spritePosition: '10,0', action: { $: 'ng-studio.refreshPreview'} }
				]
			},
			{ $: 'studio.topMenuItem', text: 'Templates',
				controls: [
					{ $: 'dynamicFields', 
						list: function(context) {
							return Object.keys(jbn_templateDB()).splice(0,10);
						},
						variable: 'template',
						genericField: { $: 'studio.MenuItem', 
							text: [ '{{$template.name}}', { $: 'replace', find: '^template/', replace: '' } ],
							action: { $: 'ng-studio.showTemplate', template: '{{$template}}'} 
						}
					},
  		    { $: 'studio.MenuItemSeparator' },
					{ $: 'studio.MenuItem', 
						text: [
							function(context) { return Object.keys(jbn_templateDB()).length; },
						  'Show All Templates ({{}})...'
						],
						action: { $: 'ng-studio.openShowAllTemplatesPopup'}	
					}
				]
			}
		]
	}
});

jb_component("studio.angularToolbar", {
	type: 'control',
	impl: {
		$: 'group', style: 'studio-toolbar',
		controls: [
			{ $: 'label', text: '', style: 'studio-toolbar-left-margin' },
			{ $: 'button', text: 'Select',
				style: { $: 'studio_button.toolbarButton', spritePosition: '0,0' },
				action: { $: 'studio.select'}
			},
			{ $: 'button', text: 'Save',
				style: { $: 'studio_button.toolbarButton', spritePosition: '4,0' },
				action: { $: 'studio.saveWidget'}
			},
			{ $: 'button', text: 'Refresh',
				style: { $: 'studio_button.toolbarButton', spritePosition: '10,0' },
				action: { $: 'ng-studio.refreshPreview'}
			},
			{ $: 'studio.insertInToolbar' }
		]
	}
});

jb_component('studio-ng.openTemplatePopup', {
	type: 'action',
	params: {
		templateElem: { defaultValue: function() { return jbart.studio.templateElem; } }
	},
	impl: {
		$: 'openDialog',
		$vars: {
			code: { $writableText: { '$ng-studio.templateElemToText': '{{$templateElem}}' } }
		},
		title: [{ $urlHashParam: 'studioPage' }, 'Html Template'],
		style: { $: 'dialog.studioFloating', id: 'studio template code' },
		content: {
			$: 'editableText', parent: '{{$code}}', property: 'v',
			style: { $: 'editableText.codemirror', resizer: 'angular code resizer', mode: 'htmlmixed', lineWrapping: true,
				onLoad: function(context) { jb_ngInitCodemirror(context.vars.cm_editor); }
			 },
			features: { $onctrlenter: { $: 'ng-studio.updateTemplateElement', code: '{{$code.v}}', templateElem: '{{$templateElem}}' } }
		}
	}
});

jb_component('ng-studio.refreshPreview', {
	type: 'action',
	impl: function(context) {
		jb_ngStudioRefreshPreview(context);
	}
});

jb_component('studio.openAngularPropertiesPopup', {
	type: 'action',
	params: {
		templateElem: { defaultValue: function() { return jbart.studio.templateElem; } },
		scope: { defaultValue: function() { return jbart.studio.scope; } }
	},
	impl: {
		$: 'openDialog',
		title: [{ $urlHashParam: 'studioPage' }, 'Properties'],
		style: { $: 'dialog.studioFloating', id: 'studio properties' },
		content: {
			$: 'studio.angularProperties', templateElem: '{{$templateElem}}', scope: '{{$scope}}'
		}
	}
});

jb_component('studio.insertInToolbar', {
	type: 'control',
	impl: function(context) {
		var scope = jbart.studio.$rootScope.$new(true);
		scope.htmlTags = ["a", "b", "button", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "img", "label", "ul", "li", "option", "p", "section", "span", "table", "tbody", "th", "thead", "tr", "video", "form", "input", "input[checkbox]", "input[date]", "input[datetime-local]", "input[email]", "input[month]", "input[number]", "input[radio]", "input[text]", "input[time]", "input[url]", "input[week]", "script", "select", "textarea"];
		scope.newTag = 'Insert ...';
		scope.insert = function(newTag) {
			var sourceElem = jbart.studio.templateElem;
			var newElem = _doc.createElement(newTag);
			var isPrimitive = ['button','input','span','label'].indexOf( sourceElem.tagName.toLowerCase() ) >= 0;
			(isPrimitive ? $(sourceElem).parent() : $(sourceElem)).append(newElem);
			scope.newTag = 'Insert ...';
		}
		var html = jb_getHtmlImport('studio/html/insert-in-toolbar.html');
		var out = jbart.studio.$compile(html)(scope);
		scope.$digest();
		return jb_simpleControl(context,$(out));
	}
});

jb_component('studio.angularProperties', {
	type: 'control',
	params: {
		templateElem: { as: 'single'},
		scope: { as: 'single' }
	},
	impl: function(context,templateElem,_scope) {
		var out = jbn_studioHtmlElem('properties',function (scope) {
			scope.attributes = Array.prototype.map.call(templateElem.attributes,function(a) { return  { name: a.nodeName, value: a.nodeValue }; }).filter(function(att) { return att.name != '_jb'})
			scope.$watch('attributes', function(atts) {
				var attrChanged = false;
				atts.forEach(function(att) { 
					if (templateElem.getAttribute(att.name) != att.value) attrChanged = true;
					templateElem.setAttribute(att.name,att.value); 
				});
			},true);

			if ($(templateElem).children().length == 0 && $(templateElem).text()) {
				scope.innerText = $(templateElem).text();
				scope.$watch('innerText', function(newVal) { $(templateElem).text(newVal) });
			}
			scope.directives = jbart.studio.directives;
			scope.newDirective = '+';
			scope.addDirective = function(newDirective) {
				if (newDirective != '+') {
					templateElem.setAttribute(newDirective,'');
					scope.attributes.push({ name: newDirective, value: '' });
					scope.newDirective = '+';
					jbart.studio.$timeout(function(){
					 $('.studio-properties-in-dialog .property-content').last().focus();
					},0,false);
				}
			}
			scope.deleteDirective = function(directive) {
				templateElem.removeAttribute(directive);
				scope.attributes = scope.attributes.filter(function(attr) { return attr.name != directive });
			}
			scope.propertyKeyDown = function($event,addBraces) {
				if ($event.keyCode == 32 && $event.ctrlKey) { // Ctrl+Space
					if (!jbart.studio.autoCompletePopup) {
						jbart.studio.autoCompletePopup = { scope: jbart.studio.$rootScope.$new(true) };
						var html = jb_getHtmlImport('studio/html/auto-complete-popup.html');
						var popup = jbart.studio.$compile(html)(jbart.studio.autoCompletePopup.scope);
						$("body").append(popup);
					}
					var popupScope = jbart.studio.autoCompletePopup.scope;
					popupScope.autoCompleteOn = true;
					popupScope.top = $($event.target).offset().top + $($event.target).height() + 2 + 'px';
					popupScope.left = $($event.target).offset().left + 'px';
					popupScope.scope = {};
					for (var p in _scope)
						if (p.indexOf('$') != 0 && typeof(_scope[p]) != 'function') {
							popupScope.scope[p] = _scope[p];
							if (_scope[p] && !Array.isArray(_scope[p]) && typeof(_scope[p]) == 'object' && Object.keys(_scope[p]).length < 5)	// 2 level heuristic
								for (p2 in _scope[p])
									if (p2.indexOf('$') != 0 && typeof(_scope[p2]) != 'function')
										popupScope.scope[p + '.' + p2] = _scope[p][p2];
						}
					popupScope.itemClick = function(name) {
						var val = $($event.target).val();
						if (addBraces) 
							name = '{{' + name + '}}';
						$($event.target).val(val + name);
						popupScope.autoCompleteOn = false;
						$($event.target).focus();
					}
					window.onmousedown = function(e) {
						if ($(e.target).parents('.studio-auto-complete-popup')[0]) return;
						popupScope.autoCompleteOn = false;
						window.onmousedown = null;
						popupScope.$apply();
					};
					$event.preventDefault();
				}
				if ($event.keyCode == 27) // ESC
					jbart.studio.autoCompletePopup.scope.autoCompleteOn = false;
			}
		},null);

		return jb_simpleControl(context,$(out));
	}
});

jb_component('ng-studio.templateElemToText',{
	type: 'data',
	params: { domElem: { as: 'single'} },
	impl: function(context,domElem) {
		return domElem && domElem.outerHTML.replace(/[\s]_jb=".*"/g,'');
	}
});

jb_component('ng-studio.updateTemplate',{
	type: 'data',
	params: { 
		template: { as: 'single'},
		code: { as: 'string'}
	},
	impl: function(context,template,code) {
		jbn_putTemplateToCache(template,code,null,true);

		jb_ngStudioRefreshPreview(context);
	}
});

jb_component('ng-studio.updateTemplateElement',{
	type: 'data',
	params: { 
		elem: { as: 'single'},
		templateElem: { as: 'single'},
		code: { as: 'string'}
	},
	impl: function(context,elem,templateElem,code) {
		var newTemplate = $(code)[0];
		var templateID = jb_findTemplateIdOfTemplateElem(templateElem);
		$(templateElem).replaceWith(newTemplate);
		var html = jbn_templateDB()[templateID].$elem.get().map(function(e) { return e.outerHTML;}).join('\n');
		jbn_putTemplateToCache(templateID,html,null,true);

		jb_ngStudioRefreshPreview(context);
	}
});

function jb_studioAngularStart() {
	jbart.logs = jbart.logs || {};
	jb_bind(jbart.logs,'add',function(args) {
		if (args.type == 'error')
			console.error(args.text);
	});	

	var projectFile = jb_urlParam('project');
	$.ajax({ url: projectFile, dataType : 'json', cache: false }).then(function(projectInfo) {
		jb_path(jbart,['studio','ngProjectInfo'],projectInfo);

		var ctx = jb_ctx();
		ctx.profile = {$: 'studio.angularAll'};
		ctx.vars.ngProjectInfo = projectInfo;

		document.title = 'jbart studio - ' + projectInfo.name;

		jb_appendControl($('#jbart-studio-top'), ctx);

	},function() {
		$('body').append('project file not found');
	});
}

function jb_studioAngularPickElem(context,elem) {
	jb_setStudioState({ selectedElemPath: jbn_getDomPath(elem).join('>') });
	jbart.studio.elem = elem;
	jbart.studio.templateElem = jb_angularElemToTemplate(elem);
	if (!jbart.studio.templateElem) {
		console.log('error finding template of element - jbid = ' + elem.getAttribute('_jb'));
		console.log('jbDebugIDs[jbid]=');
		console.log(jbDebugIDs[elem.getAttribute('_jb')]);
	}
	jbart.studio.scope = jbart.studio.previewWindow.angular.element(elem).scope();
	jb_run(jb_ctx(context,{
		data: null,
		profile: [
			// { $: 'studio-ng.openTemplatePopup' },
			// { $: 'studio.openAngularPropertiesPopup'},
			{ $: 'studio-ng.openOutlinePopup' },
			// { $: 'studio-ng.openScopePopup'}
		]
	}),{ type:'action'});
	jbart.studio.$rootScope.$apply();
	jbn_positionCursorOnCurrentElem();
}

function jb_ngStudioRefreshPreview(context) {
	if (jbart.studio.previewWindow && jbart.studio.previewWindow.location.href)
		jbart.studio.previewUrl = jbart.studio.previewWindow.location.href;

	jb_refreshControl('studio-widget-placeholder');

	// var _window = jbart.studio.previewWindow;

	// _window.jbRootNgAppElem.innerHTML = _window.jbRootNgAppHtml;
	// var scope = _window.angular.element(_window.jbRootNgAppElem).scope();

	// var compileFunc = _window.jbNgService.$compile(_window.jbRootNgAppElem);
	// scope.$apply(function() {
	// 	compileFunc(scope);
	// })
//	var compiled = compileFunc(scope);
	// _window.jbRootNgAppElem.parentNode.replaceChild(compiled[0],_window.jbRootNgAppElem);
	// _window.jbRootNgAppElem = compiled[0];

//	scope.$digest();
}

jb_component('studio-ng.highlightTemplateInPreview', {
	type: 'action',
	params: { templateElem: { as: 'single' }},
	impl: function(context,templateElem) {
		var elems = jb_ngStudioFindElemsOfTemplate(templateElem);
		jb_studioHighlightPreviewElems(elems);
	}
});


window.jbNgAddToTemplateDB = function(name,valueAsStr,$delegate,updatedFromStudio) {
	return jbn_putTemplateToCache(name,valueAsStr,$delegate,updatedFromStudio);
}

window.jbNgGetFromTemplateDB = function(name,$delegate) {
	return jbn_getTemplateFromCache(name,$delegate);
}

function jbn_inspectData() {
	if (window.jbInspect) return window.jbInspect;
	if (window._window && _window.jbInspect) return _window.jbInspect;
}

function jbn_getDomPath(el) {
	// taken from http://stackoverflow.com/questions/5728558/get-the-dom-path-of-the-clicked-a
  var stack = [];
  while ( el.parentNode != null ) {
    var sibCount = 0;
    var sibIndex = 0;
    for ( var i = 0; i < el.parentNode.childNodes.length; i++ ) {
      var sib = el.parentNode.childNodes[i];
      if ( sib.nodeName == el.nodeName ) {
        if ( sib === el ) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    if ( el.hasAttribute('id') && el.id != '' ) {
      stack.unshift(el.nodeName.toLowerCase() + '#' + el.id);
    } else if ( sibCount > 1 ) {
      stack.unshift(el.nodeName.toLowerCase() + ':eq(' + sibIndex + ')');
    } else {
      stack.unshift(el.nodeName.toLowerCase());
    }
    el = el.parentNode;
  }

  return stack.slice(1); // removes the html element
}



function jbn_studioHtmlElem(htmlName,controllerOrProps,parent) {
	var html = jb_getHtmlImport('studio/html/' + htmlName + '.html');
	var scope = jbart.studio.$rootScope.$new(true);
	if (typeof controllerOrProps == 'object')
		$.extend(scope,controllerOrProps);
	else if (typeof controllerOrProps == 'function') {
		try {
			controllerOrProps(scope);
		} catch(e) { console.log(e); }
	}

	var compiled = jbart.studio.$compile(html)(scope);
	if (parent) parent.appendChild(compiled);
	try { scope.$digest(); } catch(e) {}
	
	return compiled;
}

function jb_getHtmlImport(href, query) {
	var html = jbart.studio.$templateCache.get(href);
	if (html && Array.isArray(html)) html = html[1]; // XHR
	if (html) return html;

	return '<ng-include src="\''+href+'\'" />';
}

function jbn_openStudioMainWindow() {
	if ($('.jbn-main-window')[0])
		return;	// already open
	jb_openStudioPopupWindow({
		title: 'jbart ng inspector',
		content: jbn_studioHtmlElem('main-window',{
			showTemplates: jbn_showTemplates,
			select: jbn_select,
			showScope: jbn_openScopePopup,
			scope: function() { return jbart.studio.scope; },
			save: jbn_save,
			// canSave: function() { return $("#can-save")[0]; },
			showCodeMirror: function() { $(".jb-code-mirror-popup").show(); }
		}),
		id: 'studio main window'
	})
}

function jbn_save() {
	var templateDB = jbn_templateDB();
	jb_map(templateDB, function(template, templateName) {
		if (!$('#jbn-save')[0])
			$('<span id="jbn-save" style="display:none"></span>').appendTo("body");
		var separator = '----JB-SEPARATOR----';
		var toSave = template.value.replace(/[ ]?_jb="[0-9]*"/g,'');
		var lastSave = (template.lastSave || template.fileSource);
		// if (lastSave != toSave) {
			$('#jbn-save').text(lastSave + separator + toSave + separator + templateName);
			template.lastSave = toSave;
			$('<span id="jbn-save-result" template-id="' + templateName + '" ></span>').appendTo("body");
			jbn_waitforSaveResult();
		// }
	});
}

function jbn_waitforSaveResult() {
	if ($('#jbn-save-result').text()) {
		alert($('#jbn-save-result').text());
		var template = $('#jbn-save-result').attr('template-id');
		sessionStorage['jbart-updated-template-'+template] = "";
		$('#jbn-save-result').remove();
	} else {
		setTimeout(jbn_waitforSaveResult,100);
	}
}

function jbn_showTemplates() {
	jbart.run({ $: 'ng-studio.openShowAllTemplatesPopup' });
}

function jbn_select() {
	jb_run(jb_ctx(jb_ctx(), { profile: { $: 'studio.select'} } ));
}

window.jbn_toolbarClick = function() {
	if ($('.jbart-dialog')[0] && ! $('.jbart-dialog').hasClass('jb-hidden'))	{// hide
		$('.jbart-dialog').addClass('jb-hidden');
		jb_setStudioState({ popupsHidden: true });
	}
	else {
		$('.jbart-dialog').removeClass('jb-hidden');				// show
		jb_setStudioState({ popupsHidden: false });
		jbn_initPopups();
	}
}

function jbn_initPopups() {
	if (!jbart.studio.state.popupsHidden) {
		jbn_openStudioMainWindow();
		if (jbart.studio.state['popup-studio templates-open']) // false means user clicked on close
			jbn_showTemplates();
		if (jbart.studio.state['popup-studio properties-open']) 
			jb_run(jb_ctx(jb_ctx(),{ profile: { $: 'studio.openAngularPropertiesPopup'}}));
		if (jbart.studio.state['popup-studio template code-open']) 
			jb_doOnCodeMirrorObject( function() {
				jb_run(jb_ctx(jb_ctx(),{ profile: { $: 'studio-ng.openTemplatePopup'}}));	
			});
		if (jbart.studio.state['popup-studio control tree-open']) 
			jb_run(jb_ctx(jb_ctx(),{ profile: { $: 'studio-ng.openOutlinePopup'}}));
		if (jbart.studio.state['popup-studio scope-open']) 
			jbn_openScopePopup();

		jbn_initCodemirrorPopup();
	}	
}

function jbn_onInspectorLoaded() {
	jb_restoreStudioState();
	if (jbart.studio.state.selectedElemPath) {
		jbart.studio.elem = $(jbart.studio.state.selectedElemPath)[0];
		if (jbart.studio.elem) {
			jbart.studio.templateElem = jb_angularElemToTemplate(jbart.studio.elem);
			jbart.studio.scope = angular.element(jbart.studio.elem).scope();
		}
	}
	jbn_initPopups();
}

function jbn_initCodemirrorPopup() {
	jb_doOnCodeMirrorObject(function() {
		var content = jbn_studioHtmlElem('code-mirror-templates',function ($scope) {
			jbart.studio.cmScope = $scope;
			$scope.templates = Object.keys(jbn_templateDB());
			$scope.currentTemplate = Object.keys(jbn_templateDB())[0];
      $scope.$watch(function (){
          return $scope.currentTemplate;
      }, function (v) {
      	if (jbn_templateDB()[$scope.currentTemplate])
          $scope.currentTemplateText = jbn_templateDB()[$scope.currentTemplate].value.replace(/[\s]_jb=".*"/g,'')
      })
      $scope.update = function(value) {
      	jbn_templateDB()[$scope.currentTemplate].value = value;
      }
		});
		jb_openStudioSingletonPopupWindow({ id: 'code-mirror', title: 'Templates', content:content, visible:false });
	});
}

function jbn_positionCursorOnCurrentElem() {
	var $scope = jbart.studio.cmScope;
	$scope.currentTemplate = jb_findTemplateIdOfTemplateElem(jbart.studio.templateElem);
	var templateAsStr = jbn_templateDB()[$scope.currentTemplate].value;
	var index = templateAsStr.indexOf('_jb="' + $(jbart.studio.templateElem).attr('_jb') + '"');
	var line = templateAsStr.substring(0,index).split('\n').length-1;
	var ch = templateAsStr.substring(0,index).split('\n').pop().indexOf("<");
	$scope.cursorPos = '' + line + ',' + ch;
	$scope.$apply();
}

function jbn_showCodemirrorPopup() {
	$(".id-code-mirror").show();
}
angular.module('jbart-studio-app',[])
.run(function($compile,$rootScope,$timeout,$templateCache) {
	window.ngService = {
		$compile: $compile,
		$rootScope: $rootScope,
		$timeout: $timeout
	}

	jbart.studio = jbart.studio || {};
	$.extend(jbart.studio, { $compile: $compile, $rootScope: $rootScope, $timeout: $timeout, $templateCache: $templateCache });
});
jbart.studio.ngDirectivesByTag = {
	any: ["ng-app", "ng-bind", "ng-bind-html", "ng-bind-template", "ng-class", "ng-class-even", "ng-class-odd", "ng-click", "ng-cloak", "ng-controller", "ng-dblclick", "ng-form", "ng-hide", "ng-if", "ng-include", "ng-init", "ng-jq", "ng-keydown", "ng-keypress", "ng-keyup", "ng-list", "ng-model", "ng-model-options", "ng-mousedown", "ng-mouseenter", "ng-mouseleave", "ng-mousemove", "ng-mouseover", "ng-mouseup", "ng-non-bindable", "ng-open", "ng-options", "ng-repeat", "ng-show", "ng-style", "ng-switch"],
	input: [ "ng-blur", "ng-change", "ng-checked", "ng-copy", "ng-cut", "ng-disabled", "ng-focus", "ng-paste", "ng-readonly", "ng-value", "ng-required", "ng-minlength", "ng-maxlength", "ng-pattern", "ng-trim"],
	textarea: [ "ng-blur", "ng-copy", "ng-cut", "ng-focus", "ng-paste" ],
	select: [ "ng-blur", "ng-copy", "ng-cut", "ng-focus", "ng-paste"],
	a: [ "ng-blur", "ng-copy", "ng-cut", "ng-focus", "ng-href", "ng-paste" ],
	html: [ "ng-csp"],
	option: [ "ng-selected"],
	img: [ "ng-src", "ng-srcset"],
	form: [ "ng-submit" ]
}

function jb_ngCodemirrorHints(cm, options) {
	var cur = cm.getCursor(), token = cm.getTokenAt(cur), list = null, replaceToken;
	var toCursor = token.string.substring(0,cur.ch-token.start);
	toCursor = (toCursor.indexOf('(') != -1) ? toCursor.split('(')[1] : toCursor;	// e.g ng-click="addTodo(
	if (token.state && token.state.htmlState && token.state.htmlState.tagName) {
		var tag = token.state.htmlState.tagName;
		if (!token.type || token.type == 'attribute') {
			var htmlAtts = Object.keys(CodeMirror.htmlSchema[tag].attrs);
			var ngByTagAtts = jbart.studio.ngDirectivesByTag[tag] || [];
			list = ngByTagAtts.concat(jbart.studio.ngDirectivesByTag.any,htmlAtts);
			list = jb_ngFilterList(list,toCursor);
		} else if (token.type == 'string') {	// attribute balue
			var attribute = cm.getTokenAt({line:cur.line, ch:token.start-1}).string;
			if (attribute == "class")
				list = jb_ngFilterList(jbart.studio.cssClasses, toCursor);
			else if (attribute.indexOf('ng') == 0 || attribute.indexOf('data-ng') == 0)	// complete with scope values
				list = jb_ngScopeValues(jbart.studio.scope, toCursor);
			else {	// complete with html static values
				var values = jb_path(CodeMirror.htmlSchema,[tag,'attrs',attribute]);
				if (Array.isArray(values))
					list = jb_ngFilterList(values,toCursor);
			}
		} else if (token.type == 'tag' || (token.type == 'tag bracket' && token.string == '<')) {	// complete tag '<'' or '<inp'
			var tag = (token.string == '<') ? '' : token.string;
			list = jb_ngFilterList(Object.keys(CodeMirror.htmlSchema),tag);
		} 
	}
	else if (	// closing tag: '</' or '</di'
		(token.type == 'tag bracket' && token.string == '</') ||
		(token.type == 'tag error' && token.state.htmlState.context.tagName.indexOf(token.string) == 0))	{
		var tag = (token.string == '</') ? '' : token.string;
		if (token.state.htmlState.context.tagName.indexOf(tag) == 0) {
			list = [ token.state.htmlState.context.tagName + '>' ];
			setTimeout(function() { cm.execCommand('indentAuto'); },1);
		}
	}
	if (list)
		return { 
			list: list,
		  from: replaceToken ? CodeMirror.Pos(cur.line, token.start) : cur,
		  to: replaceToken ? CodeMirror.Pos(cur.line, token.end) : cur
		};
}

jb_doOnCodeMirrorObject(function(CodeMirror) {
	CodeMirror.registerHelper("hint", "html", jb_ngCodemirrorHints);
});

function jb_ngFilterList(list,value) {
	value = value.replace(/^"/,'');
	if (!value.trim()) return list;
	return jb_map(list,function(item) {
		var itemText = item.text || item;
		if (itemText.indexOf(value) != 0) return;
		return { 
			text: itemText.substring(value.length),
			displayText: item.displayText || item
		}
	});
}


function jb_ngScopeValues(scope, path) {
	if (path.indexOf('"') == 0) path = path.substring(1);	// e.g "person.
	var remainder = path.substring(path.lastIndexOf('.')+1);
	path = path.substring(0,path.lastIndexOf('.'));				// drop last part
	try {
		if (path)
			scope = scope.$eval ? scope.$eval(path) : eval('scope.' + path);
	} catch (e) {
		jb_logException(e, 'jb_ngScopeValues, eval: ' + path);
	}

	var list = [];
	for (var p in scope)
		if (p.indexOf('$') != 0 && p != 'constructor') {
			list.push({ text: p, displayText: displyText(scope,p) });
			if (scope[p] && !Array.isArray(scope[p]) && typeof(scope[p]) == 'object' && Object.keys(scope[p]).length < 5)	// 2 level heuristic
				for (p2 in scope[p])
					if (p2.indexOf('$') != 0 && p != 'constructor')
						list.push({ text: p + "." + p2, displayText: displyText(scope[p],p2,p + '.') });
		}

	return jb_ngFilterList(list,remainder);
 
	function displyText(scope,property,prefix) {
		if (!scope[property]) return (prefix || '') + property;
		var value = typeof(scope[property]) == 'object' ? '...' : "" + scope[property];
		if (value.length > 20)
			value = value.substring(0,15) + "...";
		return (prefix || '') + property + "\t" + value + "";
	}
}

function jb_ngInitCodemirror(editor) {
	// auto indent beacuse html parts contains leading tabs
	editor.execCommand('selectAll');
	editor.execCommand('indentAuto')
	editor.execCommand('goDocStart')
}

	angular.module('jbartIntercept').directive('codemirror', function($timeout) {
  return {
  	restrict: 'E',
    template: '<textarea />',
    replace: true,
    scope: { onCtrlEnter: '&' },
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel, $parse) {
    	var settings = {
	      theme: 'solarized light', 
	      mode: 'htmlmixed', 
	      extraKeys: { 
	      	"Ctrl-Space": "autocomplete",
	      	"Ctrl-Enter": function(editor) {
	      		scope.onCtrlEnter({value: editor.getValue()});
	      	}
	      },
	      foldGutter: true, 
	      gutters: ['CodeMirror-foldgutter'],
	      tabSize: 2
	    };

	    $timeout(function() {
			  var editor = CodeMirror.fromTextArea(element[0], settings);
	      scope.$watch(function (){
	          return ngModel.$modelValue;
	      }, function (v) {
	      	if (v)
	          editor.getDoc().setValue(v);
	      });
	      scope.$watch(function (){
	      	return attrs.cursorPos;
	      }, function (v) {
	      	if (v && v.indexOf(',') == -1 && Number(v)) {	// line
	      		editor.getDoc().setCursor(Number(v),0);
	      		editor.focus();
	      	}
	      	else if (v && v.indexOf(',') != -1) {	// line,ch
	      		var line = Number(v.split(',')[0]);
	      		var ch = Number(v.split(',')[1]);
	      		if (line && ch) {
		       		editor.getDoc().setCursor(line,ch);
		       		editor.focus();
		       	}
	      	}
	      });
		  	$(editor.getWrapperElement()).css('box-shadow', 'none').css('height', '200px');
	    });
    }
  };
});
jb_component('studio.angularPreviewIframe',{
	type: 'control',
	impl: function(context,widgetName) {
		var $wrapper = $('<div/>').addClass('inner');
		var control = jb_simpleControl(context,$wrapper);
		var projectInfo = jbart.studio.ngProjectInfo;

		var iframe = $('<iframe frameborder="0" />');
		iframe.attr('src','about:blank').appendTo($wrapper);

//		var moduleBaseUrl = 'http://storage.googleapis.com/jbartlib/apps/angular-inspector/';
		var moduleBaseUrl = 'http://localhost:8081/jbart/ng-studio/';
		var moduleScript = '<script src="'+moduleBaseUrl+'ng-jbart-module.js"></script>'

		$.ajax(jb_ngStudioCrossdomainAjaxOptions(projectInfo.previewUrl,projectInfo.cookie)).then(function(htmlContent) {
			var baseStr  = '<base href="' + projectInfo.previewUrl + '"/>';
//			htmlContent = htmlContent.replace(/window\.location =/g,'debugger; window.location1 =');
			htmlContent = htmlContent.replace(/<head>/,'<head>'+baseStr);

			var setDocCookie = (projectInfo.cookie || '').split(';').map(function(c) { return 'document.cookie="' + c.trim() +'";\n' }).join('');
			var scriptToRunInitially = '<script>try { history.pushState({},"","'+projectInfo.previewUrl+'");\n ' + setDocCookie + '} catch(e) {}</script>';

			htmlContent = htmlContent.replace(/<head>/,'<head>'+scriptToRunInitially);

			if (! htmlContent.match(/script src="([^"]*angular.js)"/)) {
				var doc = iframe[0].contentWindow.document;
				doc.write(htmlContent);
				doc.close();
				return;				
			}

			var angular_srcUrl = htmlContent.match(/script src="([^"]*angular.js)"/)[1];
			var absUrl = angular_srcUrl.match(/\/\//);
			angular_srcUrl = absUrl ? angular_srcUrl : projectInfo.previewUrl.split('/').slice(0,-1).join('/') + '/' + angular_srcUrl;
			$.ajax(jb_ngStudioCrossdomainAjaxOptions(angular_srcUrl)).then(function(angularJs) {
				var angularJsNoRemarks = jb_cleanJsRemarks(angularJs);

				var doc = iframe[0].contentWindow.document;
				(projectInfo.cookie || '').split(';').forEach(function(cookie) { doc.cookie = cookie; })
				doc.open();
				var pos = htmlContent.search(/<script src="[^"]*angular.js"><\/script>/);
				doc.write(htmlContent.substring(0,pos));
				var pos2 = htmlContent.substr(pos).indexOf('</script>');

				angularJsNoRemarks = angularJsNoRemarks.replace('isResourceUrlAllowedByPolicy(url) {','isResourceUrlAllowedByPolicy(url) { return true;');

				doc.write('<script>');
				doc.write(angularJsNoRemarks);
				doc.write('</script>');
				doc.write(moduleScript);
				doc.write(htmlContent.substr(pos+pos2));
				doc.close();

				iframe[0].contentWindow.onload = function() {
					window._window = iframe[0].contentWindow;
					window._doc = iframe[0].contentWindow.document;
					window._angular = _window.angular;

					setTimeout( function() {
						jb_studioAngularPickElem(context,doc.getElementById('toggle-all'));								
					},2000);
				}
			})
		},function() { });

		jbart.studio.previewWindow = iframe[0].contentWindow;

		// iframe[0].contentWindow.onload = function() { 
		//  jbart.previewjbart = this.jbart;
		//  jbart.preview_jbart_widgets = this.jbart_widgets;
		//  jbart.previewjbart.probe = true;          
		//  jb_trigger(jbart,'previewjbart'); 
		//  // jbart.studio.previewWindow.$('head').append('<link rel="stylesheet" href="../../studio/css/iframe.css" type="text/css" />');
		// }

		return control;
	}
});

function jb_ngStudioCrossdomainAjaxOptions(url,cookie) {
	var projectInfo = jbart.studio.ngProjectInfo;

	var options = { url: url };
	if (!!location.host || projectInfo.useProxyToGetIFrame) {
		options.url = '?op=httpCall&url='+encodeURIComponent(url);
		if (cookie)
			options.url += '&header_cookie='+encodeURIComponent(cookie);

		if (projectInfo.useProxyToGetIFrame) options.url = 'http://localhost:8090/' + options.url;   // TODO: take 8090 from a parameter
	}
	if (options.url.indexOf('//')==0) options.url = 'http:'+options.url;

	// if (!location.host && cookie) {
	// 	options.beforeSend = function(xhr) {
	// 		xhr.setRequestHeader('Cookie', cookie);  // TODO: this does not work
	// 	}
	// 	options.xhrFields = { withCredentials: true };
	// }
	
	return options;
}


function jb_cleanJsRemarks(code) {
	code = code.replace("Accept': 'application/json, text/plain, */*","Accept': 'application/json, text/plain, *_*");

	var remarksReg = /(\/\*([\S\s]*?)\*\/)|((?:^|\s)\/\/(.+?)$)/gm;
	var shrinkedBuffer = '', found,lastPos=0,shrink=0,buffer=code;
	while ((found = remarksReg.exec(buffer)) !==null) {
	  var index = remarksReg.lastIndex - found[0].length;
	  shrink += found[0].length;
	  shrinkedBuffer += buffer.substr(lastPos,index-lastPos)
	  lastPos = remarksReg.lastIndex;
	}
	shrinkedBuffer += buffer.substr(lastPos);

	shrinkedBuffer = shrinkedBuffer.replace("Accept': 'application/json, text/plain, *_*","Accept': 'application/json, text/plain, */*");

	return shrinkedBuffer;
}
jb_component("studio.inspectorMenu", {
	type: 'control',
	impl: {
		$: 'group',
		style: 'inspector-top-bar',
		controls: [
			{ $: 'group', style: 'studio-top-menu',
				controls: [
				{ $: 'label', text: '{{$ngProjectInfo.name}}', style: 'studio-widget-name' },
				{ $: 'studio.angularMainMenu' }
				]
			},
			{ $: 'studio.angularToolbar' },
			{ $: 'group', style: 'studio-jbart-logo', controls: [ { $: 'image', url: 'studio/img/favicon.png' }] },
			{ $: 'group', style: 'studio-footer' }
		]
	}
});

// function jb_ngInspectorStart() {
// 	$(document).ready( function() {

// 		if (window.jbInspect.templates) {
// 			window.jbNgTemplateDB = {};
// 			for (var i in window.jbInspect.templates)
// 				window.jbNgTemplateDB[i] = { str: window.jbInspect.templates[i] };
// 		}
// 		window.ngService = window.jbInspect.services;

// 		var ctx = jb_ctx();
// 		ctx.profile = { $: 'studio.inspectorMenu' };
// 		// ctx.profile = { $: 'label', text:'Hi' };
// 		jb_appendControl($('body'), ctx);
// 	});

// }

// jb_ngInspectorStart();

jb_component('studio-ng.openOutlinePopup', {
	type: 'action',
	params: {
		templateElem: { defaultValue: function() { return jbart.studio.templateElem; } }
	},
	impl: {
		$: 'openDialog',
		title: [{ $urlHashParam: 'studioPage' }, 'Outline'],
		style: { $: 'dialog.studioFloating', id: 'studio control tree' },
		content1: { $: 'studio-ng.outlineContent', templateElem: '{{$templateElem}}' },
		content: {
			$: 'tree',
			nodes: { $: 'studio-ng.outlineTreeNodes', templateElem: '{{$templateElem}}' },
			style: 'studio-control-tree',
			itemVariable: 'treeElem',
			itemText: { $: 'studio-ng.itemTextInOutlineTree' },
			features: [
			  { $: 'studio-ng.outlineTreeIcon' },
			  { $: 'treeSelection',
			    onSelection:
				    { $: 'studio-ng.highlightTemplateInPreview', templateElem: '{{$treeElem}}' }
			  },
			  { $: 'studio-ng.autoSelectInOutlineTree', templateElem: '{{$templateElem}}' },
			  { $deleteNode: { $: 'studio-ng.deleteTemplateElem', templateElem: '{{$treeElem}}' } },
			  { $treeDoubleClickNode: function(context) { jbn_outlineDoubleClick(context,context.vars.treeElem); } },
			  { $id: 'studio-tree' }
			]
		}
	}
});

function jbn_outlineDoubleClick(context,treeElem) {
	jbart.studio.templateElem = treeElem;
	jbn_showCodemirrorPopup();
	jbn_positionCursorOnCurrentElem();
			// { $: 'studio-ng.openScopePopup'}

	jb_run( jb_ctx(context, { profile: { $: 'studio-ng.openScopePopup' } }) );
}

jb_component('studio-ng.outlineContent', {
	type: 'control',
	params: { templateElem: { defaultValue: '{{.}}'} },	
	impl: function(context) {
		return jb_studioNgControlFromTemplate('studio/html/outline.html',{
			templateElem: templateElem
		});

		var html = jb_getHtmlImport('studio/html/outline.html');
		var scope = jbart.studio.$rootScope.$new(true);
		scope.templates = Object.keys(jbn_templateDB());
		scope.openTemplate = function() {
			jb_run(jb_ctx(context, { 
				profile: { $: 'ng-studio.showTemplate', template: '{{}}'},
				data: this.template
			}));
		}
		
		var compiled = jbart.studio.$compile(html)(scope);
		scope.$digest();
		return jb_simpleControl(context,$(compiled));
	}
});
jb_component('studio-ng.outlineTree', {
	type: 'control',
	params: { templateElem: { defaultValue: '{{.}}'} },
	impl: {
		$: 'tree',
		nodes: { $: 'studio-ng.outlineTreeNodes', templateElem: '{{$templateElem}}' },
		style: 'studio-control-tree',
		itemVariable: 'treeElem',
		itemText: { $: 'studio-ng.itemTextInOutlineTree' },
		features: [
		  { $: 'studio-ng.outlineTreeIcon' },
		  { $: 'treeSelection',
		    onSelection: [
			    { $: 'studio.openAngularPropertiesPopup', templateElem: '{{$treeElem}}' },
			    { $: 'studio-ng.highlightTemplateInPreview', templateElem: '{{$treeElem}}' }
		    ]
		  },
		  { $: 'studio-ng.autoSelectInOutlineTree', templateElem: '{{$templateElem}}' },
		  { $deleteNode: { $: 'studio-ng.deleteTemplateElem', templateElem: '{{$templateElem}}' } },
		  { $id: 'studio-tree' }
		]
	}
});

jb_component('studio-ng.outlineTreeIcon',{
	type: 'treeFeature',
	impl: function(context) {
		jb_bind(context.vars.control,'treenode',function($node) {
			var pos = '0 -16px';

			var t = $node[0].jbNode.value;
			var tag = t.tagName.toLowerCase();
			var isGroup = false;
			isGroup = ['section','header','footer'].indexOf(tag) > -1;

			if (isGroup) pos = '-16px -16px'; // TODO: keep it somewhere else (maybe in the component definition)
			if (tag == 'button') pos = '-32px -16px';
			$node.find('.treenode-icon').first().css('background-position',pos);
		})
	}
});

jb_component('studio-ng.itemTextInOutlineTree',{
	type: 'data',
	impl: function(context) {
		var t = context.data, $t = $(context.data);
		var tag = t.tagName.toLowerCase();
		if ($t.attr('id')) return tag + ' - ' + $t.attr('id');
		if ($t.text() && $t.children().length == 0) return tag + ' - ' + $t.text();
		if (tag == 'a') return 'a - ' + t.getAttribute('href');
		if ($t.attr('ng-model')) return tag + ' - ' + $t.attr('ng-model');
		if ($t[0].className) return tag + ' - ' + $t[0].className;

		return tag; 
	}
});


jb_component('studio-ng.outlineTreeNodes', {
	type: 'treeNodes',
	params: { templateElem: { as: 'single' } },
	impl: function(context,templateElem) {
		jb_studioInitNgOutlineTreeNodeClass();
		var roots = jb_ngGetTemplateRoots(templateElem);
		return roots.map(function(root) {
			return new jbart.classes.ngOutlineTreeNode(root);
		})
	}
});

function jb_studioInitNgOutlineTreeNodeClass() {
	if (jbart.classes.ngOutlineTreeNode) return;

	jbart.classes.ngOutlineTreeNode = function(tElem) {
		this.value = tElem;
	}
	jbart.classes.ngOutlineTreeNode.prototype.children = function() {
		return $(this.value).children().get().map(function(t) {
			return new jbart.classes.ngOutlineTreeNode(t);	
		})
	}
}

jb_component('studio-ng.autoSelectInOutlineTree',{
	type: 'treeFeature',
	params: { templateElem: { as: 'single' }},
	impl: function(context,templateElem) {
		var tree = context.vars.control;
		jb_bind(tree,'render',function() {
			var parents = $(templateElem).parents().get();
			parents.unshift(templateElem);

			var $parent = context.vars.control.$el,$node;

			parents.reverse().forEach(function(parent,index) {
				if ($node && $node.hasClass('collapsed')) $node[0].jbExpand();
				var children = $parent.find('>.treenode').get();
				for(var i=0;i<children.length;i++)
					if (children[i].jbItem == parent) {
						$node = $(children[i]);
						$parent = $node.find('>.treenode-children');
						return;
					}
			});
			if ($node) $node.addClass('selected');
		});
	}
});


jb_component('ng-studio.openShowAllTemplatesPopup', {
	type: 'action',
	params: {
	},
	impl: {
		$: 'openDialog',
		title: [{ $urlHashParam: 'studioPage' }, 'Templates'],
		style: { $: 'dialog.studioFloating', id: 'studio templates' },
		content: {
			$: 'studio-ng.showTemplates', templateElem: '{{$templateElem}}'
		}
	}
});

jb_component('studio-ng.showTemplates', {
	type: 'control',
	impl: function(context) {
		var out = jbn_studioHtmlElem('templates',{
			templates: Object.keys(jbn_templateDB()),
			openTemplate: function() {
				jb_run(jb_ctx(context, { 
					profile: { $: 'ng-studio.showTemplate', template: '{{}}'},
					data: this.template
				}));
			}
		});
		
		return jb_simpleControl(context,$(out));
	}
});


jb_component("ng-studio.showTemplate", {
	type: 'action',
	params: { template: {} },
	impl: {
		$: 'openDialog',
		title: 'Template - {{$template}}',
		style: { $: 'dialog.studioFloating', id: 'studio template code' },
		$vars: {
			code: { $writableText: { $: 'ng-studio.templateAsString', template: '{{$template}}' } }
		},		
		content: {
			$: 'editableText', parent: '{{$code}}', property: 'v',
			style: { $: 'editableText.codemirror', resizer: true, mode: 'htmlmixed', lineWrapping: true },
			features: [
				{ $onctrlenter: { $: 'ng-studio.updateTemplate', code: '{{$code.v}}', template: '{{$template}}' } }
			]			
		}
	}
});

jb_component("ng-studio.templateAsString", {
	type: 'data',
	params: { template: { as: 'single'} },
	impl: function(context,template) {
		return jbn_templateDB()[template].value.replace(/[\s]_jb=".*"/g,'');
	}
});

function jbn_openScopePopup() {
	jb_run(jb_ctx(jb_ctx(),{ profile: { $: 'studio-ng.openScopePopup'}}));
}

jb_component('studio-ng.openScopePopup', {
	type: 'action',
	impl: {
		$: 'openDialog',
		title: [{ $urlHashParam: 'studioPage' }, 'Scope'],
		style: { $: 'dialog.studioFloating', id: 'studio scope' },
		content: {
			$: 'tree',
			nodes: { $: 'studio-ng.scopeNodes' },
			style: 'studio-control-tree',
			itemVariable: 'treeElem',
			itemText: { $: 'studio-ng.scopeText'},
			features: [
			  { $: 'studio-ng.scopeTreeIcon' },
			  { $: 'treeSelection', useKeys:false }
			]
		}
	}
});

jb_component('studio-ng.scopeNodes', {
	type: 'treeNodes',
	impl: function(context,templateElem) {
		initClass();
		return scopeItems(jbart.studio.scope);

		function scopeItems(baseScope) {
			if (!baseScope) return [];
			var out = [];

			for (var i in baseScope)
				if (baseScope.hasOwnProperty(i) && i.indexOf('$') != 0 && typeof(baseScope[i]) != 'function')
					out.push( new jbart.classes.ngScopeTreeNode( { name: i, value: baseScope[i] }) );

			for (var i in baseScope)
				if (baseScope.hasOwnProperty(i) && i.indexOf('$') != 0 && typeof(baseScope[i]) == 'function')
					out.push( new jbart.classes.ngScopeTreeNode( { name: i, value: baseScope[i] }));

			if (baseScope.$parent)
				out.push( new jbart.classes.ngScopeTreeNode( { name: '$parent', value: baseScope.$parent }));

			return out;
		}

		function initClass() {
			if (jbart.classes.ngScopeTreeNode) return;

			jbart.classes.ngScopeTreeNode = function(value) {
				this.value = value;
			}
			jbart.classes.ngScopeTreeNode.prototype.children = function() {
				if (typeof(this.value.value) == 'object')
					return scopeItems(this.value.value);
			}
		}
	}
});

jb_component('studio-ng.scopeText', {
	params: {
		node: { defaultValue: '{{}}'}
	},
	impl: function(context,node) {
		if (typeof (node.value) == 'function')
		return node.name + '()';
		try {
			var val = (typeof (node.value) == 'object') ? JSON.stringify(node.value) : node.value;
			return node.name + " = " + val;
		}
		catch (e) {	// stringify error
			return node.name;
		}
	}
});

jb_component('studio-ng.scopeTreeIcon',{
	type: 'treeFeature',
	impl: function(context) {
		jb_bind(context.vars.control,'treenode',function($node) {
			var pos = '0 -32px';
			var item = $node[0].jbNode.value;
			var value = item.value;
			var valueType = typeof value;
			if (valueType == 'function') pos = '-32px -32px';

			$node.find('.treenode-icon').first().css('background-position',pos);
		})
	}
});

function jbn_templateDB() {
	return window.jbNgTemplateDB || window.jbInspect.templates;
}

function jb_angularElemToTemplate(elem) {
	var templateDB = jbn_templateDB();

	var jbid = elem.getAttribute('_jb');
	if (!jbid) return;
	for(var templateName in templateDB) {
		if (templateDB[templateName].value.indexOf(jbid) == -1) continue; // for performance

		var $elem = jQuery(templateDB[templateName].$elem);
		var found = $elem.find("[_jb='"+jbid+"']")[0];
		if (found) return found;
		if ($elem[0] && $elem[0].getAttribute('_jb') == jbid) return $elem[0];
	}
}

function jb_ngStudioFindElemsOfTemplate(tElem) {
	var _doc = jbart.studio.previewWindow.document;
	return $(_doc).find('*').get().filter(function(elem) {
		return jb_angularElemToTemplate(elem) == tElem;
	});
}

function jb_ngGetTemplateRoots(tElem) {
	return $(tElem).parents().last().children().get();
}

function jb_findTemplateIdOfTemplateElem(tElem) {
	var templateDB = jbn_templateDB();

	var jbid = tElem.getAttribute('_jb');
	if (!jbid) return;
	for(var templateName in templateDB) {
		var found = $(templateDB[templateName].$elem).findIncludeSelf("[_jb='"+jbid+"']")[0];
		if (found) return templateName;
	}
}


function jbn_putTemplateToCache(name,value,$delegate,updatedFromStudio) {
	try {
		if (name.indexOf('studio/html/') == 0) return $delegate.put(name,value);		// jbart studio itself

		var templateDB = jbn_templateDB();
		jbart.ngIDCounter = jbart.ngIDCounter || 1;
		var valueAsStr;

		if (!updatedFromStudio && sessionStorage['jbart-updated-template-'+name]) {
			valueAsStr = sessionStorage['jbart-updated-template-'+name];
		} else {
			valueAsStr = Array.isArray(value) ? value[1] : value; // xhr (used both in wix and hikeio)
		}

		if (templateDB[name] && templateDB[name].original == valueAsStr) 
			return valueAsStr;

		if (typeof valueAsStr != 'string') return $delegate.put(name,valueAsStr);	// could be a promise object (hikeio)

		var $elem = window.jQuery ? window.jQuery(valueAsStr) : angular.element(valueAsStr);
		if (!$elem.__proto__.get)
			$elem.__proto__.get = function() { var out=[]; for(var i=0;i<this.length;i++) out.push(this[i]); return out; }

		if (!valueAsStr.match(/\s_jb="/)) {
			[$elem[0]].concat($elem.find('*').get()).forEach(function(elem) { 
				var jbid = jbart.ngIDCounter++;
				jb_path(window,['jbDebugIDs',jbid],{ template: name, elem: elem });

				if (!elem) debugger;
				if (elem.setAttribute) elem.setAttribute('_jb',jbid)
			});
			valueAsStr = $elem.get().map(function(e) { return e.outerHTML; }).join('');
		}
		templateDB[name] = { value: valueAsStr, $elem: $elem, original:value, fileSource: templateDB[name] ? templateDB[name].fileSource : value };
		if (updatedFromStudio) 
			sessionStorage['jbart-updated-template-'+name] = valueAsStr;

		return valueAsStr;
	} catch(e) {
		debugger;
		console.log(e);
		return $delegate.put(name,value);
	}
}

function jbn_getTemplateFromCache(name,$delegate) {
	var templateDB = jbn_templateDB();

	return (templateDB[name] && templateDB[name].value) || $delegate.get(name);
}
jb_tests('studio-ng', {
	'code mirror attribute': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<div '
		},
		expectedResult: { $and: [
			{ $contains: ["class","ng-show"] },
			{ $not: { $contains: "ng-blur"}}
		] }
	},
	'code mirror attribute with half value': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<div cla'
		},
		expectedResult: { $contains: ["class"] }
	},
	'code mirror html static value': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<input type="'
		},
		expectedResult: { $contains: "checkbox" }
	},
	'code mirror scope simple empty value': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<input ng-model="',
			scope: { $object: { name:'John', address: { city: 'NewYork' } } }
		},
		expectedResult: { $contains: [ "name", "John", "address.city", "NewYork" ] }
	},
	'data-ng': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<input data-ng-model="',
			scope: { $object: { name:'John' } }
		},
		expectedResult: { $contains: [ "name", "John" ] }
	},
	'code mirror scope simple value': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<input ng-model="na',
			scope: { $object: { name:'John', city:'New York' } }
		},
		expectedResult: { $and: [ 
			{ $contains: [ '"me"', "name", "John" ] },
			{ $not: { $contains: 'city' } } ] }
	},
	'code mirror scope function param': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<input ng-model="addTodo(na',
			scope: { $object: { name:'John', city:'New York' } }
		},
		expectedResult: { $contains: ["name", "John"]  }
	},
	'code mirror scope nested item': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<input ng-model="person.n',
			scope: { $object: { person: { name:'John', city:'New York' } } }
		},
		expectedResult: { $contains: ["name", "John"]  }
	},
	'code mirror html tag': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<inp',
		},
		expectedResult: { $contains: "input" },
	},
	'code mirror close tag': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<div><span></span></',
		},
		expectedResult: { $contains: "div>" },
	},
	'code mirror css class': {
		$: 'dataTest',
		calculate: {
			$:'studio.codeMirrorCompletionList',
			content: '<div class="',
			cssClasses: { $object: ['completed','toggle'] }
		},
		expectedResult: { $contains: "toggle" },
	}
});

jb_component('studio.codeMirrorCompletionList',{
	type: 'data',
	params: {
		content: { as: 'string' },
		cursorLine: { as: 'number', defaultValue:0 },
		cursorChar: { as: 'number' },
		scope: { as: 'single'},
		cssClasses: { as: 'array' }
	},
	impl: function(context,content,cursorLine,cursorChar,scope,cssClasses) {
    var $div = $("<div/>").appendTo("body"), hints;
    try {
	    editor = CodeMirror($div[0], { mode: "htmlmixed", value: content, extraKeys: { "Ctrl-Space": "autocomplete" } });
	    cursorChar = (cursorChar == null && cursorLine == 0) ? content.length : cursorChar;
	    editor.getDoc().setCursor(cursorLine,cursorChar);
	    var original = jbart.studio;
	    $.extend(jbart.studio, { scope : scope, cssClasses : cssClasses } );
	    hints = jb_ngCodemirrorHints(editor);
	    jbart.studio = original;
	  } catch(e) {
	  	jb_logException(e,'codeMirrorCompletionList');
	  }
	  var debug = location.href.indexOf('single-test.html') != -1;	// debug only in single test
	  if (!debug)
    	$div.remove();
    return hints;
	}
});


// generic tree

jb_component('tree',{
	type: 'control',
	params: {
		nodes: { type: 'treeNodes', dynamic: true },
		itemText: { dynamic: true, defaultValue: '{{.}}'},
		itemVariable: { as: 'string' },
		style: { 
			type: "tree.style", 
			defaultValue: {	$: "tree.ul-li" }
		},
		features: { type: "treeFeature[]", dynamic: true }
	},
	impl: function(context,nodes,itemText,itemVariable,style,features,childrenEquality) {
		return jb_control(context,{
			nodes: nodes(),
			itemVariable: itemVariable,
			itemText: function(item) { return itemText(jb_treeItemContext(this,item)); }
		});
	}
});

function jb_treeItemContext(tree,item,nodeEl) {
	var vars = jb_obj(tree.itemVariable,item);
	if (nodeEl) vars.node = nodeEl.jbNode;
	vars.treeControl = tree;

	return jb_ctx(tree.context,{ data: item, vars: vars } );
}

jb_component('treeDoubleClickNode',{
	type: 'treeFeature',
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'treenode',function($item) {
			$item.dblclick(function(event) {
				action(jb_treeItemContext(context.vars.control,$item[0].jbItem,$item[0]));
				event.stopPropagation();
			});

			jb_bind(context.vars.control,'enter',function($item) {
				action(jb_treeItemContext(context.vars.control,$item[0].jbItem,$item[0]));
				event.stopPropagation();
			});
		});
	}
});

jb_component('deleteNode',{
	type: 'treeFeature',
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'delete',function($item) {
			action(jb_treeItemContext(context.vars.control,$item[0].jbItem,$item[0]));
		});
	}
});
jb_component('rightClickToAddItems', {
	type: 'treeFeature',
	params: {
		action: { type: 'action', dynamic: true }
	},
	impl: function(context,action) {
		jb_bind(context.vars.control,'rightClickToAddItems',function($item) {
				action(jb_treeItemContext(context.vars.control,$item[0].jbItem,$item[0]));
		});
	}
});


jb_component('autoSelectFirstItem', {
	type: 'treeFeature',
	impl: function(context) {
		var tree = context.vars.control;
		jb_bind(tree,'render',function() {
			tree.$el.find('>.treenode').first().addClass('selected');
		});
	}
});

jb_component('autoFocus', {
	type: 'treeFeature',
	impl: function(context) {
		var tree = context.vars.control;
		jb_bind(tree,'render',function() {
			tree.$el.focus();
		})
	}
});


jb_component('treeSelection',{
	type: 'treeFeature',
	params: {
		onSelection: { type: 'action', dynamic: true },
		useKeys: { type: 'boolean', as: 'boolean', defaultValue: true }
	},
	impl: function(context,onSelection,useKeys) {
		var control = context.vars.control;
		jb_bind(control,'selectionChanged',function($item) {
			onSelection(jb_treeItemContext(context.vars.control,$item[0].jbItem,$item[0]));
		});

		jb_bind(control,'treenodeClicked',function($item) {
			control.$('.treenode').removeClass('selected');
			$item.addClass('selected');
    		jb_trigger(control,'selectionChanged',$item);
		});

		if (useKeys) {
			jb_bind(control,'render',function() {
				control.$el.click(function() { control.$el.focus();	});
			    control.$el.keydown(function(event) {
			      if (event.keyCode == 40) { down(); event.stopPropagation(); }
			      if (event.keyCode == 38) { up(); event.stopPropagation(); }
			      if (event.keyCode == 37) { left(); event.stopPropagation(); }
			      if (event.keyCode == 39) { right(); event.stopPropagation(); }
			      if (event.keyCode == 13) { jb_trigger(control,'enter',control.$('.selected')); jb_digest(); }
			      if (event.keyCode == 46) { jb_trigger(control,'delete',control.$('.selected')); jb_digest(); }
			    });
			    if (control.$el[0].tabIndex == -1) control.$el[0].tabIndex = 0;
				control.$el.focus();
			});
		}

		jb_bind(control,'beforeNodeDeleted',function(node) {
			if (!node.$el.hasClass('selected')) return;
			if (node.$el.next().length) selectNode(node.$el.next());
		});

		jb_bind(control,'nodeChildrenRefreshed',function(args) {
			var selected = args.$prevnodes.filter('.selected')[0];
			if (!selected) return;
			// find selected in new nodes
			var new_selected = args.$nodes.get().filter(function(node) { 
				return node.jbNode.value == selected.jbNode.value;
			 })[0];
			new_selected = new_selected || args.$nodes[args.$prevnodes.get().indexOf(selected)];
			selectNode(new_selected);
		});

		function down() {
			var $selected = control.$('.selected');
			if (!$selected[0]) return;
			var next = (!$selected.hasClass('collapsed') && $selected.find('.treenode')[0]);
			if (!next) {
		      for(var iter=$selected[0];iter && !next;) {
		        next = iter.nextSibling;
		        if (!next) iter=parentNode(iter)[0];
		      }      
		    }
	    	selectNode(next);
	    }

	    function parentNode(node) { 
	    	return $(node).parent().closest('.treenode');
	    }
	    function up() {
	    	var $selected = control.$('.selected');
	    	if (!$selected[0]) return;
	    	var prev = $selected.prev()[0] ? lastVisibleChildOf($selected.prev()) : parentNode($selected);
	    	if (prev[0])
	    		selectNode(prev);
	    }

		  function left() {
	    	control.$('.selected').addClass('collapsed');
		  }

		  function right() {
	    	var selected = control.$('.selected')[0];
	    	if (!selected) return;
	    	if ($(selected).hasClass('collapsed') && ! $(selected).hasClass('leaf'))
	    		selected.jbExpand();
	    	else
	    		jb_trigger(control,'rightClickToAddItems',$(selected));
		  }

		  function lastVisibleChildOf($parent) {
		  	if ($parent.hasClass('collapsed') || $parent.hasClass('leaf')) return $parent;
		  	var lastChild = $parent.find('>.treenode-children>.treenode').last();
		  	return lastVisibleChildOf(lastChild);
		  }

		  function selectNode(newSelected) {
	    	if (!newSelected) return;
	  		control.$('.selected').removeClass('selected');
	  		$(newSelected).addClass('selected');
	  		jb_trigger(control,'selectionChanged',$(newSelected));
	  	  }

	}
});

jb_type('tree.type');

jb_component('tree.ul-li',{
	type: 'tree.style',
	impl: function() {
		return {
			html: '<ul class="tree-parent"><li class="treenode"><div class="treenode-line"><button class="treenode-expandbox"><div class="frame"/><div class="line-lr"/><div class="line-tb"/></button><span class="treenode-icon" /><div class="treenode-label"/></div><ul class="treenode-children"/></li></ul>',
			cssClass: "jb-tree",
			create: function(control) {
				jb_tree(control);
			}
		}
	}
});

function jb_tree(control) {
	var $nodeTemplate = control.$('.treenode').remove();

	control.createNode = function($nodeEl,node,level) {
		$nodeEl[0].jbItem = node.value; $nodeEl[0].jbNode = node; node.$el = $nodeEl;
		var children = node.children && node.children() || [];
		var $label = $nodeEl.find('.treenode-label').text(control.itemText(node.value)).click(function(e) {
			jb_trigger(control,'treenodeClicked',$nodeEl);	
		});
		jb_watch(function() { 
			return control.itemText(node.value); 
		},$nodeEl,function(newval) {
			$label.text(newval);
		});

		$nodeEl.find('.treenode-expandbox').click(function() {
			if (!$nodeEl.hasClass('leaf')) {
				if ($nodeEl.hasClass('collapsed'))
					$nodeEl[0].jbExpand();
				else
					$nodeEl.addClass('collapsed');
			}
		});
		$nodeEl[0].jbExpand = function() {
			if ($nodeEl.hasClass('collapsed')) {
				$nodeEl.removeClass('collapsed');
				if (!$nodeEl[0].jbChildrenCreated) {
					control.createNodeChildren($nodeEl,children,level);
					$nodeEl[0].jbChildrenCreated = true;
				}
			}
		}
		// watch node parent before its children
		jb_watch(function() { return node.children && node.children(true) || []}, $nodeEl,refreshChildren, jb_treeNodeChildrenEquality);

		if (level < 2)
			control.createNodeChildren($nodeEl,children,level);
		else {
			$nodeEl.addClass('collapsed');
			if (children.length==0) $nodeEl.addClass('leaf');
		}

		jb_trigger(control,'treenode',$nodeEl);

		function refreshChildren(newChildren,prevChildren) {
			var deletedNodeIndex = findDeletedNodeIndex(newChildren,prevChildren);
			if (deletedNodeIndex > -1) {
				var $nodeToDel = $nodeEl.find('>.treenode-children>.treenode').slice(deletedNodeIndex,deletedNodeIndex+1);
				if ($nodeToDel[0]) {
					jb_trigger(control,'beforeNodeDeleted',$nodeToDel[0].jbNode);
					$nodeToDel.remove();
					jb_trigger(control,'nodeDeleted',$nodeToDel[0].jbNode);
					return;
				}
			}
			newChildren = node.children && node.children() || [];
			var $prevnodes = $nodeEl.find('.treenode-children').first().children().remove();
			control.createNodeChildren($nodeEl,newChildren,level);
			jb_trigger(control,'nodeChildrenRefreshed',{ node: node, newChildren: newChildren, prevChildren: prevChildren, $prevnodes: $prevnodes, $nodes: $nodeEl.find('.treenode-children').children() });
		}

		function findDeletedNodeIndex(newChildren,prevChildren) {
			if (newChildren.length != prevChildren.length-1) return -1;
			var out=-1;
			for(var i=0;i<prevChildren.length-1;i++) {
				var i2 = (out==-1) ? i : i-1;
				if (prevChildren[i].value != newChildren[i2].value) {
					if (out>-1) return -1;	// more than one differance
					out = i;
				}
			}
			if (out == -1) return prevChildren.length-1;	// the last one
			return out;
		}
	}

	control.createNodeChildren = function($nodeEl,children,level) {
		var $parent = $( $nodeEl.find('.treenode-children')[0] || $nodeEl[0] );
		children.forEach(function(childNode) {
			var $childNode = $nodeTemplate.clone().appendTo($parent);
			control.createNode($childNode,childNode,level+1);
		});
		$nodeEl.toggleClass('leaf',children.length == 0);
	}
	control.createNodeChildren(control.$('.tree-parent'),control.nodes,0);
}

function jb_treeNodeChildrenEquality(arr1,arr2) {
	if (arr1.length != arr2.length) return false;
	for(var i=0;i<arr1.length;i++)
		if (arr1[i].value != arr2[i].value) 
		  return false;
	return true;	
}
angular.module('jbartIntercept').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('studio/html/auto-complete-popup.html',
    "<div class=\"studio-auto-complete-popup\" style=\"top:{{top}};left:{{left}}\" ng-show=\"autoCompleteOn\">\r" +
    "\n" +
    "\t<table>\r" +
    "\n" +
    "\t\t<tr class=\"item\" ng-repeat=\"(name,value) in scope\" ng-click=\"itemClick(name)\">\r" +
    "\n" +
    "\t\t\t<td class=\"name\"><span>{{name}}</span></td>\r" +
    "\n" +
    "\t\t\t<td class=\"value\" ng-attr-title=\"{{value}}\"><span>{{value}}</span></td>\r" +
    "\n" +
    "\t\t</tr>\r" +
    "\n" +
    "\t</table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('studio/html/code-mirror-templates.html',
    "<section class=\"ng-code-mirror\">\r" +
    "\n" +
    "\t<select id=\"templates-list\" ng-model=\"currentTemplate\" >\r" +
    "\n" +
    "\t\t<option ng-repeat=\"template in templates\">{{template}}</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\t<br/>\r" +
    "\n" +
    "\t<codemirror ng-model=\"currentTemplateText\" cursor-pos=\"{{cursorPos}}\" on-ctrl-enter=\"update(value)\"/>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('studio/html/insert-in-toolbar.html',
    "<select class=\"insert-in-toolbar\" ng-model=\"newTag\" ng-change=\"insert(newTag)\">\r" +
    "\n" +
    "\t<option>Insert ...</option>\r" +
    "\n" +
    "\t<option ng-repeat=\"tag in htmlTags\">{{tag}}</option>\r" +
    "\n" +
    "</select>\r" +
    "\n"
  );


  $templateCache.put('studio/html/main-window.html',
    "<div class=\"jbart-inspector-toolbar\">\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\" title=\"select\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\" title=\"show templates\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">S</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('studio/html/outline.html',
    "<section class=\"studio-outline\">\r" +
    "\n" +
    "\t<section class=\"toolbar\">\r" +
    "\n" +
    "\t\t<button title=\"Edit html\" class=\"toolbar-btn edit-html-btn\" ng-click=\"editHtml()\" />\r" +
    "\n" +
    "\t</section>\r" +
    "\n" +
    "\t<jbart component=\"studio-ng.outlineTree\" data=\"{{templateElem}}\" />\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('studio/html/properties.html',
    "<section class=\"studio-properties-in-dialog\">\r" +
    "\n" +
    "\t<div class=\"studio-propertySheet\">\r" +
    "\n" +
    "\t\t<div class=\"property innerText\" ng-show=\"innerText\">\r" +
    "\n" +
    "\t\t\t<label class=\"property-title\">text:</label>\r" +
    "\n" +
    "\t\t\t<input class=\"property-content jb-studio-primitive-textbox\" ng-model=\"innerText\" ng-keydown=\"propertyKeyDown($event,true)\"/>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"property\" ng-repeat=\"attr in attributes\">\r" +
    "\n" +
    "\t\t\t<label class=\"property-title\">{{attr.name}}:</label>\r" +
    "\n" +
    "\t\t\t<input class=\"propertty-content jb-studio-primitive-textbox\" ng-model=\"attr.value\" ng-keydown=\"propertyKeyDown($event)\"/>\r" +
    "\n" +
    "\t\t\t<button class=\"delete\" ng-click=\"deleteDirective(attr.name)\">&#10006;</button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<select id=\"newDirective\" ng-model=\"newDirective\" ng-change=\"addDirective(newDirective)\">\r" +
    "\n" +
    "\t\t<option selected>+</option>\r" +
    "\n" +
    "\t\t<option ng-repeat=\"dir in directives\">{{dir}}</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('studio/html/templates.html',
    "<section class=\"studio-ng-templates\">\r" +
    "\n" +
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search ng-show=\"templates.length > 20\"/>\r" +
    "\n" +
    "\t<ul>\r" +
    "\n" +
    "\t\t<li ng-repeat=\"template in templates | filter:search\" ng-click=\"openTemplate()\" jb-selection>\r" +
    "\n" +
    "\t\t\t<div>{{template}}</div>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</section>"
  );

}]);

	jbart.studio.previewWindow = window;

}());
