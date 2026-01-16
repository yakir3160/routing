import axios from 'axios';
import { openWeatherApiKey } from '../config/index.js';
import { dateTimeFormater_il } from '../utils/dateTimeFormater_il.js';
import { getLocalTimeFromUTC } from '../utils/time.js';


const createURL = (lat, lon) => {
    console.log("Creating URL with lat:", lat, "lon:", lon);

    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}&units=metric`;
}


export const getGeolocation = async (city, state, country) => {
    try {
        let response = null
        if (state) {
            response = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)},${encodeURIComponent(state)},${encodeURIComponent(country)}&appid=${openWeatherApiKey}`
            );
        } else {
            response = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&appid=${openWeatherApiKey}`
            );
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getWeather = async (city, state, country) => {
    try {
        if (!openWeatherApiKey) {
            throw new Error('Weather API key is required');
        }
        const geolocationData = await getGeolocation(city, state, country);

        const reqUrl = await createURL(geolocationData[0].lat, geolocationData[0].lon);

        const response = await axios.get(reqUrl);
        console.log("Weather API Response:", response.data);

        const { main: weatherData, sys, weather, wind, timezone } = response.data;

        const condensedData = {
            temperature: weatherData.temp,
            feelsLike: weatherData.feels_like,
            maxTemperature: weatherData.temp_max,
            minTemperature: weatherData.temp_min,
            windSpeed: wind.speed,
            humidity: weatherData.humidity,
            description: weather[0].description,
            sunrise_IL: new Date(sys.sunrise * 1000).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
            sunset_IL: new Date(sys.sunset * 1000).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
            localSunrise: getLocalTimeFromUTC(sys.sunrise, timezone),
            localSunset: getLocalTimeFromUTC(sys.sunset, timezone)
        };
        console.log("Condensed Weather Data:", condensedData);
        return condensedData;
    } catch (error) {

        throw error;
    }
};
