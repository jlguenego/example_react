import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

function List(props) {
    // try without the key attribute.
    const listItems = (props.array.map((n, i) => <li key={i} >{n}</li>));
    return <ul>{listItems}</ul>;
}

const array = [1,2,3,5,8];

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<List array={array} />, document.getElementById('root'));
});
