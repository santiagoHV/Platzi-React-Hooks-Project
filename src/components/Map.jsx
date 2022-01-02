import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({data}) => {
    const mapStyles = {
        height: '50vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: 19.4326,
        lng: -99.1332
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyDDBeIU3j2G5MH3qkH6WiaHpzmLjWTP3GE">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>

    );
}

export default Map;