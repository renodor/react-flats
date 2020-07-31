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

  selectFlat = (id) => {
    this.setState({ selectedFlat: id });
  }

  render() {
    return (
      <div>
        <FlatList selectedFlat={this.selectedFlat}/>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
