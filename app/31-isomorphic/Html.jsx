/* eslint-disable react/prop-types */
import React from 'react';
import { Head } from './Head';
import { Layout } from './Layout';


export const Html = props => {
    
    console.log('html props', props);
    return (
  <html>
    <Head />
    <body>
      <div id='root'>
        <Layout basename={props.basename} location={props.url} context={{}} />
      </div>
    </body>
  </html>
)};
