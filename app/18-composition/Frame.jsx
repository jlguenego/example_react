/* eslint-disable react/prop-types */
import React from 'react';

// Look at the special props.children property.

export function Frame(props) {
  return (
    <div
      style={{
        border: '0.1em solid red',
        margin: '0.5em',
      }}
    >
      {props.children}
    </div>
  );
}
