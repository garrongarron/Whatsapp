import React, { Component } from 'react'
import Message from './Message'
import { Socket } from "../socket/Socket";
import { ThemeContext } from '../contexts/ThemeContext';


export default class Messages extends Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.myArr = [];

        this.state = {
            value: '',
            list: [],
        };
    }
    class = [
        ['msg-left', '', '', 'content-left'],
        ['msg-left-0', 'he-she', '', 'content-left'],

        ['msg-center', '', '', 'today'],
        ['msg-right-0', '', 'myself', 'contenct-right'],

        ['msg-right', '', '', 'contenct-right Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet pariatur, soluta veniam optio perferendis aperiam delectus ex cupiditate in a? Vitae dolore totam maxime voluptas laudantium, hic nobis eveniet excepturi?']
    ];

    componentDidUpdate() {

    }
    componentDidMount() {
        let state = (text) => {
            this.context.sendMessage(
            <Message type={['msg-left-0', 'he-she', '', text]} 
            key={new Date().getTime()} />)
        }
        let who = (username) => {
            this.context.addFriend(username)
        }
        Socket.getSocket().then((socket) => {
            socket.emit('add user', 'Federico');
            socket.on('new message', function (data) {
                state(data.message);
                who(data.username);
            });
        })
    }



    render() {
        return (
            <ul className="msgs">
                {this.context.messages}
            </ul>
        )
    }
}
