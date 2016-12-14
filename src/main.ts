/**
 * Created by Andrei_Furs on 12/1/2016.
 */
import 'core-js/es6';
import 'core-js/es7/reflect';
// RxJS
import 'rxjs';
import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/main/app.module';
import { enableProdMode } from "@angular/core";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
