import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AddCakeComponent } from './add-cake.component';
import { CakeService } from '../cake.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('AddCakeComponent', () => {
  let spectator: Spectator<AddCakeComponent>;
  const createComponent = createComponentFactory({
    component: AddCakeComponent,
    mocks: [CakeService, Router],
    imports: [FormsModule],
  });

  beforeEach(() => spectator = createComponent());

  it('should be truthy', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should initialize a new cake', () => {
    // todo
  });

  describe("Save", () => {
    it('should call cake service Add then route to root', () => {
      // todo
    });
  })

});
