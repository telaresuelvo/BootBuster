import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import InitialView from "./InitialView";
import SecondView from "./SecondView";
import HistoryComp from "./History";

export default class App extends Component {
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
            <Route exact path="/history" component={HistoryComp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
