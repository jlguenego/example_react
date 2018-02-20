import React from 'react';
import ReactDOM from 'react-dom';

import { StarInput } from '../16-lifting-state/StarInput';

const imgDir = '../16-lifting-state/img';

export function Movie(props) {
    return (
        <div style={{ border: '1px solid black' }}>
            {props.title} - {props.year} <StarInput note={props.note} />
        </div>
    )
}

