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
    const keys = Object.keys(this.props.features);
    return (
      <div>
        {keys.map(key => <h3>{key}</h3>)}
        {this.props.features.map((option) => 
          <Options features={this.props.features}/>
        )}
      </div>
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