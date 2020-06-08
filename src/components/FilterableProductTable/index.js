import React from "react";

import { Input } from "./Input";
import { ProductTable as Table } from "./ProductTable";

import { getAllProducts } from "api";
import { parseDollarPrice } from "utils";

export class FilterableProductTable extends React.Component {
  state = {
    inStockOnly: false,
    maxPrice: null,
    products: [],
    search: "",
  };

  filterCBs = {
    inStockOnly: ({ stocked }) => stocked,
    maxPrice: ({ price }) =>
      parseDollarPrice(price) <= parseFloat(this.state.maxPrice),
    searchTerm: ({ name }) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
  };

  handleFilterChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handlePriceChange = (maxPrice) => {
    this.setState({ maxPrice });
  };
  handleShowInStockChange = (inStockOnly) => {
    this.setState({ inStockOnly });
  };

  async componentDidMount() {
    try {
      this.setState({ products: await getAllProducts() });
    } catch (error) {
      console.error(error);
    }
  }

  filterCBNames = Object.keys(this.filterCBs);

  stateNames = Object.keys(this.state);

  filterableStateNames = Object.keys(this.state).filter((stateName) =>
    this.filterCBNames.includes(stateName)
  );

  inputs = [
    {
      labelTextContent: "Max Price",
      inputType: "number",
    },
    {
      labelTextContent: "In Stock Only",
      inputType: "checkbox",
      val: "checked",
    },
    {
      labelTextContent: "Search",
      inputType: "search",
    },
  ];

  renderInputs() {
    return this.inputs.map(
      ({ labelTextContent, inputType, val = "value" }, index) => (
        <Input
          label={labelTextContent}
          type={inputType}
          value={val}
          key={index}
        />
      )
    );
  }

  render() {
    const filteredProducts = this.filterableStateNames.reduce(
      (accumulatedProducts, filterableStateNames) => {
        if (this.state[filterableStateNames]) {
          return accumulatedProducts.filter(
            this.filterCBs[filterableStateNames]
          );
        }
        return accumulatedProducts;
      },
      this.state.products
    );

    return (
      <main>
        {this.renderInputs()}
        <Table products={filteredProducts} />
      </main>
    );
  }
}
