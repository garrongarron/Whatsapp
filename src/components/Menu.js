import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default class Menu extends Component {
    static contextType = ThemeContext;
    render() {
        const { switcher } = this.context;
        return (
            <i className="material-icons menu" onClick={switcher}>menu</i>
        )
    }
}
