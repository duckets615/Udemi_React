import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: ['one ','two ','three ']
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
  }
  handleDelete() {
    this.setState(() => {
      return {
      options: []
      }
    })
  }
  handleChoice() {
    let random = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[random]);

  }
  render() {
    return (
      <div>
      <Header title={this.state.title} subTitle={this.state.subtitle} />
      <Actions handleChoice={this.handleChoice}/>
      <Options options={this.state.options} />
      <AddOption handleDelete = {this.handleDelete} />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return(
      <div>
      <h1 className='title'>{this.props.title}</h1>
      <h3 className='subTitle'>{this.props.subtitle}</h3>
      </div>
    )
  }
}
class Actions extends React.Component{
  render() {
    return(
      <button className='bigButton grow btn' onClick={this.props.handleChoice}>What should I do?</button>
    )
  }
}

class Options extends React.Component {
  render() {
    return(

      <p>{this.props.options.map(option => <Option key={option} optionText={option} />)}</p>
 
    )}
}
class Option extends React.Component {
  render() {
    return(
      <p>Option: {this.props.optionText}</p>
    )
  }
}
class AddOption extends React.Component {
  render() {
    return(
      <div>
      <form>
        <input type='text' name='optAdd' placeholder='Input Option Here'/>
        <button className='button grow'>Add</button>
      </form>
        <button className='button grow' onClick={this.props.handleDelete}>Clear All</button>
      </div>      
    )
  }
}

ReactDOM.render(<Indecision />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();