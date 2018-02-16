// Init 

var a = 3;
document.querySelector('#a').innerHTML = a;

var input1Elt = document.querySelector('#input1');
var input2Elt = document.querySelector('#input2');

// Check any change on #input1
input1Elt.addEventListener('input', function(event) {
    a = input1Elt.value;
    input2Elt.value = a;
    document.querySelector('#a').innerHTML = a;
});

// Check any change on #input2
input2Elt.addEventListener('input', function(event) {
    a = input2Elt.value;
    input1Elt.value = a;
    document.querySelector('#a').innerHTML = a;
});

// aie aie aie if you need to add #input3...
