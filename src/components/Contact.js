import React, { Component } from 'react'

export default class Contact extends Component {

    render() {
        return (
            <div className={(this.props.isSelected) ? "who selected" : "who"} onClick={this.props.selectUser}>
                <div className="img"></div>
                <div className="main">
                    <div className="name">
                        <div>{this.props.name}</div>
                        <div className="last">{((this.props.last.date.getHours()<10)?'0':'')+this.props.last.date.getHours()+':'+
        ((this.props.last.date.getMinutes()<10)?'0':'')+this.props.last.date.getMinutes() }</div>
                    </div>
                    <div className="status">
                        <div>
                            {/* <i className="material-icons checked">check</i>  */}
                        {this.props.last.message}</div>

                        {/* <i className="material-icons">volume_off</i> */}
                        {/* <div className="unread">1122</div> */}
                    </div>
                </div>
            </div>
        )
    }
}
