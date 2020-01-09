import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakesComponent } from './cakes.component';
import { AddCakeComponent } from './add-cake/add-cake.component';


const cakeRoutes: Routes = [
  { path: '', component: CakesComponent },
  { path: 'add', component: AddCakeComponent },
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
