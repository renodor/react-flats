import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      markerLat: 43.1487189,
      markerLng: 5.7420883
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      markerLat: lat,
      markerLng: lng
    });
  }

  render() {
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <SimpleMap markerLat={this.state.markerLat} markerLng={this.state.markerLng} />
      </div>
    );
  }
}

export default App;
