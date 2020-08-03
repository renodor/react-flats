import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.lat}
            selectFlat={props.selectFlat}
            selectedFlat={props.selectedFlat.name === flat.name}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
