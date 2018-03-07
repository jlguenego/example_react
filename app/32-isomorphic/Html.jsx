import React from 'react';
import Head from './Head';
import Layout from './Layout';

const Html = (props) => (
    <html>
        <Head basename={props.basename}/>
        <body>
            <Layout basename={props.basename} location={props.url} />
        </body>
    </html>
);

export default Html;

