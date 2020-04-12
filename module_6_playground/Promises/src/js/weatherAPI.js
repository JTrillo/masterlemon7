import { httpClient } from './httpClient';
const apiKey = 'd9453f9e1bb33862136764050126e48b';

export const getCurrentWeather = (city) => {
    const uri = `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`;
    return httpClient.get(uri);
};

export const getForecastWeather = (city) => {
    const uri = `http://api.openweathermap.org/data/2.5/forecast?q=${city.name}&appid=${apiKey}`;
    return httpClient.get(uri);
};