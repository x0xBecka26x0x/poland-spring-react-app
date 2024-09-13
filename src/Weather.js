import React from "react";
import axios from "axios";
import { Circles } from 'react-loader-spinner';

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°F`);
    }
    
    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <Circles
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
        />
    )
}