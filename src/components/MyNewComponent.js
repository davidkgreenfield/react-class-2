/**
 * Created by dbgreenfield on 10/16/17.
 */
import React, { Component } from 'react';
import Banner from './Banner'

export default class MyNewComponent extends Component {

    constructor(props){
        super(props)
        this.fieldchange = this.fieldChange.bind(this)
        this.state = {"fieldValue": this.props.initValue,"banner":""}
        this.onclick = this.onClick.bind(this)
    }

    fieldChange(event){
        this.setState({"fieldValue": event.target.value})
    }

    onClick(event){
        this.setState({banner:this.state.fieldValue})
    }

    render(){
        
        return <div>

            <Banner banner={this.state.banner}/>
            <input onChange={this.fieldchange}/>
            {' '}<button onClick={this.onclick}>click to change banner</button>
            <p>{this.state.fieldValue}</p>


        </div>
    }
}
