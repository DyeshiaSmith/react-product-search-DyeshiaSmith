import React from "react";

import { Input } from "./Input";

import { InStockCheck as InStock } from "./Filters";
import { PriceBar as Price } from "./Filters";
import { ProductTable as Table } from "./ProductTable";
import { SearchBar as Search } from "./Filters";

import { getAllProducts } from "api";
import { parseDollarPrice } from "utils";

export class FilterableProductTable extends React.Component {
  state = {
    inStockOnly: false,
    maxPrice: null,
    products: [],
    searchTerm: "",
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
        <Input label="Test " type="text" value="value" />
        <Search onFilterChange={this.handleFilterChange} />
        <InStock onShowInStockChange={this.handleShowInStockChange} />
        <Price onPriceChange={this.handlePriceChange} />
        <Table products={filteredProducts} />
      </main>
    );
  }
}
