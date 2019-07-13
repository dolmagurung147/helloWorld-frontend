import React, { Component } from 'react'

import Login from '../Components/Login'
import Signup from '../Components/Signup'
import NavBar from '../Components/NavBar'
import Homepage from './Homepage'
import Landingpage from './Landingpage'

class MainContainer extends Component {

  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  }

  showLoginSignup = () => {
    return (
      <div>
        <Login login={this.login}/>
        <Signup />
      </div>
    )
  }


  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello World!</h1>
        {this.state.loggedIn ? <Homepage/> : <Landingpage />}
      </div>
    )
  }
}

export default MainContainer
