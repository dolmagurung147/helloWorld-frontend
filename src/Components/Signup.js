import React, { Component } from 'react'

var goby = require('goby').init();

class Signup extends Component {

  state = {
    firstName: '',
    lastName: '',
    password: '',
    dob: '',
    sexualRepresentation: '',
    username: goby.generate(['adj', 'pre', 'suf']),
    email: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClickHandler = (e) => {
    console.log(this.state)

  }

  render(){
    return(
      <div>
        First Name: <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.onChangeHandler} />
        Last Name: <input type='text' value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.onChangeHandler} />
        Email: <input type='text' value={this.state.email} name='email' placeholder='Email' onChange={this.onChangeHandler} />
        Password: <input type='password' value={this.state.password} name='password' placeholder='Password' onChange={this.onChangeHandler} />
        Date of Birth: <input type='date' value={this.state.dob} name='dob' placeholder='Date of Birth' onChange={this.onChangeHandler} />
        Sexual Represenatation: <select onChange={this.onChangeHandler} value={this.state.sexualRepresentation} name='sexualRepresentation'>
          <option>please select</option>
          <option>she/her</option>
          <option>he/his</option>
          <option>they/their</option>
        </select>
        <button onClick={this.onClickHandler}>Sign Up</button>
      </div>
    )
  }
}

export default Signup
