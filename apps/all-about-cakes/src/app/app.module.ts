import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { CakesModule } from './cakes/cakes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CakesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
