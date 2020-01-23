import React, { Component } from 'react'
// import Contact from './Contact'
// import { Socket } from "../socket/Socket";
import { ThemeContext } from '../contexts/ThemeContext';
import Contact from './Contact';

export default class Contacts extends Component {

    static contextType = ThemeContext;

    componentDidUpdate() { }
    componentDidMount() { }

    render() {
        const { switcher } = this.context;
        return (
            <div className="contacts">
                {this.context.contacts.map(name =>
                    <Contact 
                        isSelected={(name === this.context.userSelected)} 
                        name={name} 
                        selectUser={()=>{
                            this.context.selectUser(name);
                            switcher()
                        }} 
                        key={name}
                        last={this.context.getLast(name)} />
                )}
            </div>
        )
    }
}
