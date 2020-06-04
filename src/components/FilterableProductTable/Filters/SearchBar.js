import PropTypes from "prop-types";
import React from "react";

export class SearchBar extends React.Component {
  static propTypes = {
    onFilterChange: PropTypes.func,
  };

  handleInputChange = ({ target }) => {
    // Send the value from the input that caused this 'event' to the parent
    this.props.onFilterChange(target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="filter">Search</label>
        <input id="filter" type="search" onChange={this.handleInputChange} />
      </div>
    );
  }
}
