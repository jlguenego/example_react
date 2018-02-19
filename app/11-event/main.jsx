import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.init === 'on',
        };
        // Method used for event MUST BE BOUND EXPLICITELY to this.
        // 3 ways to do it: A1 A2 A3
        // A1: call the method bind(this)
        // this.handleClick = this.handleClick.bind(this);
    }

    // A2: use the property class JS ESNext notation (needs Babel plugin)
    // handleClick = () => {
    handleClick() {
        console.log('handleClick', this);
        this.setState((prevState, props) => ({
            on: !prevState.on
        }));
    }

    render() {
        const label = this.state.on ? "ON" : "OFF";
        // return <button onClick={this.handleClick}>{label}</button>;
        // A3: use an arrow function here (my prefered)
        return <button onClick={(e) => this.handleClick()}>{label}</button>;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Switch init="on" />, document.getElementById('root'));
});
