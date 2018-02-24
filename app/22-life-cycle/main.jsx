import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor', this.props);
    }

    componentWillMount() {
        console.log('componentWillMount', this.props.id);
    }

    componentDidMount() {
        console.log('componentDidMount', this.props.id);
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount', this.props.id);
    }
    
    render() {
        console.log('render', this.props.id);
        return (<div >
            Hello {this.props.id}
        </div>);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded');
    let app = <div>
        <App id="1"/>
        <App id="2"/>
        <App id="3"/>
        <App id="4"/>
        <App id="5"/>
        <App id="6"/>
        </div>;
    await sleep(2000);
    ReactDOM.render(app, document.getElementById('root'));
    await sleep(2000);
    app = <div><App id="2"/></div>;
    ReactDOM.render(app, document.getElementById('root'));
});
