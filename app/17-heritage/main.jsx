import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { Star2Input } from './Star2Input.jsx';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            appNote: 4,
            total: 10,
        };
    }
    onChange(n) {
        this.setState({ appNote: +n });
    }

    render() {
        const result = (
            <div>
                Star without default note: <Star2Input total={this.state.total}/>
                Star with appNote = {this.state.appNote}: 
                <Star2Input note={this.state.appNote} total={this.state.total} onChange={this.onChange.bind(this)} />
                Star with appNote = {this.state.appNote}: 
                <Star2Input note={this.state.appNote} total={this.state.total} onChange={this.onChange.bind(this)} />
            </div>
        );
        return result;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
