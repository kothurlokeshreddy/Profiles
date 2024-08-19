import React from 'react';
import ProfileCard from '../ProfileCard';
import SortDropdown from '../SortAndDropdown';

import './index.css'

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      sortedProfiles: null, // Initially, sortedProfiles is null
    };
  }

  componentDidMount() {
    // Fetch the profiles from the back-end API
    fetch(`http://localhost:5000/api/profiles`)
      .then(response => response.json())
      .then(data => {
        this.setState({ profiles: data }); // Set only profiles initially
      });
  }

  handleSort = (sortType) => {
    const { profiles } = this.state;

    if (sortType === "null") {
      // No sorting, reset to original profiles
      this.setState({ sortedProfiles: null });
    } else if (sortType === 'location') {
      let sorted = [...profiles]; // Clone the original profiles array
      sorted.sort((a, b) => a.location.localeCompare(b.location));
      this.setState({ sortedProfiles: sorted }); // Update sortedProfiles after sorting
    }
  };

  render() {
    const { profiles, sortedProfiles } = this.state;
    const displayProfiles = sortedProfiles || profiles; // Use sortedProfiles if available, otherwise use profiles

    return (
      <div className='profile-list-container'>
        <SortDropdown handleSort={this.handleSort} className = "sort-option"/>
        <div className="profile-list">
          {displayProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileList;
