/**
 * Created by Andrei_Furs on 11/25/2016.
 */
import {WeatherAPI} from './src/weather';
import * as __ from 'lodash';

let api = new WeatherAPI();

api.getCurPosition().then((pos: Coordinates): number => pos.longitude);

// api.getWeather(`http://api.openweathermap.org/data/2.5/find?lat=`+ api.getCurPosition().then((pos: Coordinates): number => pos.latitude) +
//     `&lon=`+ api.getCurPosition().then((pos: Coordinates): number => pos.longitude) +`&cnt=50`)
//     .then((res) => {
//     __.each(res.list, city => {
//         let towns: NodeListOf<HTMLBodyElement> = document.getElementsByTagName('body');
//         let e: HTMLDivElement = document.createElement('div');
//         e.innerHTML = `
//              <div class="city">
//                  <div class="city-title">
//                      ` + city.name + `
//                  </div>
//                  <div class="city-main">
//                      <div class="weather">
//                          <img src="http://openweathermap.org/img/w/` + city.weather[0].icon + `.png">
//                          <div class="weather-params">
//                               <div class="param">
//                                  <span>` + Math.floor(city.main.temp) + `</span>
//                                  <span>` + city.main.humidity + `</span>
//                               </div>
//                               <div class="param">
//                                  <span>` + Math.floor(city.wind.speed) + `</span>
//                                  <span>` + city.clouds.all + `</span>
//                               </div>
//                               <div class="param">
//                                  <span>` + city.main.pressure + `</span>
//                               </div>
//                          </div>
//                      </div>
//                  </div>
//              </div>`;
//
//         towns[0].appendChild(e);
//     });
// });