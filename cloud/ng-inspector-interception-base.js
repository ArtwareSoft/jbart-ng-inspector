(function() {
	window.jbInspect = window.jbInspect || {};
	window.jbInspect.modules = window.jbInspect.modules || {};
	window.jbInspect.templates = window.jbInspect.templates || {};

	angular.module('jbartIntercept',['ng']).run(function($rootScope,$compile, $parse,$templateCache) {
		jbart.studio = jbart.studio || {};
		angular.extend(jbart.studio, {$rootScope: $rootScope, $compile: $compile, $parse: $parse, $templateCache: $templateCache });
//		window.jbInspect.services = {$rootScope: $rootScope, $compile: $compile, $parse: $parse, $templateCache: $templateCache };
	})
	.config(function($provide) {
		$provide.decorator("$templateCache",function($delegate) {
			return { 
				put:function(k,v) {
					return jbn_putTemplateToCache(k,v,window.jbInspect.templates,$delegate);
				},
				info: $delegate.info,				
				get:function(k) {
					return jbn_getTemplateFromCache(k,window.jbInspect.templates,$delegate);
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
