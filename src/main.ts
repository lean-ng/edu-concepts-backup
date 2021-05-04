// App bootstrap
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Global styles
import './styles.css';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log(`App started at ${new Date().toLocaleTimeString()}`))
  .catch(err => console.log(err));
