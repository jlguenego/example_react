import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import '../css/style.scss';

function Card(props) {
  return (
    <div>
      <img style={{ width: '100px' }} src='/app/img/react.svg' />
      <figcaption>{props.label}</figcaption>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
};

function click(e) {
  console.log('click!', e.target, e.currentTarget.children);
  const index = Array.prototype.indexOf.call(
    e.currentTarget.children,
    e.target.closest('div')
  );
  console.log('index', index);
}

const App = () => (
  <div onClick={click}>
    <Card label='React 1' />
    <Card label='React 2' />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
