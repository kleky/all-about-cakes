import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakesComponent } from './cakes.component';
import { DataStoreModule } from '../store/data-store.module';
import { AddCakeComponent } from './add-cake/add-cake.component';
import { CakesRoutingModule } from './cakes-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CakesComponent, AddCakeComponent],
  imports: [
    CommonModule,
    DataStoreModule,
    CakesRoutingModule,
    FormsModule
  ],
  exports: [
    CakesComponent,
    AddCakeComponent,
  ]
})
export class CakesModule { }
