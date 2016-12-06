/**
 * Created by Andrei_Furs on 12/6/2016.
 */
declare module Api {
    interface IWeatherInit {
        cod: string;
        list: ICity[];
        count: number;
        message: string;
    }
    interface ICity {
        id: number;
        dt: number;
        sys: ISys;
        name: string;
        wind: IWind;
        main: IWeather;
        coord: ICoord;
        clouds: IClouds;
        weather: IIcon[];
    }
    interface IClouds {
        all: number;
    }
    interface ICoord {
        lat: number;
        lon: number;
    }
    interface IWeather {
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
        pressure: number;
    }
    interface ISys {
        country: string;
    }
    interface IIcon {
        id: number;
        icon: string;
        main: string;
        description: string;
    }
    interface IWind {
        deg: number;
        speed: number;
    }
}


declare module 'Api/Interfaces' {
    export default Api;
}