import React, { createContext, Component } from 'react'
import Contact from '../components/Contact'
import Message from '../components/Message'


export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        showMenu: false,
        messages: [],
        userSelected: 'No user Selected',
        friends: new Map(),
        messagesStorage: new Map(),
        contacts: [],
        isTyping: false
    }
    switcher = () => {
        this.setState({ showMenu: !this.state.showMenu });
    }

    sendMessage = (data, mode) => {
        let messages = this.state.messages.map(a => a);
        let message;
        if (mode === 'sending') {
            message = <Message type={['msg-right-0', '', 'myself', data.message]} key={new Date().getTime()} />
        } else {
            message = <Message type={['msg-left-0', 'he-she', '', data.message]} key={new Date().getTime()} />
        }

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
            console.log(this.state.friends)
            // for (var [key, value] of this.state.friends) {
            //     alert(key + " = " + value);
            //   }
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
    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                switcher: this.switcher,
                sendMessage: this.sendMessage,
                addFriend: this.addFriend,
                setIsTyping: this.setIsTyping,
                selectUser: this.selectUser
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider;
