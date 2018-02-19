import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        console.log('onSubmit', this);
        event.preventDefault();
    }

    onLoginInput() {
        console.log('onLoginInput');
    }

    onPasswordInput() {
        console.log('onPasswordInput');
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Login:
                    <input name="login" onInput={this.onLoginInput.bind(this)} />
                </label>
                <label>Password:
                    <input name="login" type="password" onInput={this.onPasswordInput.bind(this)} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

const array = [1, 2, 3, 5, 8, 1];

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<LoginForm />, document.getElementById('root'));
});
