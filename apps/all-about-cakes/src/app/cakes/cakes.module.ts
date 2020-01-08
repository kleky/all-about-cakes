import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakesComponent } from './cakes.component';
import { DataStoreModule } from '../store/data-store.module';



@NgModule({
  declarations: [CakesComponent],
  imports: [
    CommonModule,
    DataStoreModule,
  ],
  exports: [
    CakesComponent,
  ]
})
export class CakesModule { }
