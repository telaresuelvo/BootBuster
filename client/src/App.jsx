import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "/home/hc-39/Documents/BootBuster/server/.env";
import CurrentLocation from "./Map";
import MapContainer from "./MapContainer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MapContainer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API
})(MapContainer);
