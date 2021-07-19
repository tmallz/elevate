import React, {useState} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"

function Map(props){
  const [selectedStation, setSelectedStation] = useState(null);

  return(
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{lat: 41.8781, lng:-87.6298}}
    >
      {/* fill this in with the positional data from the API call from train stations */}
      {props.map((station) => (
        <Marker key={props.stationID}  
        position={{lat: props.lat, lng: props.lng}}
        onClick={() => {
          setSelectedStation(station);
        }}
        />
      ))}

      {selectedStation && (
        <InfoWindow
        position={{lat: props.lat, lng: props.lng}}
        onCloseClick={() => {
          setSelectedStation(null);
        }}
        // add the info about the stations here
        ><div>Sation Details </div></InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;