import { Test, TestingModule } from '@nestjs/testing';

import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { Cake } from '@cakes-ltd/api-interfaces';

describe('CakesController', () => {
  let app: TestingModule;
  let appController: CakesController;
  let cakesService: CakesService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CakesController],
      providers: [
        {
          provide: CakesService,
          useValue: { getCakes: jest.fn() },
        }
      ]
    }).compile();

    appController = app.get<CakesController>(CakesController);
    cakesService = app.get(CakesService);
  });

  describe('getCakes', () => {
    it('should return array of type Cake', async () => {

      const expectedCakes: Cake[] = [{
        id: 1,
        name: 'Cake',
        comment: 'Comment',
        imageUrl: '..\\assets\\images\\cakes\\1.jpg',
        yumFactor: 10
      }];
      cakesService.getCakes = jest.fn().mockResolvedValue(expectedCakes);

      const result = await appController.getCakes();

      expect(result).toEqual(expectedCakes);
    });
  });
});
