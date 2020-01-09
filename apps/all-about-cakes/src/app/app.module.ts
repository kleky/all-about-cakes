import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { CakesModule } from './cakes/cakes.module';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    CoreModule,
    CakesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
