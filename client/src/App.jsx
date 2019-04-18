import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {GOOGLE_API} from '../../.env';
import CurrentLocation from './Map';

export class MapContainer extends Component {
	//add state for marker
	state = {
		showingInfoWindow: false, //Hides or the shows the infoWindow
		activeMarker: {}, //Shows the active marker upon click
		selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
	};
	//event handlers for when the map and the marker are clicked.
	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	//event handlers for when the map and the marker are clicked.
	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		return (
			<CurrentLocation centerAroundCurrentLocation google={this.props.google}>
				<Marker onClick={this.onMarkerClick} name={'current'} />
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}
				>
					<div>
						<h4>{this.state.selectedPlace.name}</h4>
					</div>
				</InfoWindow>
			</CurrentLocation>
		);
	}
}


export default GoogleApiWrapper({
  apiKey:  GOOGLE_API
})(MapContainer);

// class App extends Component {
//   render() {
//     return <div>Welcome to a Modern Minimal React Boilerplate</div>;
//   }
// }
//  hot export works with RHL. Remove line 11 when starting fullstack integration
// export default hot(module)(App);
//  Uncomment line 13 & delete line 11 when starting fullstack integration
//  export default App;
