import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {

  render() {
    return (
      <div>
        <FlatList />
        <SimpleMap />
      </div>
    );
  }
}

export default App;
