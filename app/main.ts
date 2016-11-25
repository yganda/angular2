/**
 * Created by Andrei_Furs on 11/25/2016.
 */
import {WeatherAPI} from './src/weather';
import * as __ from 'lodash';

let api: WeatherAPI = new WeatherAPI();

api.init()
    .then(() => api.getWeather(`//api.openweathermap.org/data/2.5/find?lat=` + api.getLat() +
    `&lon=` + api.getLong() + `&cnt=` + api.getTowns() + `&APPID=` + api.getKey()))
    .then((res) => {
    __.each(res.list, town => {
        let towns: HTMLCollectionOf<Element> = document.getElementsByClassName('m-weather');
        let e: HTMLDivElement = document.createElement('div');
        e.classList.add('town');
        e.innerHTML = `
             <div class="town-title">
                 Town name: ` + town.name + `
             </div>
             <div class="town-main">
                 <div class="weather">
                     <img src="http://openweathermap.org/img/w/` + town.weather[0].icon + `.png">
                     <div class="weather-params">
                          <div class="param">
                             <span>Temperature: ` + Math.floor(town.main.temp) + `</span>
                             <span>Humidity: ` + town.main.humidity + `</span>
                          </div>
                          <div class="param">
                             <span>Wind speed: ` + Math.floor(town.wind.speed) + `</span>
                             <span>Clouds: ` + town.clouds.all + `</span>
                          </div>
                          <div class="param">
                             <span>Pressure: ` + town.main.pressure + `</span>
                          </div>
                     </div>
                 </div>
             </div>`;

        towns[0].appendChild(e);
    });
});