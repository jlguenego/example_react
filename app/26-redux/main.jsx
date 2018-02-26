import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import '../css/style.scss';

// 1) define the actions types
const actionType = {
    INCREMENT: 'increment',
    ADD: 'add',
};

// 2) define the action creators
function increment() {
    return {
        type: actionType.INCREMENT,
    };
}

function add(n) {
    return {
        type: actionType.ADD,
        n
    };
}

// 3) define the initial state
const initialState = {
    number: 10,
};

// 4) define the reducers
function incrementReducer(previousState, action) {
    const newState = { ...previousState };
    return newState.number++;
}

function addReducer(previousState, action) {
    const newState = { ...previousState };
    return newState.number += action.n;
}

function reducer(previousState = initialState, action) {

    switch (action.type) {
        case actionType.INCREMENT:
            return incrementReducer(previousState, action);
        case actionType.ADD:
            return addReducer(previousState, action);
        default:
            return previousState;
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
