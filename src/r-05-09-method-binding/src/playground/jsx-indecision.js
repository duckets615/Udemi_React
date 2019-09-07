import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleChoice = this.handleChoice.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['one',' two',' three'],
            title: 'Indecision App',
            subTitle: 'Put your life in the hands of a computer'
        }
    }
    handleChoice() {
      const random = Math.floor(Math.random() * this.state.options.length)
      return alert(this.state.options[random])
    }
    handleRemoveAll(e){
      e.preventDefault()
     this.setState(() => {
        return {
          options: []
        };
      });
    };
    handleAddOption(option) {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }


    render() {
        return (
            <div>
            <Header title={this.state.title} subTitle={this.state.subTitle} />
            <Actions handleChoice={this.handleChoice} />
            <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
            <AddOption options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}
class Actions extends React.Component {
  render() {
    return (
      <button className="bigButton" onClick={this.props.handleChoice}>What should you do?</button>
    )
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
      {this.props.options.map((option,i) => <Option key={i} optiontext={option} />)}
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return (
        <div>
          {this.props.optiontext}
        </div>
    )
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this)
  }
  handleAddOption(e) {
    e.preventDefault(e);
    const option = e.target.elements.optionForm.value.trim();
    if (option) {
      this.props.handleAddOption(option)
    }
  }
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleAddOption}>
        <input type='text' name='optionForm' placeholder='Input option here' />
        <button className='button'>Add Option</button>
      </form>
          <button className='button' onClick={this.props.handleRemoveAll}>clear all</button>
        </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
