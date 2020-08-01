import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker'


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA9eczdhAXBjQXg_Y5E8niGj9bVsr237OM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={43.1487189}
            lng={5.7420883}
            text="Hello"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
