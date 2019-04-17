import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_API } from '../../.env'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 19.4220866,
         lng: -99.1718937
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey:  GOOGLE_API
})(MapContainer);

// class App extends Component {
//   render() {
//     return <div>Welcome to a Modern Minimal React Boilerplate</div>;
//   }
// }
//  hot export works with RHL. Remove line 11 when starting fullstack integration
// export default hot(module)(App);
//  Uncomment line 13 & delete line 11 when starting fullstack integration
//  export default App;
