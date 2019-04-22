import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InitialView from "./InitialView";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={InitialView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
