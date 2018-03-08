import React from 'react';

const Footer = () =>
    <footer>
        <p>Copyright © 2018 - TheReactFactory. website made by&nbsp;
            <a href="https://jlg-consulting.com">JLG Consulting</a>
            <span> @2001 - </span><span>{new Date().getFullYear()}</span>
            <span>.</span>
        </p>
    </footer>;

export default Footer;