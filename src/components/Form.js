import React, { Component } from 'react'
import { Socket } from "../socket/Socket";
import { ThemeContext } from '../contexts/ThemeContext';
import Send from '../icon1.png'
export default class Form extends Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this)
        this.send = this.send.bind(this);
        this.firstInput = null;
        
    }
    componentDidMount(){
        Socket.getSocket().then((socket) => {
            this.socket = socket;
        })
        
        this.context.setInputSender(this.firstInput);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    send() {
        this.socket.emit('new message', this.state.value);
        this.setState({ value: '' });  
    }
    render() {
        const { sendMessage } = this.context;
        
        return (
            
            <div className="form">
                <div>
                    <i className="material-icons">favorite</i>
                    <input 
                        ref={elem => (this.firstInput = elem)}
                        type="text" 
                        placeholder="Type your message"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </div>
                <button className="button"
                    onClick={()=>{
                    sendMessage({username:this.context.userSelected,message:this.state.value},'sending')
                    this.send()
                    this.context.inputSend.focus()
                }}>
                    {/* <i className="material-icons">send</i> */}
                <img src={Send} alt="Send" width="100%" />
                </button>
            </div>
        )
    }
}
