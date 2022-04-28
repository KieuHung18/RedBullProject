import logo from './logo.svg';
import './App.css';
import jquery  from 'jquery';
import { Map, GoogleApiWrapper ,InfoWindow, Marker} from 'google-maps-react';
import React from 'react';
import CurrentLocation from './Map';
function doAjaxPost() {
  jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/user",
      data: {mk: jquery("#input"),tk: ""},
      success: function(response){
        
          console.log(response.respone.name)
           console.log(response.respone.sdt)
          console.log(response.result)
          console.log(response)
       },
  });
  
}
const user={name:"Tan Phat"};
function App() {
  return (
    <button onClick={doAjaxPost} className='button' id='button-id'>connect</button>
    
  );
}
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCn9JX5IihuvuNRJYKPbFDrPtjQbtjJrRA'
})(MapContainer);
