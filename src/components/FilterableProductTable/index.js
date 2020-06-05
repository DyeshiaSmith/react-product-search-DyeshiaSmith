import React from "react";

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
  };

  handleFilterChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handlePriceChange = (maxPrice) => {
    this.setState({ maxPrice });
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

  filterCBNames = Object.keys(this.filterCBs);

  stateNames = Object.keys(this.state);

  filterableStateNames = this.stateNames.filter((stateName) =>
    this.filterCBNames.includes(this.stateName)
  );

  render() {
    console.log(this.filterCBMethods);

    let filteredProducts = this.state.products;

    if (this.state.isInStockOnly) {
      filteredProducts = filteredProducts.filter(this.filterCBs.inStockOnly);
    }

    if (this.state.maxPrice) {
      filteredProducts = filteredProducts.filter(this.filterCBs.maxPrice);
    }

    return (
      <main>
        <Search onFilterChange={this.handleFilterChange} />
        <InStock onShowInStockChange={this.handleShowInStockChange} />
        <Price onPriceChange={this.handlePriceChange} />
        <Table products={filteredProducts} />
      </main>
    );
  }
}
