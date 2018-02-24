import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class Store {
    constructor() {
        this.number = 10;
    }
    incrementNumber() {
        console.log('increment', this.number);
        this.number++;
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { store: this.props.store };
    }

    increment() {
        this.props.store.incrementNumber();
        this.setState({ store: this.props.store });
    }
    
    render() {
        console.log('render');
        return (<div>
            <button onClick={this.increment.bind(this)}>Increment</button>
            {JSON.stringify(this.state.store)}
        </div>);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const store = new Store();
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
});
