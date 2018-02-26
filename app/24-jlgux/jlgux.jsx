import React from 'react';

export class StoreManager {
    constructor(container, store, methods) {
        console.log('StoreManager', container, store, methods);
        this.container = container;
        this.store = store;
        methods.forEach(method => {
            this[method] = (...args) => {
                this.store[method].apply(this.store, args);
                this.container.setState(this);
            };
        });
    }
}

export function createContainer(view, business, methods) {
    const Container =  class Container extends React.Component {
        constructor() {
            super();
            this.state = new StoreManager(this, business, methods);
            console.log('this.state', this.state);
        }
    
        render() {
            console.log('this.state', this.state);
            return React.createElement(view, this.state);
        }
    };
    return Container;
}



