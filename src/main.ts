// App bootstrap
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Polyfill Zone.js
import 'zone.js/dist/zone.js';

// Global styles
import './styles.css';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log(`App started at ${new Date().toLocaleTimeString()}`))
  .catch(err => console.log(err));
