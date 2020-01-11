import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { CakesComponent } from './cakes.component';
import { CakeService } from './cake.service';
import { of } from 'rxjs';
import { Cake } from '@cakes-ltd/api-interfaces';

describe('CakesComponent', () => {
  let spectator: Spectator<CakesComponent>;
  const cakes: Cake[] = [{
    id: 1,
    imageUrl: 'url',
    name: 'name',
    comment: 'comment',
    yumFactor: 10
  }]
  const createComponent = createComponentFactory({
    component: CakesComponent,
    providers: [mockProvider(CakeService, { getAll: () => of(cakes)})]
  });

  beforeEach(() => spectator = createComponent());

  it('should be truthy', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should load cakes from data store', () => {
    spectator.component.cakes$.subscribe(c => {
      expect(c).toEqual(cakes);
    });
  });

});
