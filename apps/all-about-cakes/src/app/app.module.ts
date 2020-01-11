import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
    CakesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
