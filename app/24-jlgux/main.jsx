import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { Container, StoreManager } from './jlgux';

import {Counter} from './business'



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Container />, document.getElementById('root'));
});
