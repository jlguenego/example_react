import React from 'react';

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = { number: 10 };
    }

    increment() {
        this.setState(prevState => {
            const n = prevState.number + 2;
            return { number: n };
        });
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.number}
                </div>
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
}


export default MyComponent;