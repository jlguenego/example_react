
// React functional component.
function Hello1(props) {
    return <div className="hello">Hello {props.name}</div>;
}

// React functional component (arrow notation).
const Hello1a = (props) => <div className="hello">Hello hello {props.name}</div>;

ReactDOM.render(<Hello1 name="Jean-Louis" />, document.getElementById('root'));

// React class component.
class Hello2 extends React.Component {

    render() {
        return <div className="hello">Hello dear {this.props.name}</div>;
    }
}

ReactDOM.render(<Hello2 name="Dany" />, document.getElementById('other-root'));


// A component can call other components.
function MyComponent() {
    return (<div>
        <Hello1 name="Alice" />
        <Hello1a name="Anna" />
        <Hello2 name="Bob" />
    </div>);
}

ReactDOM.render(<MyComponent />, document.getElementById('root3'));