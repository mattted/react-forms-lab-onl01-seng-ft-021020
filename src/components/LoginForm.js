import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state))
  }

  login = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }
    
  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.inputChange} name="username" type="text" value={this.state.username} required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.inputChange} name="password" type="password" value={this.state.password} required />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
