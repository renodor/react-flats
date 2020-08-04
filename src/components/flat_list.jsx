import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.lat}
            selectFlat={selectFlat}
            selectedFlat={selectedFlat.name === flat.name}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
