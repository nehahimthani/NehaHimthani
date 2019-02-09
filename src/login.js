import React, { Component } from 'react';
import { Redirect } from 'react-router'
class Login extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPassword: '',
      loginSuccess: '',
    }
  }
  onInputChange = (e) => {
    var name=document.getElementById('userName').value;
    var password=document.getElementById('pwd').value;
    this.setState({ userName: name, userPassword:password })
   
  }
    handleLogin=(e)=>{
     if (this.state.userName === 'shaadi' && this.state.userPassword === '123') {
      this.setState({ loginSuccess: true });
    }
    else {
        alert('Invalid credentials');
      this.setState({ loginSuccess: false });
    }
    }
    render(){
      if (this.state.loginSuccess) {
       this.props.history.push({
        pathname: '/slides',
        state: { loginToken: true }
      })
    }
        return(
            <div>
            <input type="text" placeholder="Enter user name" id="userName" name="userName" onChange={this.onInputChange} name="username"/>
            <input type="text" placeholder="Enter password" id="pwd" name="password" onChange={this.onInputChange} name="password"/>
            <input type="button" value="Submit" onClick={this.handleLogin}/>
</div>
        );
    }
}

export default Login;