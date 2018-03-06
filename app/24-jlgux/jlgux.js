import React from 'react';

export class StoreManager {
    
    constructor(store, transitions = [], getters = []) {
        console.log('StoreManager', store, transitions);
        this.$$store = store;
        transitions.forEach(transition => {
            this[transition] = (...args) => {
                this.$$store[transition].apply(this.$$store, args);
                this.$$getContainers().forEach(n => n.setState(this));
            };
        });
        getters.forEach(getter => {
            this[getter] = (...args) => {
                return this.$$store[getter].apply(this.$$store, args);
            };
        });
    }

    $$containers = [];

    $$addContainer(container) {
        this.$$containers.push(container);
    }

    $$getContainers() {
        return this.$$containers;
    }
}

export function createContainer(view, storeManager) {
    const Container =  class Container extends React.Component {
        constructor() {
            super();
            this.state = storeManager;
            storeManager.$$addContainer(this);
            console.log('this.state', this.state);
        }
    
        render() {
            console.log('this.state', this.state);
            // return <view {...this.state} />
            return React.createElement(view, this.state);
        }
    };
    return Container;
}



