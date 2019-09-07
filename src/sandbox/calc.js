import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';




class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 1,
            digitOne: 0,
            digitTwo: 0,
            operation: null
        }
    }
    add = () => {
        this.setState((prevState) => {
            return {
                operation: 'addition'
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Calculator app</h1>
            <DisplayInput />
            <Buttons />
            <Result />
            </div>
        )
    }
}
class Buttons extends React.Component {
    render() {
        return (
            <div>
            <button className='button'>+ Add</button>
            <button className='button'>- Subtract</button>
            <button className='button'>/ Divide</button>
            <button className='button'> * Multiply</button>
            </div>
        )
    }
}

class DisplayInput extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name='num1' placeholder='First Digit'/>
                <input type='text' name='num2' placeholder='Second Digit'/>
            </form>
        )
    }
}
class Result extends React.Component {
    render() {
        return (
            <div className='bottom'>
            <p>{this.state.result}</p>
            <button className='BigCalcClear'>Clear</button>
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

