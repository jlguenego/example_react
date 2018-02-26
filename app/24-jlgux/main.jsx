import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { StoreManager, createContainer } from './jlgux';

import {Counter} from './business';

function App(props) {
    return (<div>
        <button onClick={props.increment.bind(props)}>Increment</button>
        <button onClick={props.add.bind(props, 2)}>add 2</button>
        {props.getNumber()}
    </div>);
}

// declare the business
const storeManager = new StoreManager(new Counter(), ['increment', 'add'], ['getNumber']);

// declare the container for react.
const Container = createContainer(App, storeManager);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Container />, document.getElementById('root'));
});

setInterval(() => {
    storeManager.add(-1);
}, 1000);
