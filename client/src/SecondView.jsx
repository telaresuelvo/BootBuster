import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import TwoClock from "./TwoClock";
import Alarms from "./Alarms";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NewT from "./NewT.jsx";
import Mapa from "./Mapa";

export default class SecondView extends Component {
  render() {
    console.log(
      "this props are passing to second view",
      this.props.location.state.trans
    );
    console.log(
      "this props are passing to second view",
      this.props.location.state.clicked
    );
    console.log(
      "this props are passing to second view",
      this.props.location.state.sec
    );

    const value = this.props.location.state.clicked;
    const trans = this.props.location.state.trans;
    const seconds = this.props.location.state.sec;
    return (
      <div>
        <div>
          <TwoClock
            trans={this.props.location.state.trans}
            sec={this.props.location.state.sec}
          />
        </div>
        <div className="his">
          <Link to="/history">
            <button className="btns">History</button>
          </Link>
          <NewT />
        </div>
        <div>
          <Mapa />
        </div>
      </div>
    );
  }
}
