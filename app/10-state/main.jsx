import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class ProgressiveWrite extends React.Component {
    constructor(props) {
        super(props);
        console.log('instantiate component');
        this.state = {
            length: 0,
            hue: 240,
        };
    }

    // called when the component is attached to the DOM.
    componentDidMount() {
        console.log('mount component');
        this.timerID = setInterval(
            () => this.tick(),
            300
        );
    }

    // called when the component is detached from the DOM.
    componentWillUnmount() {
        console.log('unmount component');
        clearInterval(this.timerID);
    }

    tick() {
        // never access to this.state !
        this.setState((prevState, props) => {
            let length = prevState.length;
            length++;
            if (length > props.text.length) {
                length = 0;
            }
            return {
                length: length
            };
        });
    }

    // Called each time React think it is necessary.
    // For instance when the state change.
    // Or when the props change.
    render() {
        // style must be an object (JSX).
        const style = { color: `hsl(${this.state.hue}, 100%, 50%)` };
        const result = <div className="hello" style={style}>&nbsp;{this.props.text.substring(0, this.state.length)}</div>;
        return result;
    }

}

let name = 'Jean-Louis';

// document.addEventListener('DOMContentLoaded', load);

window.load = function () {
    // the name value is a snapshot.
    ReactDOM.render(<ProgressiveWrite text={name} />, document.getElementById('root'));
};

window.unload = function () {
    ReactDOM.render(undefined, document.getElementById('root'));
};

window.setText = function () {
    name = 'Dany';
};

