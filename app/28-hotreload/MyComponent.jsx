import React from 'react';
import { hot } from 'react-hot-loader';

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = { number: 10 };
    }

    increment() {
        this.setState(prevState => {
            const n = prevState.number + 1;
            return { number: n };
        });
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.number}
                </div>
                <button onClick={this.increment.bind(this)}>Incrementxx</button>
            </div>
        );
    }
}


export default hot(module)(MyComponent);