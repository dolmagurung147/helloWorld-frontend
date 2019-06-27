import React, { Component } from 'react'

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //------------------ Login -------------------------//
  onClickHandler = (e) => {
    console.log(this.state)
  }
  //--------------------------------------------------//

  render() {
    return (
      <div>
        Username: <input type='text' value={this.state.username} name='username' placeholder='Username' onChange={this.onChangeHandler} />
        Password: <input type='password' value={this.state.password} name='password' placeholder='Password' onChange={this.onChangeHandler} />
        <button onClick={this.onClickHandler}>Login</button>
      </div>
    )
  }
}

export default Login
