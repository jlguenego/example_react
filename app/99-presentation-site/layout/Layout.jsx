import React from 'react';
import { Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import HomeView from '../view/HomeView';
import ExampleView from '../view/ExampleView';
import ServiceView from '../view/ServiceView';
import ContactView from '../view/ContactView';

import Header from './Header';
import Footer from './Footer';



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
            <Header {...props}/>
            <Route exact path="/" component={HomeView} />
            <Route path="/examples" component={ExampleView} />
            <Route path="/services" component={ServiceView} />
            <Route path="/contact" component={ContactView} />
            <Footer />
        </React.Fragment>
    </Router >
);

export default Layout;
