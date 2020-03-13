/* eslint-disable react/prop-types */
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

  reduce(prevState, action) {
    const t = action.type;
    if (t === 'increment') {
      const state = { ...prevState };
      state.number++;
      return state;
    }
    if (t === 'add') {
      return { number: prevState.number + action.n };
    }

    return prevState;
  }
}

const myStore = new MyStore();

function App(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onAdd.bind(props, 2)}>Add 2</button>
      {props.counter.number}
    </div>
  );
}

const RootContainer = Container.createFunctional(
  App,
  () => [myStore],
  () => {
    return {
      counter: myStore.getState(),
      onIncrement: () => {
        dispatcher.dispatch({
          type: 'increment',
        });
      },
      onAdd: n => {
        dispatcher.dispatch({
          type: 'add',
          n,
        });
      },
    };
  }
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<RootContainer />, document.getElementById('root'));
});

setInterval(() => {
  dispatcher.dispatch({
    type: 'add',
    n: -1,
  });
}, 2000);
