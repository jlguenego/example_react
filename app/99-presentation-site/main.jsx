import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './css/reset.scss';
import './css/layout.scss';
import './css/grid.scss';
import './css/theme.scss';
import './css/photo-gallery.scss';
import './css/table.scss';

import Layout from './layout/Layout';

const basename = BASENAME;

function isMobile() {
    return window.innerWidth < 768;
}

function render() {
    console.log('render', isMobile());
    // Note: here you may have a warning because the isMobile can be true.
    // Todo: rewrite this with react-responsive. (>2500 github stars)
    ReactDOM.hydrate(<Layout basename={basename} isMobile={isMobile()}/>, document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render);
window.addEventListener('resize', render);
