import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'kiki',
            password: '123',
        };
    }

    onSubmit(event) {
        console.log('onSubmit', this);
        event.preventDefault();
    }

    onLoginChange(event) {
        console.log('onLoginChange', event);
        this.setState({login: event.target.value});
    }

    onPasswordChange(event) {
        console.log('onPasswordChange', event);
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Login:
                    <input name="login" onInput={this.onLoginChange.bind(this)} defaultValue={this.state.login} />
                </label>
                <label>Password:
                    <input name="login" type="password" onInput={this.onPasswordChange.bind(this)} defaultValue={this.state.password} />
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
