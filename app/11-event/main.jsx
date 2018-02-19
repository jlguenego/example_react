import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.init === 'on',
        };
        // Must be done explicitely when using this method as an event.
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log('handleClick', this);
        this.setState((prevState, props) => ({
            on: !prevState.on
        }));
    }

    render() {
        const label = this.state.on ? "ON" : "OFF";
        return <button onClick={this.handleClick}>{label}</button>;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Switch init="on" />, document.getElementById('root'));
});
