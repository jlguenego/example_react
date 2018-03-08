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

import Layout from './Layout';

const basename = BASENAME;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Layout basename={basename} />, document.getElementById('root'));
});
