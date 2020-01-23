import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Menu from './Menu'


export default class Who extends Component {
    
    static contextType = ThemeContext;

    render() {

        return (
            <div className="who">
                <Menu/>
                <div className="img"></div>
                <div className="main">
                    <div className="name">{this.context.userSelected} {(this.context.showMenu) ? '' : ''}</div>
                    <div className="status">{(this.context.isTyping)?'Typing...':'On line'}</div>
                </div>
            </div>
        )
    }
}
