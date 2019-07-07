import React, { Component } from 'react'

import Login from '../Components/Login'
import Signup from '../Components/Signup'

class MainContainer extends Component {

  state = {
    loggedIn: false
  }

  showLoginSignup = () => {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    )
  }

  showMainPage = () => {
    return (
      <div>
        You are logged in
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.state.loggedIn ? this.showMainPage() : this.showLoginSignup()}
      </div>
    )
  }
}

export default MainContainer
