import React, { Component } from 'react'
import Dropdown from './Dropdown'
export default class Sort extends Component {
    render() {
        return (
            <>
                  <label>Order</label>
            <Dropdown  handleChange={this.props.handleOrderChange} value={this.props.sortOrder} options={[{value:'desc', display: 'Descending'}, {value:'asc', display: 'Ascending'}]} />
            <label>Results per page</label>
            <Dropdown  handleChange={this.props.handleQuantityChange} value={this.props.pokePerpage} options={[20, 50, 100, 200]} />
            </>
        )
    }
}
