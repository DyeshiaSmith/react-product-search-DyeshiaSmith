import PropTypes from "prop-types";
import React from "react";

import kebabcase from "lodash";

export class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    console.log(target[this.props.value]);
  };

  kebabLabel = kebabcase.kababcase(this.props.label);

  render() {
    return;
    <div>
      <label htmlFor={this.kebabLabel}>{this.props.label}</label>
      <input id="price" type={this.props.type} onChange={this.handleChange} />
    </div>;
  }
}
