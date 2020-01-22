import React, { createContext, Component } from 'react'
import Contact from '../components/Contact'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        var1: false,
        messages: [],
        friends : new Map(),
        contacts: []
    }
    switcher = () => {
        this.setState({ var1: !this.state.var1 });
    }

    sendMessage = (value) => {
        let messages = this.state.messages.map(a=>a)
        messages.push(value)
        this.setState(state => {
            return { 
                var1: this.state.var1,
                messages,
                friends: this.state.friends
            }
        });
    }
    addFriend = (username) =>{
        
        if(!this.state.friends.has(username)){
            this.state.friends.set(
                username, 
                <Contact name={username} key={new Date().getTime()}/>
            );
            let arr = [];
            for (var valor of this.state.friends.values()) {
                arr.push(valor);
            }
            this.setState(state => {
                return { 
                    var1: this.state.var1,
                    messages: this.state.messages,
                    friends: this.state.friends,
                    contacts: arr
                }
            });
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, 
            switcher: this.switcher,
            sendMessage: this.sendMessage,
            addFriend: this.addFriend }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider;
