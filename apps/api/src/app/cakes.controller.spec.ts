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
          useValue: {
            getCakes: jest.fn(),
            createCake: jest.fn(),
            getCake: jest.fn(),
          },
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

  describe('createCake', () => {
    it('should call CakeService Create', async () => {
      jest.spyOn(cakesService, 'createCake');

      await appController.createCake({
        id: 1,
        name: 'Cake',
        comment: 'Comment',
        imageUrl: '..\\assets\\images\\cakes\\1.jpg',
        yumFactor: 10
      });

      expect(cakesService.createCake).toHaveBeenCalled();

    });
  });

  describe('getCake', () => {
    it('should call CakeService getCake', async () => {
      jest.spyOn(cakesService, 'getCake');

      await appController.getCake(1);

      expect(cakesService.getCake).toHaveBeenCalledWith(1);

    });
  });

});
