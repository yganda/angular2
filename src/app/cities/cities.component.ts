/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'cities',
    templateUrl: 'cities.component.tpl.html',
    styleUrls: ['cites.scss']
})
export class CitiesComponent {

    private longitude: number = 0;
    private latitude: number = 0;
    private townsCount: number = 50;
    private apiKey: string = 'fc67aa358fc646401276f858e94302a6';
    private apiStr: string;

    private cities: Api.ICity[];
    private loading: boolean = true;

    constructor() {}

    ngOnInit() {
        this.init()
            .then(() => this.getWeather(this.apiStr))
            .then((res: Api.IWeatherInit): void => {
            this.cities = res.list;
            this.loading = false;
        });
    }

    protected setCoords = (pos: Coordinates): void => {
        this.longitude = pos.longitude;
        this.latitude = pos.latitude;
        this.apiStr = `http://api.openweathermap.org/data/2.5/find?lat=` + this.latitude +
            `&lon=` + this.longitude + `&cnt=` + this.townsCount + `&APPID=` + this.apiKey;
    };

    protected getWeather(apiStr: string) {
        return fetch(new Request(apiStr))
               .then((response: Response) => response.json())
    }

    protected init: () => Promise<void> = (): Promise<void> =>
        this.getCurPosition()
            .then((pos: Coordinates): void => this.setCoords(pos))
            .catch((err: PositionError): void => console.log('err'));

    protected getCurPosition: () => Promise<Coordinates|PositionError> = (): Promise<Coordinates|PositionError> =>
        new Promise((resolve: Function, reject: Function) => {
            let options: PositionOptions = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            let success: PositionCallback = (pos: Position): void => {
                resolve(pos.coords);
            };
            let error: PositionErrorCallback = (err: PositionError): void => {
                reject(err);
            };
            navigator.geolocation.getCurrentPosition(success, error, options);
        });
}