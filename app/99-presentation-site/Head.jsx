import React from 'react';

const Head = (props) => (
    <head>
        <base href={props.basename + '/'} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TheReactFactory</title>
        <script src="wpk/bundle.js" />
        <link rel="stylesheet" href="wpk/bundle.css" />
    </head>
);

export default Head;