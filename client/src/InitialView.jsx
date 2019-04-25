import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import MapContainer from "./MapContainer.jsx";
import CurrentLocation from "./Map.jsx";
import Clock from "./Clock";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
class InitialView extends Component {
  render() {
    return (
      <div>
        <div>
          <MapContainer />
        </div>
        <br />
        <div>
          <Clock />
        </div>
      </div>
    );
  }
}
export default InitialView;
