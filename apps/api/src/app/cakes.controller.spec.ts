import { Test, TestingModule } from '@nestjs/testing';

import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { ICake } from '@cakes-ltd/api-interfaces';

describe('CakesController', () => {
  let app: TestingModule;
  let appController: CakesController;
  let cakesService: CakesService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CakesController],
      providers: [CakesService]
    }).compile();

    appController = app.get<CakesController>(CakesController);
    cakesService = app.get(CakesService);
  });

  describe('getCakes', () => {
    it('should return array of type Cake', async () => {

      const expectedCakes: ICake[] = [{
        id: 1,
        name: 'Cake',
        comment: 'Comment',
        imageUrl: '..\\assets\\images\\cakes\\1.jpg',
        yumFactor: 10
      }];
      jest.spyOn(cakesService, 'getCakes')
        .mockResolvedValue(expectedCakes);

      expect(appController.getCakes()).toEqual(expectedCakes);
    });
  });
});
