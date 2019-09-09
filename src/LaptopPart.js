import React, { Component } from 'react';

class LaptopPart extends Component {

  //map to return the h3 and the input/labels


  //map through radio buttons 
  
  render () {
    console.log(this.props);
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });


    return (
      <fieldset>
        <legend className="feature__name">
              <h3>Processor</h3>
              <div className="feature__item">
                <input
                  type="radio"
                  id="Processor"
                  name="Processor"
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === this.state.selected[feature].name}
                  onChange={e => this.updateFeature(feature, item)}
                />
                <label className="feature__label" htmlFor="Processor">
                  {this.props.features.name} (${this.props.features.cost})
                  {/* {item.name} ({USCurrencyFormat.format(item.cost)}) */}
                </label>
              </div>
            </legend>
      </fieldset>
    )
  }
}

export default LaptopPart;