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
                return { number: state.number + 1 };

            default:
                return state;
        }
    }
}

const myStore = new MyStore();

function App(props) {
    return (<div>
        <button onClick={props.onIncrement}>Increment</button>
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
    }
});

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<RootContainer />, document.getElementById('root'));
});
