import React, { Component } from 'react'
import { Socket } from "./Socket";
import { ThemeContext } from '../contexts/ThemeContext';

export default class Receiver extends Component {
    
    static contextType = ThemeContext;

    componentDidMount() {
        let processMessage = (data) => {
            this.context.sendMessage(data)
        }
        let who = (username) => {
            this.context.addFriend(username)
        }
        let setIsTyping = (boolean, data) => {
            this.context.setIsTyping(boolean, data)
        }
        Socket.getSocket().then((socket) => {
            socket.emit('add user', 'Federico');
            socket.on('new message', function (data) {
                processMessage(data);
                who(data.username);
            });
            socket.on('typing', function (data) {
                setIsTyping(true, data);
                console.log('0011', 'typing', data)
            });
            socket.on('stop typing', function (data) {
                setIsTyping(false, data);
                console.log('0011', 'typing', data)
            });
        })
    }
    render() {
        return (
            <div></div>
        )
    }
}
