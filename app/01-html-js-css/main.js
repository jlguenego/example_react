(function () {
    'use strict';

    // Hello world to the console
    console.log('Hello world');
    // Talk to the DOM.
    // Question ? What if the main.js is loaded before the DOM ?
    document.querySelector('#title').innerHTML = 'bloubloublibli';

    // bind example
    const $ = document.querySelector.bind(document);
    $('#title').innerHTML = 'Hello world!';

    // Observables since ES5.1
    const hello = {
        get world() {
            console.log('try to access to the world...');
            return this.$$hiddenWorld;
        },

        set world(value) {
            console.log('try to set something to the world...', value);
            this.hiddenWorld = value;
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

})();


// some element of Javascript.