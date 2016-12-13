/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'header',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'header.component.tpl.html',
    styleUrls: ['header.scss']
})
export class HeaderComponent {

    private title: string = 'Google maps and Wather app v 1.1';
}