import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AddCakeComponent } from './add-cake.component';
import { CakeService } from '../cake.service';

describe('CakesComponent', () => {
  let spectator: Spectator<AddCakeComponent>;
  const createComponent = createComponentFactory({
    component: AddCakeComponent,
    mocks: [CakeService]
  });

  beforeEach(() => spectator = createComponent());

  it('should be truthy', () => {
    expect(spectator.component).toBeTruthy();
  });

});
