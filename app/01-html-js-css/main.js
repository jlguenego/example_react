(function() {
	'use strict';

	// Hello world to the console
	console.log('Hello world');
	// Talk to the DOM.
	// Question ? What if the main.js is loaded before the DOM ?
	document.querySelector('#title').innerHTML = 'bloubloublibli';

	// bind example
	const $ = document.querySelector.bind(document);
	$('#title').innerHTML = 'Hello world!';

	// spread opearator for easy immutable object.
	const o1 = { hello: 'world', coucou: { titi: 'toto' } };
	const o2 = o1;
	const o3 = { ...o1 };
	console.log('o1', o1);
	console.log('o2', o2);
	console.log('o3', o3);
	console.log('o1 === o2', o1 === o2);
	console.log('o1 === o3', o1 === o3);
	console.log('o1.coucou === o3.coucou', o1.coucou === o3.coucou);

	// "get" and "set" since ES5.1
	const hello = {
		get world() {
			console.log('try to access to the world...');
			return this.$$hiddenWorld;
		},

		set world(value) {
			console.log('try to set something to the world...', value);
			this.$$hiddenWorld = value;
			return 'now it is ' + this.hiddenWorld;
		}
	};

	Object.defineProperty(hello, '$$hiddenWorld', {
		value: 'coucou',
		configurable: false,
		writable: true,
		enumerable: false,
	});
	console.log('hello', hello);

	console.log('hello.world', hello.world);
	hello.world = 'foo';
	console.log(`hello.world = 'bar';`, hello.world = 'bar');
	hello.$$hiddenWorld = 32;
	console.log('$$hiddenWorld in hello', '$$hiddenWorld' in hello);
	console.log('hello.hasOwnProperty($$hiddenWorld)', hello.hasOwnProperty('$$hiddenWorld'));
	for (var p in hello) {
        // List only enumerable properties.
		console.log('p', p);
    }
    try {
        delete hello.$$hiddenWorld;
        console.log('Configurable property cannot be deleted.');
    } catch (e) {
        console.log('Not configurable property cannot be deleted.');
    }
})();

// some element of Javascript.
