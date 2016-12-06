/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import {Component} from '@angular/core';
import {template} from './map.component.tpl';

@Component({
    selector: 'map',
    template: template
})
export class MapComponent {
    private lat: number = 51.678418;
    private lng: number = 7.809007;
}