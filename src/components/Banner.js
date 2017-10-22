import React, { Component } from 'react';

export default class Banner extends Component{
  
  constructor(props){
    super(props)
    console.log("Banner.constructor")
  }

  componentWillMount(){
    console.log("Banner.componentWillMount")
  }

  render(){
    console.log("Banner.render")
    return <h1>{this.props.banner}</h1>
  }

  componentDidMount(){
    console.log("Banner.componentDidMount")
  }
}
