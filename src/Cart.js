import React, { Component } from 'react';
import SelectedPart from './SelectedPart'

class Cart extends Component {
  render () {
    return (
      <div>
        <h2>Your Cart</h2>
        <SelectedPart cartContents={this.props.cartContents}/>
        <div>
          <h3>Total</h3>
          <p>$5652.00</p>
        </div>
      </div>
    )
  }
}

export default Cart;