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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\">Templates</button\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\">Select</button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\">Templates</button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\">Select</button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\">Select</button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\">Templates</button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\">Select</button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\">Templates</button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\" title=\"select\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\" title=\"show templates\"><span/></button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\" title=\"select\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\" title=\"show templates\"><span/></button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "<div>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\" title=\"select\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\" title=\"show templates\"><span/></button>\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search />\r" +
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


  $templateCache.put('studio/html/scope.html',
    ""
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul> "
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showScope()\" title=\"show templates\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-toolbar-button jbart-show-scope\" ng-click=\"showScope()\" title=\"show templates\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show1=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show1=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span>{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span>{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-show=\"item.hasMore\">+</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li class=\"scope-item\" ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li class=\"scope-item\" ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li class=\"scope-item-in-tree\" ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul>\r" +
    "\n" +
    "\t<li class=\"scope-item-in-tree\" ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-item-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ open: item.hasMore }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ 'can-open': true }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ open: true }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-class=\"{ open: true }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ open: true }\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"open\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"\" ng-class=\"expand-box open\"/>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-class=\"expand-box open\"></span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-class=\"open\"></span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span ng-class=\"open\">BB</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" ng-show=\"item.hasMore\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" ng-show=\"hasMore\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" ng-show=\"item.hasMore\">AA{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" ng-show=\"item.hasMore\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" ng-show=\"item.hasMore\">{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-show=\"item.hasMore\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ item.hasMore }\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ frame: item.hasMore }\">\r" +
    "\n" +
    "\t\t\t<span class=\"frame\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"lr\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t\t<span class=\"tb\" ng-show=\"item.hasMore\"/>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ frame: item.hasMore, expanded: false }\" />\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" ng-class=\"{ frame: item.hasMore, expanded: item.expanded }\" />\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{expanded: item.expanded}\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{line: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{expanded: item.expanded}\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{expanded: item.expanded}\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded}\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded}\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"treenode-label\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-title=\"item.value\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-title=\"item.value\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-title=\"{{item.value}}\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{value}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<span>Hi {{gugi}}</span>\r" +
    "\n" +
    "\t<div ng-controller=\"innerItem\">\r" +
    "\n" +
    "\t\t\t<span>A {{gugi}}</span>\r" +
    "\n" +
    "\t\t<!-- <ng-include src=\"studio/html/scope.html\" /> -->\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{value}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<span>Hi {{gugi}}</span>\r" +
    "\n" +
    "\t<div ng-controller=\"innerItem\">\r" +
    "\n" +
    "\t\t\t<span>A {{gugi}}</span>\r" +
    "\n" +
    "\t\t<!-- <ng-include src=\"studio/html/scope.html\" /> -->\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{value}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<span>Hi {{gugi}}</span>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{value}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<span>Hi {{gugi}}</span>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<span>Hi {{gugi}}</span>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<div ng-controller=\"innerItem\">Hi {{innerItem}}</div>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-bind-html=\"myHTML\"/>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-bind-html=\"innerItems()\"/>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-bind-html=\"innerItemCode()\"/>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-bind-html=\"innerItemHtml()\"/>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-bind-html=\"innerItemContent()\"/>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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


  $templateCache.put('studio/html/scope.html',
    "<ul class=\"scope-items-in-tree\">\r" +
    "\n" +
    "\t<li ng-repeat=\"item in scope()\">\r" +
    "\n" +
    "\t\t<span class=\"expand-box\" >\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{frame: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{lrLine: item.hasMore}\" />\r" +
    "\n" +
    "\t\t\t<span ng-class=\"{tbLine: !item.expanded &amp;&amp; item.hasMore }\" />\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span class=\"name\" >{{item.name}}</span>\r" +
    "\n" +
    "\t\t<span class=\"value\" ng-attr-title=\"{{item.value}}\" ng-hide=\"hideValue\">{{item.value}}</span>\r" +
    "\n" +
    "\t\t<div ng-bind-html=\"innerItemContent(item)\"/>\r" +
    "\n" +
    "\t\t<div ng-controller=\"innerItem\">Hi {{attr1}}</div>\r" +
    "\n" +
    "\t</li>\r" +
    "\n" +
    "</ul>"
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
    "\t<button class=\"jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\">{}<span/></button>\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2-yaniv2-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2-yaniv2-yaniv2-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2-yaniv2-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
    "<section class=\"studio-ng-templates-yaniv2-yaniv2-yaniv2-yaniv2\">\r" +
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
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">Save</button>\r" +
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
