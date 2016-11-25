export class WeatherAPI {

    protected longitude: number = 0;
    protected latitude: number = 0;
    private townsCount: number = 50;
    private apiKey: string = 'fc67aa358fc646401276f858e94302a6';

    constructor() {
    }

    protected setCoords = (pos: Coordinates): void => {
        this.longitude = pos.longitude;
        this.latitude = pos.latitude;
    };

    getLong: () => number = (): number =>
        this.longitude;

    getLat: () => number = (): number =>
        this.latitude;

    getTowns: () => number = (): number =>
        this.townsCount;

    getKey: () => string = (): string =>
        this.apiKey;

    getWeather(url: string) {
        return fetch(new Request(url)).then((response: Response) => response.json())
    }

    init: () => Promise<void> = (): Promise<void> =>
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