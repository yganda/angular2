/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import {Component} from '@angular/core';
import {template} from './header.component.tpl';

@Component({
    selector: 'header',
    template: template
})
export class HeaderComponent {

    private title: string = 'Google maps and Wather app v 1.1';
}