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
        console.log()
        return (
            <div className="contacts">
                {this.context.contacts.map((name) => {
                    if(typeof name !== 'undefined' && name.indexOf(this.props.toSearch)>-1){
                        return <Contact 
                            isSelected={(name === this.context.userSelected)} 
                            name={name} 
                            selectUser={()=>{
                                this.context.selectUser(name);
                                switcher()
                            }} 
                            key={name}
                            last={this.context.getLast(name)} />
                    }
                }
                )}
            </div>
        )
    }
}
