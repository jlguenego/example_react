import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class StarInput extends React.Component {
    constructor(props) {
        console.log('StarInput constructor');
        super(props);
        this.state = {
            note: 3,
        };
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props) {
        console.log('new props', props)
        if (!'note' in props) {
            return;
        }
        if (isNaN(+props.note) ||
            +props.note > 5 ||
            +props.note < 0
        ) {
            this.state.note = undefined;
        } else {
            this.state.note = +props.note;
        }
        console.log('this.state', this.state);
    }

    onClick(n, e) {
        e.preventDefault();
        console.log('onClick', n, e, this);
        const state = {
            note: n,
        };
        this.setState(state);
        if (this.props.onChange) {
            this.props.onChange(n);
        }
    }

    render() {
        console.log('StarInput render', this.state);
        const starList = [1, 2, 3, 4, 5].map(n => {
            let src = 'img/gray_star.png';
            if (!isNaN(this.state.note)) {
                if (n <= this.state.note) {
                    src = 'img/yellow_star.png';

                } else {
                    src = 'img/white_star.png';
                }
            }
            return <img onClick={this.onClick.bind(this, n)} key={n} src={src} style={{ cursor: 'pointer' }} />;
        });

        return (
            <div>
                {starList}
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            appNote: 4
        };
    }
    onChange(n) {
        console.log('onChange', n, this);
        this.setState({ appNote: +n });
    }

    render() {
        console.log('app render', this.state);
        const result = (
            <div>
                <StarInput />
                <StarInput note={this.state.appNote} onChange={this.onChange.bind(this)} />
                <StarInput note={this.state.appNote} onChange={this.onChange.bind(this)} />
                {JSON.stringify(this.state)}
            </div>
        );
        console.log('result', result);
        return result;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
