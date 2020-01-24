import React, { Component } from 'react'
import Who from './Who';
import Messages from './Messages'
import Form from './Form';
import Search from './Search';
import Contacts from './Contacts';
import Login from './Login';
import Receiver from '../socket/Receiver';
import { ThemeContext } from '../contexts/ThemeContext';


export default class Container extends Component {
    constructor (props) {
        super(props);
        this.state = {toSearch: '', name:'', isLogged: false} 
    }
    static contextType = ThemeContext;

    
    componentDidMount() {
        
    }
    callbackFunction = (value) => {
        this.setState({ toSearch: value });
    }

    login = (name) =>{
        this.setState({isLogged : true, name: name})
    }
   

    render() {
        const { switcher } = this.context;
        
        return (
            <div>
                {this.state.isLogged?<Receiver name={this.state.name}/>:<Login login={this.login}/>}
                
                <div className="container" >

                    <div className={(this.context.showMenu)?'side':'side-mobile'}>
                        <Search value={this.state.toSearch} search={this.callbackFunction}/>
                        <Contacts toSearch={this.state.toSearch} />
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
