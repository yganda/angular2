/**
 * Created by Andrei_Furs on 12/1/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {HttpModule} from '@angular/http';
import {HeaderComponent} from '../header/components/header.component';
import {FooterComponent} from '../footer/components/footer.component';
import {MapComponent} from '../map/components/map.component';
import {CityComponent} from '../cities/components/city/city.component';
import {CitiesComponent} from '../cities/components/cities.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCWo6j1ZDSnQcxNgdb068Af6dm36r2MU-g'
        })
    ],
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, MapComponent, CityComponent, CitiesComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }