
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app/app.routes'; // Ensure this file exists and has a default export of AppModule
import { inject } from '@vercel/analytics';



platformBrowserDynamic().bootstrapModule(AppRoutingModule)
  .catch(err => console.error(err));
  inject();