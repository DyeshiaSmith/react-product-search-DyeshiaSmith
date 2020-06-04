import PropTypes from "prop-types";
import React from "react";

export class InStockCheck extends React.Component {
  static propTypes = {
    onShowInStockChange: PropTypes.func,
  };

  handleCheckboxChange = ({ target }) => {
    this.props.onShowInStockChange(target.checked);
  };

  render() {
    return (
      <div>
        <label htmlFor="in-stock">Only Show In Stock Items</label>
        <input
          id="in-stock"
          type="checkbox"
          onChange={this.handleCheckboxChange}
        />
      </div>
    );
  }
}
