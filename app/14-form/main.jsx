import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'kiki',
            password: '',
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
                    <label><span>Login:</span>
                    <input name="login" onChange={this.onLoginChange.bind(this)} defaultValue={this.state.login} />
                    </label>
                    <label><span>Password:</span>
                    <input name="password" type="password" onChange={this.onPasswordChange.bind(this)} defaultValue={this.state.password} />
                    </label>
                    <label><span>&nbsp;</span><button>Submit</button></label>
                </form>
                <span style={{ fontWeight: 'bold'}}>{JSON.stringify(this.state)}</span>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<LoginForm />, document.getElementById('root'));
});
