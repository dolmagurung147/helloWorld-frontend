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
  onClickHandler = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: {username: this.state.username, password: this.state.password}
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else {
        localStorage.setItem('token', data.token)
        this.props.login()
        console.log(data)
      }
    })
  }
  //--------------------------------------------------//

  render() {
    return (
      <div>
        Username: <input type='text' value={this.state.username} name='username' placeholder='Username' onChange={this.onChangeHandler} />
        Password: <input type='password' value={this.state.password} name='password' placeholder='Password' onChange={this.onChangeHandler} />
        <button onClick={this.onClickHandler}>Login</button>
        New User? <button onClick={this.props.signup}> Sign Up </button>
      </div>
    )
  }
}

export default Login
