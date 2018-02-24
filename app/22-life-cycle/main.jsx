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
    let app = <div><App id="1"/><App id="2"/></div>;
    await sleep(2000);
    ReactDOM.render(app, document.getElementById('root'));
    await sleep(2000);
    app = <div><App id="2"/></div>;
    ReactDOM.render(app, document.getElementById('root'));
});
