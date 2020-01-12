import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { Cake } from '@cakes-ltd/api-interfaces';
import { CakeDetailsComponent } from './cake-details.component';
import { CakeService } from '../cake.service';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';

describe('CakeDetailsComponent', () => {
  let spectator: Spectator<CakeDetailsComponent>;
  const cake: Cake = {
    id: 1,
    imageUrl: 'url',
    name: 'name',
    comment: 'comment',
    yumFactor: 10
  };

  const createComponent = createComponentFactory({
    component: CakeDetailsComponent,
    mocks: [CakeService],
    detectChanges: false,
    providers: [ {
      provide: ActivatedRoute,
      useValue: {snapshot: {
        paramMap: convertToParamMap({id: "1"})
        } },
    },]
  });

  let activatedRoute;
  let cakeService;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should be truthy', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe("ngOnInit", () => {

    it('should load cake from data store', () => {
      activatedRoute = spectator.get(ActivatedRoute);
      cakeService = spectator.get(CakeService);
      cakeService.getByKey.mockReturnValue(cake);

      spectator.component.ngOnInit();

      expect(cakeService.getByKey).toHaveBeenCalledWith("/1");
      expect(spectator.component.cake).toEqual(cake);
    });


  });
});
