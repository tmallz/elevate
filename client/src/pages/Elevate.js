import React, { useState, useEffect } from "react";
import Map from '../components/map';



function Elevate() {
    //load stations taht are saved on card components
    //load in map component
    //nav buttons or something


    return (
        <div style= {{width: '50vw', height: '50vh'}}>
         <Map 
            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAZx2oaWVFfDoJOeaZxiE8wqY9RxWE4Mko`}
            loadingElement = {<div style={{height: "100%"}} />}
            containerElement = {<div style={{height: "100%"}} />}
            mapElement = {<div style={{height: "100%"}} />}
         />
        </div>

    );
  }


export default Elevate;
