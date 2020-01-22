import React, { Component } from 'react'
import MessageFormat from './MessageFormat'
export default class Message extends Component {
    render() {
        return (
            <li className="msg">
                <div className={this.props.type[1]}></div>
                <MessageFormat  type={this.props.type}/>
                <div className={this.props.type[2]}></div>
            </li>
        )
    }
}
