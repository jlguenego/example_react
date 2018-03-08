import React from 'react';
import Head from './Head';
import Layout from './layout/Layout';

const Html = (props) => (
    <html>
        <Head basename={props.basename} />
        <body>
            <div id="root">
                <Layout basename={props.basename} location={props.url} />
            </div>

        </body>
    </html>
);

export default Html;

