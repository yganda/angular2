/**
 * Created by Andrei_Furs on 12/5/2016.
 */
import {Component} from '@angular/core';
import {template} from './footer.component.tpl';

@Component({
    selector: 'footer',
    template: template
})
export class FooterComponent {

    private copyright: string = 'created by Andrei Furs.';
}