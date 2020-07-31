import React, { Component } from 'react';

import Flat from '../components/flat';

import flats from '../../data/flats';

class FlatList extends Component {

  render() {
    return (
      <div className="flat-list">
        <Flat />
      </div>
    );
  }
}

export default FlatList;
