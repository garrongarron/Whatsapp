import React, { Component } from 'react'
import Logo from '../icon2.png'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.itSelf = null
      }

    setUser = (a) => {
        this.setState({name: a})
    }
    login = () => {
        this.props.login(this.state.name)
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.itSelf.blur()
        }
      }
    render() {
        return (
            <div className="login">
                <p>Wellcome</p>
                <span>This is a public chat. Whatever you write here is seen by other people. You can have fun but it is dangerous for your privacy. Do not share personal information.</span>
                <img src={Logo} alt="Login" width="20%" />
                <span>Your messages will be sent to everyone.</span>
                <input  placeholder="Type your nick name" 
                        ref={elem => (this.itSelf = elem)}
                        value={this.state.name}
                        onKeyPress={this.handleKeyPress}
                        onChange={e => this.setUser(e.target.value)}/>
                <button onClick={this.login}>Login</button>
                <span>You will never know if people are talking to you.</span>
            </div>
        )
    }
}
