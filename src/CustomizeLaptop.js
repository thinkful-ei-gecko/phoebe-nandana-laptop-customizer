import React, { Component } from 'react';
import LaptopPart from './LaptopPart';

class CustomizeLaptop extends Component {

  render () {
    console.log(this.props);
  
    return (
      <div>
        <h2>Customize your laptop</h2>
        <form className="feature">
          {Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <LaptopPart 
                features={this.props.features}
                feature={feature}
                featureHash={featureHash}
                cartContents={this.props.cartContents}
                updateFeature={this.props.updateFeature}
              />
            )
          })}
        </form>
      </div>
    );
  }
  
}

export default CustomizeLaptop;