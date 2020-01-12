import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakesComponent } from './cakes.component';
import { AddCakeComponent } from './add-cake/add-cake.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';


const cakeRoutes: Routes = [
  { path: '', component: CakesComponent },
  { path: 'add', component: AddCakeComponent },
  { path: 'details/:id', component: CakeDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(cakeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CakesRoutingModule { }
