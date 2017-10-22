import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {"initValue":"hello there"}
  }

  render() {
    console.log("rendering " + this.state.initValue) 
    return (
      <div className="App">
        <MyNewComponent initValue={this.state.initValue}/>
      </div>
    );
  }
}

export default App;
