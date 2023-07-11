import React, { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    return (
      <div>
        <label>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        ></input>
      </div>
    );
  }
}
export default Filter;
