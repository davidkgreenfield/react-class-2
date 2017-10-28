import React, {Component} from 'react';

export default class Banner extends Component {

    componentWillMount()
    {
        // console.log("Banner.componentWillMount")
    }

    render() {
        console.log("Banner.render")
        return  <div>
                    <h1>{this.props.banner}</h1>
                </div>
    }

    componentDidMount() {
        // console.log("Banner.componentDidMount")
    }
}
