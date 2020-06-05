import React from "react";

import { InStockCheck as InStock } from "./Filters";
import { PriceBar as Price } from "./Filters";
import { ProductTable as Table } from "./ProductTable";
import { SearchBar as Search } from "./Filters";

import { getAllProducts } from "api";
import { parseDollarPrice } from "utils";

export class FilterableProductTable extends React.Component {
  state = {
    isInStockOnly: false,
    maxPrice: null,
    products: [],
    searchTerm: "",
  };

  filterCBs = {
    inStockOnly: ({ stocked }) => stocked,
    maxPrice: ({ price }) =>
      parseDollarPrice(price) <= parseFloat(this.state.maxPrice),
    unfiltered: () => true,
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

  render() {
    //use object.keys
    //iterate over array
    // figure out which is a truthy
    //then reduce array filter cbs into one finished product
    let filteredProducts = this.state.products;

    if (this.state.maxPrice) {
      filteredProducts = filteredProducts.filter(this.filterCBs.maxPrice);
    }

    if (this.state.inStockOnly) {
      filteredProducts = filteredProducts.filter(this.filterCBs.inStockOnly);
    }

    filteredProducts = filteredProducts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

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
