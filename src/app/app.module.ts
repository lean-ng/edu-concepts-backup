import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  // Deklarationen dieses Moduls. Jede Komponente muss deklariert werden.
  declarations: [
    AppComponent
  ],
  // Module, deren Deklarationen importiert werden
  imports: [
    BrowserModule
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
