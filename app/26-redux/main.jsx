import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

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
function incrementReducer(previousState) {
    const newState = { ...previousState };
    newState.number++;
    return newState;
}

function addReducer(previousState, action) {
    const newState = { ...previousState };
    newState.number += action.n;
    return newState;
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

// 5) create the store
let store = createStore(reducer, initialState);

// Log the initial state
console.log('initial state', store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log('current state', store.getState())
);

store.dispatch(increment());
store.dispatch(add(2));

// stop listening the actions.
unsubscribe();

// 6) define the presentational components.

function App(props) {
    let input;
    let value = -1;
    const ref = n => {
        input = n;
        if (input) {
            input.value = value;
        }
    };
    return (<div>
        <h2>Value of counter: {props.number}</h2>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.add.bind(undefined, 2)}>Add 2</button>
        <br />
        <input ref={ref} type="number" />
        <br />
        <button onClick={() => { props.add(+input.value); }}>Add input</button>

    </div>);
}

// 7) use react-redux to create a container component.
const mapStateToProps = state => ({ number: state.number });
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    add: (n) => dispatch(add(n)),
});


const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// 8) Render with the store.

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Provider store={store}>
        <Container />
    </Provider>, document.getElementById('root'));
});
