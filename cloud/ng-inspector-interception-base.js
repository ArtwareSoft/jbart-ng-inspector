(function() {
	window.jbInspect = window.jbInspect || {};
	window.jbInspect.modules = window.jbInspect.modules || {};
	window.jbInspect.templates = window.jbInspect.templates || {};

	angular.module('jbartIntercept',['ng']).run(function($rootScope,$compile, $parse,$templateCache) {
//		window.jbInspect.services = {$rootScope: $rootScope, $compile: $compile, $parse: $parse, $templateCache: $templateCache };
	})
	.config(function($provide) {
		$provide.decorator("$templateCache",function($delegate) {
			return { 
				put:function(k,v) {
					// if (!window.parent.jbNgTemplateDB[k] || !window.parent.jbNgTemplateDB[k].updated)
					// 	v = window.parent.jbNgAddToTemplateDB(k,v);
					window.jbInspect.templates[k] = v;
					return $delegate.put(k,v);
				},
				info: $delegate.info,				
				get:function(k) {
					return $delegate.get(k);
					// return (window.parent.jbNgTemplateDB[k] && window.parent.jbNgTemplateDB[k].str) || $delegate.get(k);
				},
				remove:function(k) { return $delegate.remove(k); }
			}
		})
	})



	var prevFunc = angular.module;
	angular.module = function(name,requires,configFN) {
		window.jbInspect.modules[name] = {};
//		console.log('module loaded - ' + name);
		 if (requires && name.indexOf('ng') != 0 && name != 'jbart-studio-app')		
		 	return prevFunc.call(angular,name,requires.concat(['jbartIntercept']),configFN);
		 else
			return prevFunc.call(angular,name,requires,configFN);
	}
}());
