import React, { Component } from 'react';
import './index.css';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      location: '',
      profession: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {history} = this.props

    const profileData = {
      name: this.state.name,
      age: this.state.age,
      location: this.state.location,
      profession: this.state.profession,
    };

    const url = "http://localhost:5000/api/profiles";
    const options = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(profileData),
    }
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        history.push('/profiles');
      } else {
        alert('Error Occurred!!!');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Error Occurred!!!');
    }
  }

  render() {
    return (
        <div className='profile-form-container'>
          <div className='heading-form-container'>
            <h1>Create Your Profile</h1>
            <p>"Join our community by creating your profile. Share your details, connect with others, and unlock new opportunities."</p>
          </div>
          <form onSubmit={this.handleSubmit} className='form-container'>
              <div className='input-container'>
                <label htmlFor='name'>Name</label>
                <input
                  name = "name"
                  id = "name"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='age'>Age</label>
                <input
                  name = "age"
                  id = "age"
                  placeholder="Enter Age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='location'>Location</label>
                <input
                  name = "location"
                  placeholder="Enter Location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className='input-container'>
                <label htmlFor='profession'>Profession</label>
                <input
                  name = "profession"
                  placeholder="Enter Profession"
                  value={this.state.profession}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit" className='create-btn'>Create Profile</button>
          </form>
        </div>
    );
  }
}

export default ProfileForm;
