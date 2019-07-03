import React, {Component} from 'react'

class Topic extends Component {
    render() {
        return <div>{this.props.match.params.id }</div>
    }
}

export default Topic