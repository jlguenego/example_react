import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { StarInput } from '../16-lifting-state/StarInput.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            appNote: 4
        };
    }
    onChange(n) {
        this.setState({ appNote: +n });
    }

    render() {
        const result = (
            <div>
                Star without default note: <StarInput />
                Star with appNote = {this.state.appNote}: 
                <StarInput note={this.state.appNote} onChange={this.onChange.bind(this)} />
                Star with appNote = {this.state.appNote}: 
                <StarInput note={this.state.appNote} onChange={this.onChange.bind(this)} />
            </div>
        );
        return result;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
