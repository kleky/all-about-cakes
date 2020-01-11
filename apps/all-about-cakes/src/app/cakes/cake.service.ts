import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Cake } from '@cakes-ltd/api-interfaces';

@Injectable({ providedIn: 'root' })
export class CakeService extends EntityCollectionServiceBase<Cake> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cake', serviceElementsFactory);
  }
}
