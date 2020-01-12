import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakesComponent } from './cakes.component';
import { DataStoreModule } from '../store/data-store.module';
import { AddCakeComponent } from './add-cake/add-cake.component';
import { CakesRoutingModule } from './cakes-routing.module';
import { FormsModule } from '@angular/forms';
import { CakeDetailsComponent } from './cake-details/cake-details.component';

@NgModule({
  declarations: [CakesComponent, AddCakeComponent, CakeDetailsComponent],
  imports: [
    CakesRoutingModule,
    CommonModule,
    DataStoreModule,
    FormsModule,
  ],
  exports: [
    CakesComponent,
    AddCakeComponent,
    CakeDetailsComponent,
  ],
})
export class CakesModule { }
