import React from 'react';
import ReactDOM from 'react-dom';

import { Dispatcher } from 'flux';
import { Container, ReduceStore } from 'flux/utils';

import '../css/style.scss';

const dispatcher = new Dispatcher();

class MyStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return { number: 10 };
    }

    reduce(state, action) {
        switch (action.type) {
            case 'increment':
                // it is required to send a brand new state. Not the existing one.
                // we call that an immutable object.
                state.number++;
                return { ...state };
            case 'add':
                return { number: state.number + action.n };

            default:
                return state;
        }
    }
}

const myStore = new MyStore();

function App(props) {
    return (<div>
        <button onClick={props.onIncrement}>Increment</button>
        <button onClick={props.onAdd.bind(props, 2)}>Add 2</button>
        {props.counter.number}
    </div>);
}

const RootContainer = Container.createFunctional(App, () => [myStore], () => {
    return {
        counter: myStore.getState(),
        onIncrement: () => {
            dispatcher.dispatch({
                type: 'increment',
            });
        },
        onAdd: (n) => {
            dispatcher.dispatch({
                type: 'add',
                n
            });
        },
    };
});

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<RootContainer />, document.getElementById('root'));
});

setInterval(() => {
    dispatcher.dispatch({
        type: 'add',
        n: -1
    });
}, 5000);
