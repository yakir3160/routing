import axios from 'axios';
import { openWeatherApiKey } from '../config/index.js';


const createURL = (lat ,lon) => {
    console.log("Creating URL with lat:", lat, "lon:", lon);
    
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`;
}

export const getWeather = async (city,state,country) => {
    try {
        const geolocationData = await getGeolocation(city,state,country)[0];

        const reqUrl =  await createURL(geolocationData.lat, geolocationData.lon);
        console.log("Request URL:", reqUrl);
        
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
       
        throw error;
    }
};


export const getGeolocation = async (city,state,country) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${openWeatherApiKey}&units=metric`);
        return response.data;
    } catch (error) {
        throw error;
    }
};