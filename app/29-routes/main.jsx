import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomeView from './HomeView';
import AboutView from './AboutView';

import '../css/style.scss';

const Header = () => <header>
    <menu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </menu>
</header>;

const Footer = () => <footer>
    <p>
        Jean-Louis GUENEGO - JLG Consulting @2001-{new Date().getFullYear()}
    </p>
</footer>;

const Root = () => (
    <Router basename="/app/29-routes/">
        <React.Fragment>
            <Header />
            <Route exact path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Footer />
        </React.Fragment>
    </Router >
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
});
