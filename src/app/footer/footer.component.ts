/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'footer',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'footer.component.tpl.html',
    styleUrls: ['footer.scss']
})
export class FooterComponent {

    private copyright: string = 'created by Andrei Furs.';
}