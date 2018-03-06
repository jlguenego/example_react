import React from 'react';

import StarInput from '../16-lifting-state/StarInput';
import { Frame } from './Frame';

import PropTypes from 'prop-types';

export function Movie(props) {
    return (
        <Frame>
            {props.title} - {props.year} <StarInput note={props.note} />
        </Frame>
    );
}

// use propType to check the properties used for the component.

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    note: PropTypes.number,
};

