import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class ProgressiveWrite extends React.Component {
    constructor(props) {
        super(props);
        console.log('instantiate component');
        // state is a React API keyword.
        this.state = {
            length: 0
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
        console.log('tick');
        let length = this.state.length;
        length++;
        if (length > this.props.text.length) {
            length = 0;
        }
        this.setState({
            length: length
        });
    }

    // Called each time React think it is necessary.
    // For instance when the state change.
    // Or when the props change.
    render() {
        const result = <div className="hello">&nbsp;{this.props.text.substring(0, this.state.length)}</div>;
        console.log('result', result);
        return result;
    }

}

let name = "Jean-Louis";

// document.addEventListener('DOMContentLoaded', load);

window.load = function() {
    // the name value is a snapshot.
    ReactDOM.render(<ProgressiveWrite text={name} />, document.getElementById('root'));
}

window.unload = function() {
    ReactDOM.render(undefined, document.getElementById('root'));
}

window.setText = function() {
    name = 'Dany';
}

