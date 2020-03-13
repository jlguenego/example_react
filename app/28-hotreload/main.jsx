import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import MyComponent from './MyComponent';

const Main = () => <><MyComponent /><MyComponent /></>;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Main />, document.getElementById('root'));
});
