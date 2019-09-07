import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleSubtractOne = this.handleSubtractOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handleAddOne = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        handleSubtractOne = () => {
            this.setState((prevState) => {
                return {
                count: prevState.count - 1
                }
            })
        }
        handleReset = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count = 0
                }
            })
        }

    render() {
        return (
         <div>
            <h1>Count: {this.state.count} </h1>
            <button class='button' onClick={this.handleAddOne}>Add 1</button>
            <button class='button' onClick={this.handleSubtractOne}>Subtract 1</button>
            <button class='button' onClick={this.handleReset}>Reset</button>
        </div>
        )
    }
}

ReactDOM.render(<CounterApp />, document.getElementById('root'));


// let count = 0
// const add = () => {count++; renderApp()}
// const minus = () => {count--; renderApp()}
// const reset = () => {count = 0; renderApp()}

// let renderApp = () => {
// let counter = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button class='button'onClick={add}>Add 1</button>
//         <button class='button'onClick={minus}>Subtract 1</button>
//         <button class='button'onClick={reset}>Reset</button>
//     </div>
//     ) 
//     ReactDOM.render(counter, document.getElementById('root'));
// }

// renderApp();  

// class CounterApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this)
//         this.handleSubtractOne = this.handleSubtractOne.bind(this)
//         this.handleReset = this.handleReset.bind(this)
//         this.state = {
//             count: 0
//         }
//     }
//     handleAddOne = () => {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
//     handleSubtractOne = () => {
//         this.setState((prevState) => {
//             return {
//             count: prevState.count - 1
//             }
//         })
//     }
//     handleReset = () => {
//         this.setState(() => {
//             return {
//                 count:0
//             }
//         })
//     }
//     render() {
//         return (
//          <div>
//             <h1>Count: {this.state.count} </h1>
//             <button class='button' onClick={this.handleAddOne}>Add 1</button>
//             <button class='button' onClick={this.handleSubtractOne}>Subtract 1</button>
//             <button class='button' onClick={this.handleReset}>Reset</button>
//         </div>
//         )
//     }
// }

// ReactDOM.render(<CounterApp />, document.getElementById('root'));


// ReactDOM.render(template, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

