/**
 * Created by dbgreenfield on 10/16/17.
 */
import React, {Component} from 'react';
import Banner from './Banner'
import {getBandInfo} from './api'

export default class MyNewComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {banner: ""}
        this.fieldchange = this.fieldChange.bind(this)
        this.onclick = this.onClick.bind(this)
        this.handlekeypress = this.handleKeyPress.bind(this)
    }

    fieldChange(event) {
        this.fieldValue = event.target.value
    }

    onClick(event) {
        event.preventDefault()
        let bandName = this.fieldValue
        let self = this
        getBandInfo(bandName).then(
            function (response) {
                self.setState({bandImage: response.data.image_url, bandName: bandName, banner: bandName})
            }
        )
    }

    handleKeyPress(event) {
        if(event.charCode === 13){
            this.onclick(event)
        }
    }

    render() {
        console.log("mynewcomponent.render()")
        return <div>
            <section>
                <Banner banner={this.state.banner}/>
            </section>
            <section>
                <input id="myInput" onChange={this.fieldchange} onKeyPress={this.handlekeypress}/>
                {' '}
                <button type="submit" onClick={this.onclick}>click to change band</button>
            </section>
            <section>
                <img src={this.state.bandImage} alt={this.state.bandName}></img>
            </section>
        </div>
    }
}
