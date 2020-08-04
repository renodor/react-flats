import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { index, selectFlat } = this.props;
    selectFlat(index);
  }

  render() {
    const { flat, selectedFlat } = this.props;
    const flatStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')`
    };

    return (
      <div className={`card${selectedFlat ? ' active' : ''}`} style={flatStyle}>
        <div className="card-category">
          {flat.price}
          {' '}
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <button type="button" className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
