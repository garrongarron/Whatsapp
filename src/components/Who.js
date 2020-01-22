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
                    <div className="name">Jhon  Doe {(this.context.var1) ? 'ok' : 'no'}</div>
                    <div className="status">Online !</div>
                </div>
            </div>
        )
    }
}
