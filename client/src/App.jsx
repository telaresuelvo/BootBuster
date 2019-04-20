import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GOOGLE_API } from "../../.env";
import MapContainer from "./MapContainer.jsx";
import CurrentLocation from './Map.jsx';
import Button from './SaveButton.jsx';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       items:[]
    };
    //this.addItem = this.addItem.bind(this);
    this.getData = this.getData.bind(this);
    //this.postData = this.postData.bind(this);
    //this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount(){
   this.getData('/address')
 }

 getData() {
   return fetch('/address')
   .then(response => response.JSON())
   .then(data => {
     this.setState({
       items: data,
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

  render() {
    console.log(this.state.items);
      return(
    <div>
      <MapContainer />
      <Button />
      <CurrentLocation />
    </div>
    );
  }
}
export default App
