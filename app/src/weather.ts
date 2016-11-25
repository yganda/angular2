export class WeatherAPI {

    constructor() {
    }

    getWeather(url: string) {
        return fetch(new Request(url)).then((response: Response) => response.json())
    }

    getCurPosition: () => Promise<Coordinates|PositionError> = (): Promise<Coordinates|PositionError> =>
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