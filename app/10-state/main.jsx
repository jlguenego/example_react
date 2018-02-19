import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class ProgressiveWrite extends React.Component {
    constructor(props) {
        super(props);
        console.log('instantiate component');
        this.state = {
            length: 0
        };
    }

    componentDidMount() {
        console.log('mount component');
        this.timerID = setInterval(
            () => this.tick(),
            300
        );
    }

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

    render() {
        const result = <div className="hello">&nbsp;{this.props.text.substring(0, this.state.length)}</div>;
        console.log('result', result);
        return result;
    }

}

const name = "Jean-Louis";

// document.addEventListener('DOMContentLoaded', load);

window.load = function() {
    ReactDOM.render(<ProgressiveWrite text={name} />, document.getElementById('root'));
}

window.unload = function() {
    ReactDOM.render(undefined, document.getElementById('root'));
}

