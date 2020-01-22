import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="who">
                <div className="img"></div>
                <div className="main">
                    <div className="name">
                        <div>{this.props.name}</div>
                        <div className="last">12:59 PM</div>
                    </div>
                    <div className="status">
                        <div><i className="material-icons checked">check</i> How are you?</div>

                        <i className="material-icons">volume_off</i>
                        <div className="unread">1122</div>
                    </div>
                </div>
            </div>
        )
    }
}
