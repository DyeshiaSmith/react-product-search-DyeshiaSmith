import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class SearchBar extends React.Component {
  static propTypes = {
    onFilterChange: PropTypes.func,
    onShowInStockChange: PropTypes.func,
  };
  handleCheckboxChange = (event) => {
    this.props.onShowInStockChange(event.target.checked);
  };

  handleInputChange = (event) => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="filter">Search</label>
          <input id="filter" type="search" onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="in-stock">Only Show In Stock Items</label>
          <input
            id="in-stock"
            type="checkbox"
            onChange={this.handleCheckboxChange}
          />
        </div>
      </Fragment>
    );
  }
}
