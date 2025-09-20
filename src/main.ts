import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // este es tu componente raíz

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
