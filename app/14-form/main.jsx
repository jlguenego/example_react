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
        // in order to not let the browser go to another page.
        event.preventDefault();
    }

    onLoginChange(event) {
        console.log('onLoginChange', event);
        this.setState({ login: event.target.value });
    }

    onPasswordChange(event) {
        console.log('onPasswordChange', event);
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Login:
                    <input name="login" onChange={this.onLoginChange.bind(this)} defaultValue={this.state.login} />
                    </label>
                    <label>Password:
                    <input name="login" type="password" onChange={this.onPasswordChange.bind(this)} />
                    </label>
                    <button>Submit</button>
                </form>
                <span style={{ fontWeight: 'bold'}}>{this.state.login}</span>
            </div>
        )
    }
}

const array = [1, 2, 3, 5, 8, 1];

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<LoginForm />, document.getElementById('root'));
});
