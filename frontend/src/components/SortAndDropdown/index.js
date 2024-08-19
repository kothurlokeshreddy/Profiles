import React from 'react';

class SortDropdown extends React.Component {
  handleChange = (event) => {
    this.props.handleSort(event.target.value);
  };

  render() {
    return (
      <div className='sort-option'>
        <label htmlFor = "sort">Sort by:</label>
        <select id = "sort" onChange={this.handleChange}>
          <option value="null">Select</option>
          <option value="location">Location</option>
        </select>
      </div>
    );
  }
}

export default SortDropdown;
