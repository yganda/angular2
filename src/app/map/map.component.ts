/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: 'map.component.tpl.html',
    styleUrls: ['map.scss']
})
export class MapComponent {
    private lat: number = 51.678418;
    private lng: number = 7.809007;
}