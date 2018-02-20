import React from 'react';
import ReactDOM from 'react-dom';

// Look at the special props.children property.

export function Frame(props) {
    return (
        <div style={{ border: '1px solid black' }}>
            {props.children}
        </div>
    )
}

