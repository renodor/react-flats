import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      selectedFlat: null
    };
  }

  selectFlat = (lat, lng) => {
    console.log(lat);
    console.log(lng);
  }

  render() {
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <SimpleMap />
      </div>
    );
  }
}

export default App;
