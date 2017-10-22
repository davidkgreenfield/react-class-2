import React, { Component } from 'react';

export default class Banner extends Component{
  
  constructor(props){
    super(props)
  }

  render(){
    return <h1>{this.props.banner}</h1>
  }

}
