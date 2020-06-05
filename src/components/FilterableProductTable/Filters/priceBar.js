import PropTypes from "prop-types";
import React from "react";

export class PriceBar extends React.Component {
  static propTypes = {
    onPriceChange: PropTypes.func,
  };

  handleInputChange = ({ target }) => {
    this.props.onPriceChange(target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="Price">Max Price</label>
        <input id="Price" type="number" onChange={this.handleInputChange} />
      </div>
    );
  }
}
