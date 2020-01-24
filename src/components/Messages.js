import React, { Component } from 'react'
// import Message from './Message'
// import { Socket } from "../socket/Socket";
import { ThemeContext } from '../contexts/ThemeContext';


export default class Messages extends Component {

    constructor(props) {
        super(props);
        this.toScroll = null;
    }
    static contextType = ThemeContext;
    examples = [
        ['msg-left', '', '', 'content-left'],
        ['msg-left-0', 'he-she', '', 'content-left'],

        ['msg-center', '', '', 'today'],
        ['msg-right-0', '', 'myself', 'contenct-right'],

        ['msg-right', '', '', 'contenct-right Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet pariatur, soluta veniam optio perferendis aperiam delectus ex cupiditate in a? Vitae dolore totam maxime voluptas laudantium, hic nobis eveniet excepturi?']
    ];

    componentDidUpdate() {
        this.toScroll.scrollTop = this.toScroll.scrollHeight
    }
    componentDidMount() {
  
    }



    render() {
        return (
            <ul className="msgs" ref={elem => (this.toScroll = elem)}>
                {this.context.messagesStorage.get(this.context.userSelected)}
            </ul>
        )
    }
}
