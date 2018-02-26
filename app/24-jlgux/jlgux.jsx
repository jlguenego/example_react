import React from 'react';
import { Counter } from './business';

function App(props) {
    return (<div>
        <button onClick={props.increment.bind(props)}>Increment</button>
        {props.store.number}
    </div>);
}

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


export class Container extends React.Component {
    constructor() {
        super();
        this.state = new StoreManager(this, new Counter(), ['increment']);
        console.log('this.state', this.state);
    }

    render() {
        return <App {...this.state} />;
    }
}
