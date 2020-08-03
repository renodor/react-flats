import React, { Component } from 'react';

import Flat from './flat';

import flats from '../../data/flats';

class FlatList extends Component {

  constructor(props) {
    super(props);


    this.state = {
      currentActiveFlatId: null
    };
  }

  activeFlat = (id) => {
    this.setState({ currentActiveFlatId: id });
  }

  render() {
    return (
      <div className="flat-list" onClick={this.handleClick}>
        {flats.map((flat, i) => {
          return <Flat
            key={i}
            id={i}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            name={flat.name}
            imageUrl={flat.imageUrl}
            lat={flat.lat}
            lng={flat.lng}
            selectFlat={this.props.selectFlat}
            activeFlat={this.activeFlat}
            currentActiveFlatId={this.state.currentActiveFlatId}
          />;
        })
      }
      </div>
    );
  }
}

export default FlatList;
