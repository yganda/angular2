/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'header.component.tpl.html',
    styleUrls: ['header.scss']
})
export class HeaderComponent {

    private title: string = 'Google maps and Wather app v 1.1';
}