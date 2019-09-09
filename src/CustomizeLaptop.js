import React, { Component } from 'react';
import LaptopPart from './LaptopPart';

class CustomizeLaptop extends Component {

  render () {
    console.log(this.props);
    return (
      <div>
        <h2>Customize your laptop</h2>
        <fieldset className="feature">
            <LaptopPart features={this.props.features[0]}/>
        </fieldset>
      </div>
    );
  }
}

export default CustomizeLaptop;