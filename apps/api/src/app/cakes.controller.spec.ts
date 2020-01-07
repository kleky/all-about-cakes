import { Test, TestingModule } from '@nestjs/testing';

import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { ICake } from '@cakes-ltd/api-interfaces';
import { DbService } from './db.service';

describe('CakesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CakesController],
      providers: [CakesService, DbService]
    }).compile();
  });

  describe('getCakes', () => {
    it('should return array of type Cake', () => {
      const appController = app.get<CakesController>(CakesController);
      const cakesService = app.get<CakesService>(CakesService);
      const expectedCakes: ICake[] = [{
        id: 1,
        name: "Cake",
        comment: "Comment",
        imageUrl: "..\\assets\\images\\cakes\\1.jpg",
        yumFactor: 10,
      }];
      spyOn(cakesService, "getCakes").and.returnValue(expectedCakes)
      expect(appController.getCakes()).toEqual(expectedCakes);
    });
  });
});
