import React from "react";
import PropTypes from "prop-types";

const renderProductRows = () => {};

const renderTBody = (products) => {
  return products.map((products, index) => {
    return (
      <tr key="index">
        <td>{products.name}</td>
        <td>{products.price}</td>
      </tr>
    );
  });
};

export const ProductTable = (props) => {
  return (
    <table>
      <tbody>{renderTBody(props.products)}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
};
