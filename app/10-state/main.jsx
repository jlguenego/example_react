import React from 'react';
import ReactDOM from 'react-dom';


//ES5 way to run react component.
function Hello(props) {
    return <div className="hello">Hello {props.name}</div>;
}

ReactDOM.render(<Hello name="Jean-Louis" />, document.getElementById('root'));

//ES6 way to run react component.
class HelloAgain extends React.Component {

    render() {
        return <div className="hello">Hello again {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloAgain name="Dany" />, document.getElementById('other-root'));


//A component can call other components.
function MyConponent(props) {
    return (<div>
        <Hello name="Alice" />
        <Hello name="Bob" />
    </div>);
}

ReactDOM.render(<MyConponent />, document.getElementById('root3'));