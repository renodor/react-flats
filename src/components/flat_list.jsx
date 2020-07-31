import React, { Component } from 'react';

import Flat from './flat';

import flats from '../../data/flats';

class FlatList extends Component {

  render() {
    return (
      <div className="flat-list">
        {flats.map((flat, i) => {
          return <Flat
            key={i}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            name={flat.name}
            imageUrl={flat.imageUrl} />
        })
      }
      </div>
    );
  }
}

export default FlatList;
