import React, { Component } from 'react';
import slugify from 'slugify';

class Options extends Component {
  
  render(){
    const itemHash = slugify(JSON.stringify(this.props.option));
    return(
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.option.name === this.props.cartContents[this.props.feature].name}
          onChange={e => this.props.updateFeature(this.props.feature, this.props.option)}
        />
        <label htmlFor={itemHash} className="feature__label">
          Test
          {/* {this.props.option.name} ({USCurrencyFormat.format(this.props.option.cost)}) */}
        </label>
      </div>
    );
  }
}

export default Options;