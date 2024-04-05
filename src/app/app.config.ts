import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularSvgIconModule.forRoot(),
      HttpClientModule,
      BrowserModule,
    ),
    provideAnimations(),
  ],
};
