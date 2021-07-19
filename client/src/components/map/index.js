import React, {useState} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import stationData from "../../utils/stations.json"

function Map(props){
  const [selectedStation, setSelectedStation] = useState(null);

  return(
    <GoogleMap 
      defaultZoom={13}
      defaultCenter={{lat: 41.8781, lng:-87.6298}}
    >
      {/* fill this in with the positional data from the API call from train stations */}
      {stationData.map(station => (
        <Marker 
          key={station.name}  
          position={{lat: station.lat, lng: station.lng}}
          onClick={() => {
            setSelectedStation(station);
          }}
        /> 
      ))}

       {selectedStation && (
        <InfoWindow
        position={{lat: selectedStation.lat, lng: selectedStation.lng}}
        onCloseClick={() => {
          setSelectedStation(null);
        }}
        // add the info about the stations here
        ><div>{selectedStation.name}<br></br>{selectedStation.lines}</div>
        </InfoWindow>
      )} 
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;