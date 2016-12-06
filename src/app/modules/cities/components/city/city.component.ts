/**
 * Created by Andrei_Furs on 12/6/2016.
 */
import {template} from './city.component.tpl';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'city',
    template: template
})

export class CityComponent {

    @Input() city: Api.ICity;
}