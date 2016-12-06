/**
 * Created by Andrei_Furs on 12/6/2016.
 */
export const template: string = `
<div class="loading" [class.hidden]="!loading"><img src="assets/img/loading.gif"></div>
<city *ngFor="let city of cities" [city]="city" ></city>
`;