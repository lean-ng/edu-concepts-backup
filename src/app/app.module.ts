import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  // Deklarationen dieses Moduls. Jede Komponente muss deklariert werden.
  declarations: [
    AppComponent
  ],
  // Module, deren Deklarationen importiert werden
  imports: [
  ],
  // Exportierte Deklarationen, die anderen Modulen bereitgestellt werden
  exports: [
  ],
  // Bootstrap-Komponenten
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
