import React, { Component } from 'react'
import Who from './Who';
import Messages from './Messages'
import Form from './Form';
import Search from './Search';
import Contacts from './Contacts';
import Receiver from '../socket/Receiver';
import { ThemeContext } from '../contexts/ThemeContext';


export default class Container extends Component {

    static contextType = ThemeContext;

    componentDidMount() {
        
    }

    render() {
        const { switcher } = this.context;
        
        return (
            <div>
                <Receiver/>
                <div className="container" >

                    <div className={(this.context.showMenu)?'side':'side-mobile'}>
                        <Search />
                        <Contacts />
                    </div>
                    <div className="chat">
                        <Who />
                        <Messages />
                        <Form />
                    </div>
                </div>
                <div className={(this.context.showMenu)?'black':''} onClick={switcher}></div>
            </div>
        )
    }
}
