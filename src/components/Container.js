import React, { Component } from 'react'
import Who from './Who';
import Messages from './Messages'
import Form from './Form';
import Search from './Search';
import Contacts from './Contacts';
import { ThemeContext } from '../contexts/ThemeContext';


export default class Container extends Component {

    static contextType = ThemeContext;

    componentDidMount() {
        
    }

    render() {
        const { switcher } = this.context;
        return (
            <div>
                <div className="container" >

                    <div className={(this.context.var1)?'side':'side-mobile'}>
                        <Search />
                        <Contacts />
                    </div>
                    <div className="chat">
                        <Who />
                        <Messages />
                        <Form />
                    </div>
                </div>
                <div className={(this.context.var1)?'black':''} onClick={switcher}></div>
            </div>
        )
    }
}
