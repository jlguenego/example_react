import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    handleClick(...args) {
        console.log('handleClick', args, this);
        this.setState({ message: 'Hello !!!' });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={::this.handleClick}>Click me!</button>
                <span>{this.state.message}</span>
            </React.Fragment>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
