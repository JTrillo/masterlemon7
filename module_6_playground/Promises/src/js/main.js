import { Drawer } from './Drawer';
import { Mapper } from './Mapper';
import * as weatherAPI from './weatherAPI';

const handlerCurrentWeatherSuccess = (mapper, drawer) => (data) => {
    const weatherSummaryEntities = mapper.currentWeather(data);
    drawer.drawWeather(weatherSummaryEntities);
};

const handlerForecastWeatherSuccess = (mapper, drawer) => (data) => {
    const forecastSummaryEntities = mapper.forecastWeather(data);
    drawer.drawForecastResult(forecastSummaryEntities);
}

const errorHandler = (err) => console.log(err); 

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button-weather');
    const drawer = new Drawer('results');
    const mapper = new Mapper();

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const cityInput = document.getElementById('input-city');
        if (cityInput.value) {
            Promise.all([
                weatherAPI.getCurrentWeather({ name: cityInput.value }),
                weatherAPI.getForecastWeather({ name: cityInput.value })
            ])
            .then((results) => {
                handlerCurrentWeatherSuccess(mapper, drawer)(results[0]);
                handlerForecastWeatherSuccess(mapper, drawer)(results[1]);
            })
            .catch(errorHandler);

            // Esto coge la primera promesa en terminar
            /*Promise.race([
                weatherAPI.getCurrentWeather({ name: cityInput.value }),
                weatherAPI.getForecastWeather({ name: cityInput.value })
            ])
            .then((data) => {
                if (JSON.parse(data).hasOwnProperty('weather')) {
                    handlerCurrentWeatherSuccess(mapper, drawer)(data);
                } else {
                    handlerForecastWeatherSuccess(mapper, drawer)(data);
                }
            })
            .catch(errorHandler);*/
        }
    });
});
