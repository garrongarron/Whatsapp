import React, { createContext, Component } from 'react'
import Message from '../components/Message'


export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        showMenu: false,
        messages: [],
        userSelected: 'No user Selected',
        friends: new Map(),
        messagesStorage: new Map(),
        lastMsg: new Map(),
        contacts: [],
        isTyping: false,
        inputSend: null
    }
    switcher = () => {
        this.setState({ showMenu: !this.state.showMenu });
        if(this.state.showMenu){
            this.state.inputSend.focus();
        }
    }

    sendMessage = (data, mode) => {
        let messages = this.state.messages.map(a => a);
        let message;
        let d = new Date();
        if (mode === 'sending') {
            message = <Message type={['msg-right-0', '', 'myself', data.message, d]} key={d.getTime()} />
        } else {
            message = <Message type={['msg-left-0', 'he-she', '', data.message, d]} key={d.getTime()} />
        }
        this.state.lastMsg.set(data.username, {message:data.message, date: d});
        messages.push(message)
        // this.state.messagesStorage.get
        if (!this.state.messagesStorage.has(data.username)) {
            this.state.messagesStorage.set(data.username, [message]);
        } else {
            let tmp = this.state.messagesStorage.get(data.username);
            tmp.push(message)
        }
        this.setState({ messages, userSelected: data.username });
    }

    addFriend = (username) => {
        if (!this.state.friends.has(username)) {
            this.state.friends.set(
                username,
                username
            );
            let arr = [];
            for (var valor of this.state.friends.values()) {
                arr.push(valor);
            }
            this.setState({contacts: arr });
        }
    }


    setIsTyping = (boolean, data) => {
        if (data.username === this.state.userSelected) {
            this.setState({ isTyping: boolean });
        }
    }
    selectUser = (username) => {
        this.setState({ userSelected: username });
    }
    getUserSelected = () => {
        console.log(this.state.userSelected)
        return this.state.userSelected;
    }

    setInputSender = (input) => {
        this.setState({ inputSend: input });
    }

    getLast = (username) => {
        return this.state.lastMsg.get(username);
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                switcher: this.switcher,
                sendMessage: this.sendMessage,
                addFriend: this.addFriend,
                setIsTyping: this.setIsTyping,
                selectUser: this.selectUser,
                setInputSender: this.setInputSender,
                getLast: this.getLast
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider;
