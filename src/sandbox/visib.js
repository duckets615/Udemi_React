import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleVis = this.handleVis.bind(this);
        this.state = {
            visibility: false,
        };
    }
    handleVis() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVis}>{this.state.visibility ? `Hide Details` : `Show Details`}</button>
                {this.state.visibility ? <p>Details you can now see</p> : null}
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.getElementById('root'));


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();