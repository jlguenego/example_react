import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { StoreManager, createContainer } from './jlgux';

import {Counter} from './business';

function App(props) {
    return (<div>
        <button onClick={props.increment.bind(props)}>Increment</button>
        {props.store.number}
    </div>);
}

const Container = createContainer(App, new Counter(), ['increment']);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Container />, document.getElementById('root'));
});
