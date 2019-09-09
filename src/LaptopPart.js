import React, { Component } from 'react';

class LaptopPart extends Component {

  
  render () {
    console.log(this.props);
    return (
      <legend className="feature__name">
              <h3>Processor</h3>
              <div className="feature__item">
                <input
                  type="radio"
                  id="Processor"
                  name="Processor"
                  className="feature__option"
                  // name={slugify(feature)}
                  // checked={item.name === this.state.selected[feature].name}
                  // onChange={e => this.updateFeature(feature, item)}
                />
                <label className="feature__label" htmlFor="Processor">
                  {this.props.features.name} (${this.props.features.cost})
                  {/* {item.name} ({USCurrencyFormat.format(item.cost)}) */}
                </label>
              </div>
            </legend>
    )
  }
}

export default LaptopPart;