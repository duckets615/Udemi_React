import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            options: ['one ', 'two ', 'three '],
            // title: 'Indecision App',
            // subTitle: 'Put your life in the hands of a computer',
            choice: ''
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleRemove() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleChoice() {
        const random = Math.floor(Math.random() * this.state.options.length)  
        console.log(random)      
        this.setState(() => {
            return {
                choice: this.state.options[random]
            }
        })
    }
    handleAdd(opt) {
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(opt)
            }
        })
    }
    render() {
        return (
            <div>
            <Header />
            <Actions 
                handleRemove={this.handleRemove} 
                handleChoice={this.handleChoice} 
                choice={this.state.choice}/>
            <Options options={this.state.options} />
            <AddOption handleAdd={this.handleAdd}/>
            </div>
        )
    }
}
const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
}
const Actions = props => {
    return (
        <div>
        <button className='bigButton' onClick={props.handleChoice}>What should I do?</button>
        <button className='button' onClick={props.handleRemove}>Clear All</button>
        <h2>Chosen option: {props.choice}</h2>
        </div>
    )
}
const Options = props => {
    return (
        <div>
        {
            props.options.map(option => <Option key={option} optionText={option} />)
        }
        </div>
    )
}
const Option = props => {
    return (
        <div>
            Option: {props.optionText}
        </div>
    )
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.getInput = this.getInput.bind(this)
    }
    getInput(e) {
        e.preventDefault();
        const opt = e.target.elements.optAdd.value
        this.props.handleAdd(opt)
        e.target.elements.optAdd.value = '';
    } 
    render() {
        return (
            <form onSubmit={this.getInput}>
                <input type='text' name='optAdd' placeholder='Input option here' />
                <button className='button'>Add</button>
            </form>
        )
    }
}

ReactDOM.render(<Indecision />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// handleAddOption(option) {
//     if (!option) {
//       return 'Enter valid value to add item';
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option already exists';
//     }

//     this.setState((prevState) => {
//       return {
//         options: prevState.options.concat(option)
//       };
//     });
//   }

