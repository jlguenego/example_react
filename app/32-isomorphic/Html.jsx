import React from 'react';
import Head from './Head';
import Layout from './Layout';

const Html = (props) => (
    <html>
        <Head />
        <body>
            <div id="root">
                <Layout basename={props.basename} location={props.url} />
            </div>

        </body>
    </html>
);

export default Html;

