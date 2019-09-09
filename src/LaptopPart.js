import React, { Component } from 'react';
import Options from './Options'

class LaptopPart extends Component {
  // features = () => {
  //   return Object.keys(this.props.features.selected).map((feature, idx) => {
  //     console.log(feature);
  //     // featureHash = feature + '-' + idx;
  //     return (<h3>{feature}</h3>)
  //   });
  // }; 
  
  render() {
    
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
          <div>
            {this.props.features[this.props.feature].map((option) => 
              <Options 
                  option={option}
                  feature={this.props.feature}
                  updateFeature={this.props.updateFeature}
                  cartContents={this.props.cartContents}
                />
            )}
          </div>
      </fieldset>
    )
  }
}

//   render() { 
//     const features = Object.keys(this.props.features).map((feature, idx) => {  
//       return (
//         <div> 
//         <h3>{feature}</h3> 
//         </div> 
//       ); 
//     }); 
//   }
// }
export default LaptopPart;