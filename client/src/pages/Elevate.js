import React, { Component } from "react";
import API from "../utils/API";
import Map from '../components/map';



class Elevate extends Component {
    //load stations taht are saved on card components
    //load in map component
    //nav buttons or something
    state = {
        nearbyStations: []
    }

    // componentDidMount(){
    //     API.getStations()
    //     .then(res => this.setState({nearbyStations: res.data}))
    // }


    render(){
        return (
            <div>
                <div style= {{width: '75vw', height: '75vh'}}>
                    <Map 
                        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
                        loadingElement = {<div style={{height: "100%"}} />}
                        containerElement = {<div style={{height: "100%"}} />}
                        mapElement = {<div style={{height: "100%"}} />}
                    />
                </div>
            </div>
    

        );
    }
  }


export default Elevate;
