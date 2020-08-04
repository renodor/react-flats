import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render() {
    const { selectedFlat } = this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedFlat={selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA9eczdhAXBjQXg_Y5E8niGj9bVsr237OM' }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
