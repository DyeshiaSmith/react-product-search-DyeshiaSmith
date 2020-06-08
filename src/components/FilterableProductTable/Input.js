import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";
import kebabcase from "lodash.kebabcase";

export class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    proxy: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    this.props.proxy[camelCase(this.props.label)] = target[this.props.value];
  };

  kebabLabel = kebabcase(this.props.label);

  render() {
    return (
      <div>
        <label htmlFor={this.kebabLabel}>{this.props.label}</label>
        <input id="price" type={this.props.type} onChange={this.handleChange} />
      </div>
    );
  }
}
