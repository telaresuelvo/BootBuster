import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import MapContainer from "./MapContainer.jsx";
import CurrentLocation from "./Map.jsx";
import Clock from "./Clock";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
class InitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    //this.addItem = this.addItem.bind(this);
    //this.getData = this.getData.bind(this);
    //this.postData = this.postData.bind(this);
    //this.deleteItem = this.deleteItem.bind(this);
  }
  /*
  componentDidMount() {
    this.getData("/address");
  }

  getData() {
    return fetch("/address")
      .then(response => response.JSON())
      .then(data => {
        this.setState({
          items: data
        });
      })
      .catch(err => console.error(err));
  }
  //postData('', data = {}) {
  //   return fetch({
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },s
  //     body: JSON.strigify(data),
  //   })
  //   then(() => this.getData())
  //   .catch(err => console.error(err));
  // }
  //
  // addItem(){
  //   let {} = this.state;
  //   const newItem = {
  //     id:list.length + 1,
  //   };
*/
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
