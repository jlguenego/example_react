import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import '../css/style.scss';

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

class App extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    console.log('constructor', this.props);
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.id);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props.id);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props);
  }

  render() {
    console.log('render', this.props.id);
    return <div>Hello {this.props.id}</div>;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded');
  let app = (
    <div>
      <App id='1' />
      <App id='2' />
      <App id='3' />
      <App id='4' />
      <App id='5' />
      <App id='6' />
    </div>
  );
  await sleep(2000);
  ReactDOM.render(app, document.getElementById('root'));
  await sleep(2000);
  app = (
    <div>
      <App id='2' />
    </div>
  );
  ReactDOM.render(app, document.getElementById('root'));
});
