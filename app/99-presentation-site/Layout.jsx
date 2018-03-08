import React from 'react';
import { Link, NavLink, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import HomeView from './view/HomeView';
import ExampleView from './view/ExampleView';
import ServiceView from './view/ServiceView';
import ContactView from './view/ContactView';


const Header = () => {

    return (
        <header>
            <div className="site-id">
                <Link to="/" className="menu-item">
                    <span className="helper"></span>
                    <img className="logo" src="./img/logo.png" />
                </Link>
            </div>
            <menu>
                <NavLink to="/" exact className="menu-item">Home</NavLink>
                <NavLink to="/examples" className="menu-item">Examples</NavLink>
                <NavLink to="/services" className="menu-item">Services</NavLink>
                <NavLink to="/contact" className="menu-item">Contact</NavLink>
            </menu>
        </header>
    );
};


const Footer = () =>
    <footer>
        <p>Copyright © 2018 - TheReactFactory. website made by&nbsp;
            <Link to="https://jlg-consulting.com">JLG Consulting</Link>
            <span> @2001 - </span><span>{new Date().getFullYear()}</span>
            <span>.</span>
        </p>
    </footer>;


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
            <Route path="/examples" component={ExampleView} />
            <Route path="/services" component={ServiceView} />
            <Route path="/contact" component={ContactView} />
            <Footer />
        </React.Fragment>
    </Router >
);

export default Layout;
