import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 3,
            comment: 'This is a comment',
        };
    }

    onSubmit(event) {
        console.log('onSubmit', this);
        // in order to not let the browser go to another page.
        event.preventDefault();
    }

    onChange(event) {
        console.log('onChange', event.target);
        const state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    render() {
        const list = [1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>);
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label><span>Level:</span>
                        <select name="level" onChange={this.onChange.bind(this)} value={this.state.level}>
                            {list}
                        </select>
                    </label>
                    <label><span>Comment:</span>
                        <textarea name="comment" type="password" onChange={this.onChange.bind(this)} value={this.state.comment} />
                    </label>
                    <label><span>&nbsp;</span><button>Submit</button></label>
                    
                </form>
                <span>{JSON.stringify(this.state)}</span>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<MyForm />, document.getElementById('root'));
});
