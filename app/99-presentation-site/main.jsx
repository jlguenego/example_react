import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './css/reset.scss';
import './css/layout.scss';
import './css/grid.scss';
import './css/theme.scss';

import { Header } from './jlg-layout/Header';
import { Body } from './jlg-layout/Body';
import { Footer } from './jlg-layout/Footer';



function Main() {
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Main />, document.body);
});
