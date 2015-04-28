debugger;
var div = document.createElement('div');
div.setAttribute('id','jb-inspector-top');

document.body.appendChild(div);


var div2 = document.createElement('div');
div2.setAttribute('id','jb-inspector-version');
div2.innerHTML = 'angular version = ' + window.angular.version.full;
div.appendChild(div2);

