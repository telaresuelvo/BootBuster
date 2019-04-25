import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import MapContainer from "./MapContainer.jsx";
import CurrentLocation from "./Map.jsx";
import TwoClock from "./TwoClock";
import Alarms from "./Alarm";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default class SecondView extends Component {
  render() {
    console.log("this props second view", this.props.location.state.trans);
    return (
      <div>
        <div>
          <TwoClock />
        </div>
        <div className="his">
          <Link to="/history">
            <button>History</button>
          </Link>
        </div>
      </div>
    );
  }
}
