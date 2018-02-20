import React from 'react';
import ReactDOM from 'react-dom';

import { StarInput } from '../16-lifting-state/StarInput';

const imgDir = '../16-lifting-state/img';

export class Star2Input extends StarInput {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        if (!'note' in props) {
            return;
        }
        if (isNaN(+props.note) ||
            +props.note > props.total ||
            +props.note < 0
        ) {
            this.state.note = undefined;
        } else {
            this.state.note = +props.note;
        }
    }

    render() {
        const array =Array.apply(null, {length: this.props.total});
        console.log('array', array);
        const array2 = array.map((n,i)=> i+1);
        console.log('array2', array2);
        const starList = array2.map(n => {
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


