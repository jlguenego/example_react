// Init

var array = [3, 5, 8, 2];

var listElt = document.querySelector('#list');
var liElt = listElt.querySelector('li');

listElt.innerHTML = '';
array.forEach(i => {
  var node = liElt.cloneNode(true);
  node.querySelector('span').innerHTML = i;
  listElt.appendChild(node);
});

// aie aie aie it is a lot of code for something simple...
