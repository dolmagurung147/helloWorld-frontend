import React, { Component } from 'react'

import Login from '../Components/Login'
import Signup from '../Components/Signup'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Login />
        <Signup />
      </div>
    )
  }
}

export default MainContainer
