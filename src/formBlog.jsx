import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ errors: { confirmPassword: 'Passwords do not match' } });
    } else {
          this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
      });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h2>Registr Blog</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name of a Blog :</label>
            <input type="text" name="name" onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Sending Blog Email:</label>
            <input type="email" name="email" onChange={this.handleInputChange} />
          </div>
          <div>
            <label>security:</label>
            <input type="password" name="password" onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" onChange={this.handleInputChange} />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
