import React from "react";

import { SearchBar as Search } from "./SearchBar";
import { ProductTable as Table } from "./ProductTable";

import { getAllProducts } from "../../api";

export class FilterableProductTable extends React.Component {
  state = {
    products: [],
    filterTerm: "",
    isInStockOnly: false,
  };

  handleFilterChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handleShowInStockChange = (isInStockOnly) => {
    this.setState({ isInStockOnly });
  };

  async componentDidMount() {
    try {
      this.setState({ products: await getAllProducts() });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // How to know whether or not to filter 'isInStockOnly' or not? 🤔

    // TODO: Create 'filter' methods that we can 'plug in' as needed
    // https://github.com/Claim-Academy-JS/json-api/blob/master/src/index.js

    // How to filter products by name that is typed in and with 'isInStockOnly' using 'filterCB' ❓

    return (
      <main>
        {/* TODO: Pass in 'props' to components as needed */}
        <Search
          onFilterChange={this.handleFilterChange}
          onShowInStockChange={this.handleShowInStockChange}
        />
        <Table products={this.state.products} />
      </main>
    );
  }
}
