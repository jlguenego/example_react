import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.init === 'on',
        };
    }

    onClick() {
        this.setState((prevState, props) => ({
            on: !prevState.on
        }));
    }

    render() {
        // return <button onClick={(e) => this.onClick()}>{this.state.on ? "ON" : "OFF"}</button>;
        return ((this.state.on) ?
            <button onClick={(e) => this.onClick()}>ON</button> : 
            <button onClick={(e) => this.onClick()}>OFF</button>);
        
    }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Switch init="on" />, document.getElementById('root'));
});
