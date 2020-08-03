import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker'


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.856946,
      lng: 2.342124
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" style={{ height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA9eczdhAXBjQXg_Y5E8niGj9bVsr237OM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.markerLat}
            lng={this.props.markerLng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
