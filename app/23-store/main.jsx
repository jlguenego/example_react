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
        this.state = {};
    }

    increment() {
        this.props.store.incrementNumber();
        this.setState({});
    }

    render() {
        console.log('render');
        return (<div>
            <button onClick={this.increment.bind(this)}>Increment</button>
            {this.props.store.number}
        </div>);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const store = new Store();
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
});
