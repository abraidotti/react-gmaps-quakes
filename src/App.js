import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react';
// import child component
import MapContainer from './MapContainer';
const env = require('env2')('../.env');

class App extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GKEY,
})(App)
