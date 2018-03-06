import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
    }

    switch() {
        this.setState(prevState => {
            return { on: !prevState.on };
        });
    }

    onRef(...args) {
        console.log('onRef', args, this);
    }

    render() {
        console.log('render app');
        return (
            <div>
                <span ref={this.onRef.bind(this)} />
                <button onClick={this.switch.bind(this)}>{this.state.on ? 'Hide' : 'Show'}</button>
                {this.state.on ? <Hello ref={this.onRef.bind(this)} name="JL" /> : ''}
            </div>
        );
    }
}

class Hello extends React.Component {
    render() {
        return <span>Hello {this.props.name}!</span>;
    }
}

// const Hello = (props) => <span>Hello {props.name}!</span>;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
