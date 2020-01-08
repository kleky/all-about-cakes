import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { environment } from '../../environments/environment';

const apiRoot = environment.apiRoot + '/';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: apiRoot,
  entityHttpResourceUrls: {
    Cake: {
      entityResourceUrl: apiRoot + 'cakes',
      collectionResourceUrl: apiRoot + 'cakes'
    }
  }
}

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig
    }
  ]
})
export class DataStoreModule { }
