/**
 * Created by Andrei_Furs on 12/6/2016.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'city',
    templateUrl: 'city.component.tpl.html'
})

export class CityComponent {

    @Input() city: Api.ICity;
}