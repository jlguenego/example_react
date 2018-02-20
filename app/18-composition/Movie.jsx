import React from 'react';
import ReactDOM from 'react-dom';

import { StarInput } from '../16-lifting-state/StarInput';
import { Frame } from './Frame';

import PropTypes from 'prop-types';

export function Movie(props) {
    return (
        <Frame>
            {props.title} - {props.year} <StarInput note={props.note} />
        </Frame>
    )
}

Movie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    note: PropTypes.number,
};

