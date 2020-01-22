import React, { Component } from 'react'

export default class MessageFormat extends Component {
    message = ['Hello', 'Today', 'haha', ' This is a good day  This is a good day This is a good day This is a good day This is a good  day  This is a good day This is a good day This is a good day This is a good  day  This is a good day This is a good day This is a good day This is a good  day  This is a good day This is a good day This is a good day This is a good day '];
    
    getText() {
        return this.message[Math.floor(Math.random() * this.message.length)];
    }

    

    render() {

        return (
            <div className={this.props.type[0]}>
                <div className="text">
                    {this.props.type[3]}
                    <br/>
                    <div className="time">12:59 pm</div>
                </div>
            </div>
        )
    }
}
