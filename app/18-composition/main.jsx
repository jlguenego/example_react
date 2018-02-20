import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.scss';

import { Movie } from './Movie.jsx';



class App extends React.Component {

    onChange(n) {
        this.setState({ appNote: +n });
    }

    render() {
        return (
            <div>
                <Movie title="Star wars" year="2017" note="3" />
                <Movie title="The Avengers" year="2015" note="2" />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
