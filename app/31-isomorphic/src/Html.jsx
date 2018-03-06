import React from 'react';
import { StaticRouter as Router, Route, Link } from 'react-router-dom';

import HomeView from './HomeView';
import AboutView from './AboutView';

const Head = () => (
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Isomorphic App</title>
    </head>
);

const Header = () => <header>
    <menu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </menu>
</header>;

const Footer = () => <footer>JLG Consulting @2001 - {new Date().getFullYear()}</footer>;

const Root = (props) => (
    <Router location={props.req.url}>
        <React.Fragment>
            <Header />
            <Route exact path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Footer />
        </React.Fragment>
    </Router >
);

const Html = (props) => (
    <html>
        <Head />
        <body><Root {...props}/></body>
    </html>
);

export default Html;

