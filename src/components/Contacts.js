import React, { Component } from 'react'
import Contact from './Contact'
import { Socket } from "../socket/Socket";
import { ThemeContext } from '../contexts/ThemeContext';

export default class Contacts extends Component {

    static contextType = ThemeContext;
    
    componentDidUpdate(){}
    componentDidMount() {}
    render() {
        return (
            <div className="contacts">
                {this.context.contacts}
            </div>
        )
    }
}
