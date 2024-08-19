import React from 'react';

import './index.css'

class ProfileCard extends React.Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="profile-card">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n9vUNCLmnEJ5pKIl0VUwTPofdPGIXPf2pA&s" alt = "profile" />
        <div className='profile-details'>
          <h3>{profile.name}</h3>
          <p>Location: {profile.location}</p>
          <p>Profession: {profile.profession}</p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
