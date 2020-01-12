import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { CakesComponent } from './cakes.component';
import { CakeService } from './cake.service';
import { of } from 'rxjs';
import { Cake } from '@cakes-ltd/api-interfaces';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

describe('CakesComponent', () => {
  let spectator: Spectator<CakesComponent>;
  const cakes: Cake[] = [{
    id: 1,
    imageUrl: 'url',
    name: 'name',
    comment: 'comment',
    yumFactor: 10
  }];
  const createComponent = createComponentFactory({
    component: CakesComponent,
    mocks: [Router, ActivatedRoute],
    providers: [mockProvider(CakeService, { getAll: () => of(cakes)})],
    imports: [RouterModule],
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
