import React from 'react';
import ReactDOM from 'react-dom';

import HomeView from './HomeView';

import '../css/style.scss';

const Header = () => <header>
    <menu>
        <a href="#">Home</a>
        <a href="#">About</a>
    </menu>
</header>;

const Footer = () => <footer>
    <p>
        Jean-Louis GUENEGO - JLG Consulting @2001-{new Date().getFullYear()}
    </p>
</footer>;

// const AboutView = () => <main>
//     What about React ? <a href="http://reactjs.org">please check their website</a>.
// </main>;

const Root = () => {
    return (<React.Fragment>
        <Header/>
        <HomeView/>
        <Footer/>
        </React.Fragment>);
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
});
