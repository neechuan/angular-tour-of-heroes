import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';

// ADD enableProdMode(); BEFORE BOOTSTRAP
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
