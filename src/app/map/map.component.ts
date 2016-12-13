/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'map',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'map.component.tpl.html',
    styleUrls: ['map.scss']
})
export class MapComponent {
    private lat: number = 51.678418;
    private lng: number = 7.809007;
}