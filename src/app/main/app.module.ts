/**
 * Created by Andrei_Furs on 12/1/2016.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MapComponent } from '../map/map.component';
import { CityComponent } from '../cities/city/city.component';
import { CitiesComponent } from '../cities/cities.component';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
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