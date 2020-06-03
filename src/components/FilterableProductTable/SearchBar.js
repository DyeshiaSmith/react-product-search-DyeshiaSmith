import React, { Fragment } from "react";

export class SearchBar extends React.Component {
  static propTypes = {};

  render() {
    return (
      // https://reactjs.org/docs/fragments.html
      <Fragment>
        <div>
          <label htmlFor="filter">Search</label>
          <input id="filter" type="search" onChange{this.handleFilterChange}/>
        </div>
        <div>
          <label htmlFor="in-stock">Only Show In Stock Items</label>
          <input id="in-stock" type="checkbox" />
        </div>
      </Fragment>
    );
  }
}
