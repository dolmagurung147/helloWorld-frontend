import React, { Component } from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

class Landingpage extends Component{

  state = {
    newUser: false
  }

  signUpClickHandler = () => {
    this.setState({
      newUser: true
    })
  }

  render() {
    return (
      <div>
        {this.state.newUser ? <Signup /> : <Login login={this.props.login} signup={this.signUpClickHandler}/>}
      </div>
    )
  }
}

export default Landingpage
