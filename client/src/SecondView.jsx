import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import MapContainer from "./MapContainer.jsx";
import CurrentLocation from "./Map.jsx";
import Clock from "./Clock";
import Alarms from "./Alarm";

export default class SecondView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <MapContainer />
        </div>
        <div>
          <Clock />
          <div>
            <Alarms />
          </div>
        </div>
      </div>
    );
  }
}
