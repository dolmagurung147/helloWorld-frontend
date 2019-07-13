import React, { Component } from 'react'

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

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello World!</h1>
        {this.state.loggedIn ? <Homepage/> : <Landingpage login={this.login}/>}
      </div>
    )
  }
}

export default MainContainer
