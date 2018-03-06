import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { StoreManager, createContainer } from './jlgux';

import {Counter} from './business';

function App(props) {
    return (<div>
        <button onClick={props.increment}>Increment</button>
        <button onClick={() => props.add(2)}>add 2</button>
        {/* <button onClick={() => props.times(2)}>times 2</button> */}
        {/* <button onClick={props.add.bind(undefined, 3)}>add 3</button> */}
        {props.getNumber()}
    </div>);
}

// declare the business
const storeManager = new StoreManager(new Counter(), ['increment', 'add'], ['getNumber']);

// declare the container for react.
const Container = createContainer(App, storeManager);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Container />, document.getElementById('root'));
    // ReactDOM.render(<Container />, document.getElementById('root2'));
});

setInterval(() => {
    storeManager.add(-1);
}, 1000);
