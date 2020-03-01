import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleClick(...args) {
    console.log('handleClick', args, this);
    this.setState({ message: 'Hello !!!' });
  }

  render() {
    // <> is <React.Fragment> in short syntax.
    // :: is bind syntax (TC39 bind operator)
    // But apparently in 2020, this :: operator is not part of JS syntax.
    return (
      <>
        <button onClick={::this.handleClick}>Click me!</button>
        <span>{this.state.message}</span>
      </>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
