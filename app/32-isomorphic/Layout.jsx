import React from 'react';
import { Link, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import HomeView from './HomeView';
import AboutView from './AboutView';

const Header = () => <header>
    <menu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </menu>
</header>;


const Footer = () => <footer>JLG Consulting @2001 - <span>{new Date().getFullYear()}</span></footer>;


function isServer() {
    return !(typeof window != 'undefined' && window.document);
}

let Router = BrowserRouter;
if (isServer()) {
    Router = StaticRouter;
}
const Layout = (props) => (
    <Router {...props}>
        <React.Fragment>
            <Header />
            <Route exact path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Footer />
        </React.Fragment>
    </Router >
);

export default Layout;
