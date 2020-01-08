import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Cake } from '../../../../../libs/entities/cake.entity';

@Injectable({ providedIn: 'root' })
export class CakeService extends EntityCollectionServiceBase<Cake> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cake', serviceElementsFactory);
  }
}
