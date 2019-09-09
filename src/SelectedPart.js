import React, { Component } from 'react';

class SelectedPart extends Component {
  render () {
    return (
      <div>
          <h3>Processor</h3><p>${this.props.cartContents.cost}</p>
          <p>{this.props.cartContents.name}</p>
        </div>
    )
  }
} 

export default SelectedPart;