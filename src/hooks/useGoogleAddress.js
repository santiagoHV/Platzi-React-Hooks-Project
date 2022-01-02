import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAVEQFFmu3jkfzXgPxNwrfhAp8B3AnDZQg`;

    useEffect(() => {
        console.log(API)
        const response = axios.get(API)
            .then(
                response => {
                    console.log(response.data.results[0].geometry.location)
                    setMap(response.data.results[0].geometry.location)
                }
            )
    }, [])

    return map;
}

export default useGoogleAddress;