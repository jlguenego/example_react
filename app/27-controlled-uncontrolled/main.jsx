import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

class Controlled extends React.Component {
    constructor() {
        super();
        this.state = { text: 'Hello' };
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    render() {
        return (<div className="box">
            <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} /><br />
            <p>{JSON.stringify(this.state)}</p>
        </div>);
    }
}

class Uncontrolled extends React.Component {
    constructor() {
        super();
        this.state = { text: 'Hello' };
    }

    onClick(e) {
        console.log('onClick');
        this.setState({ text: this.input.value });
    }

    render() {
        const ref = (n) => {
            this.input = n;
            if (this.input) {
                this.input.value = this.state.text;
            }
        };
        return (<div className="box">
            <input type="text" ref={ref} /><br />
            <button onClick={e => this.onClick.bind(this)(e)}>Submit</button><br />
            <p>{JSON.stringify(this.state)}</p>
        </div>);
    }
}

// const Uncontrolled = () => {
//     let input;
//     let value = 'Hello';
//     const ref = (n) => {
//         input = n;
//         if (input) {
//             input.value = 'Hello';
//         }
//     };
//     const onClick = () => {

//     };

//     return (<div>
//         <input type="text" ref={ref} /><br/>
//         <button onClick={onClick}>Submit</button><br/>
//         {value}
//     </div>);
// };

const Main = () => <React.Fragment><Controlled /><Uncontrolled /></React.Fragment>;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Main />, document.getElementById('root'));
});
