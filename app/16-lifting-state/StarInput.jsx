import React from 'react';
import ReactDOM from 'react-dom';

const imgDir = '../16-lifting-state/img';

export class StarInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: 3,
        };
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props) {
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
    }

    onClick(n, e) {
        e.preventDefault();
        const state = {
            note: n,
        };
        this.setState(state);
        if (this.props.onChange) {
            this.props.onChange(n);
        }
    }

    render() {
        const starList = [1, 2, 3, 4, 5].map(n => {
            let src = 'gray_star.png';
            if (!isNaN(this.state.note)) {
                if (n <= this.state.note) {
                    src = 'yellow_star.png';

                } else {
                    src = 'white_star.png';
                }
            }
            src = imgDir + '/' + src;
            return <img onClick={this.onClick.bind(this, n)} key={n} src={src} style={{ cursor: 'pointer' }} />;
        });

        return (
            <div>
                {starList}
            </div>
        )
    }
}


