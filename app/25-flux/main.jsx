import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Record} from 'immutable';

import '../css/style.scss';

class Store extends Record({ number: 10 }) {
    increment() {
        console.log('increment');
        this.set(this.get('number') + 1)
    }
};


class Container extends React.Component {
    constructor() {
        super();
        this.state = new Store();
        console.log('state', this.store);
        console.log('state.number', this.store.number);
    }

    render() {
        return <App {...this.state} />;
    }
}

function App(props) {
    return (<div>
        <button onClick={props.increment}>Increment</button>
        {props.number}
    </div>);

}

document.addEventListener('DOMContentLoaded', async () => {
    ReactDOM.render(<Container />, document.getElementById('root'));
});
