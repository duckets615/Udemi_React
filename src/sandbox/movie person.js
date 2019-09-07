import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function test() {
    console.log(this)
}


const title = 'Indecision App'
const subTitle = 'Put your life in the hands of a computer'
const options = ['one', ' two', ' three'];

class IndecisionApp extends React.Component {
    render() {
        return(
            <div>
            <Header Title={title} subTitle={subTitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
        <div className='header'>
        <h1 className='title'>{this.props.Title}</h1>
        <h3 className='subtitle'>{this.props.subTitle}</h3>
        </div>
        )
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this)
    }
    handlePick() {
        alert('this button is working')
    }
    render() {
        return (
            <button className='bigButton' onClick={this.handlePick}>What Should I do?</button>
        )
    }
}
class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        alert('Remove all is working')
    }
    render() {
        return (
    <div>
    <button className='button' onClick={this.handleRemoveAll}>Remove All</button>
    {
        this.props.options.map((opt,i) => <Option key={opt} optionText={opt}/>)   
    }         
    </div>
        )}
} 
class Option extends React.Component {
    render() {
        return (
            <div>
            {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const opt = e.target.elements.optionInput.value.trim();
        if (opt) alert('option detected and submitted')
        e.target.elements.optionInput.value = '';
    }
    render() {
        return (
                <form className='form' onSubmit={this.handleSubmit}>
                    <input type='text' name='optionInput' placeholder='Enter Option Here'/>
                    <button className='button'>Add Option</button>
                </form>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
