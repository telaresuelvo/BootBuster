import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InitialView from "./InitialView";
import SecondView from "./SecondView";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <InitialView {...props} isAuthed={true} />}
            />
            <Route
              exact
              path="/SecondView"
              render={props => <SecondView {...props} isAuthed={true} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
