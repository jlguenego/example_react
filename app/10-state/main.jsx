import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.css';


//ES5 way to run react component.
function Hello(props) {
    return <div className="hello">Hello {props.name}</div>;
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Hello name="Jean-Louis" />, document.getElementById('root'));
});

