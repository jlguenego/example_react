import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class StarInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: 3
        };
        if (isNaN(+props.note)) {
            this.state.note = undefined;
        } else if (props.note > 5) {
            this.state.note = undefined;
        } else if (props.note < 0) {
            this.state.note = undefined;
        } else if (props.note) {
            this.state.note = props.note;
        }
    }

    // onSubmit(event) {
    //     console.log('onSubmit', this);
    //     // in order to not let the browser go to another page.
    //     event.preventDefault();
    // }

    // onChange(event) {
    //     console.log('onChange', event.target);
    //     const state = {};
    //     state[event.target.name] = event.target.value;
    //     this.setState(state);
    // }

    render() {
        const starList = [1, 2, 3, 4, 5].map(n => {
            if (this.state.note === undefined) {
                return <img key={n} src="img/gray_star.png" />
            }
            return (n <= this.state.note) ? <img key={n} src="img/yellow_star.png" /> : <img key={n} src="img/white_star.png" />;
        });

        return (
            <div>
                {starList}
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<div>
        <StarInput />
        <StarInput note="4" />
        <StarInput note="6" />
    </div>, document.getElementById('root'));
});
