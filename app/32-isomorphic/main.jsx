import '../css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';

console.log('react isomorphic');

const basename = '/app/32-isomorphic';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrate(<Layout basename={basename} />, document.getElementById('root'));
});
