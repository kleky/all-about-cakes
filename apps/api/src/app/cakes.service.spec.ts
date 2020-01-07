import { Test } from '@nestjs/testing';

import { CakesService } from './cakes.service';
import { CakesRepository } from '../aac-db/repositories/cakes.repository';
import { DbService } from './db.service';

describe('CakesService', () => {
  let service: CakesService;
  let cakesRepo: CakesRepository;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CakesService, CakesRepository, DbService]
    }).compile();

    service = app.get<CakesService>(CakesService);
    cakesRepo = app.get<CakesRepository>(CakesRepository);
  });

  describe('getCakes', () => {

    it('should return array of cakes', async () => {

      const expectedCakes = [{
        id: 1,
        name: `Cake ${1}`,
        comment: `Comment ${1}`,
        imageUrl: `..\\assets\\images\\cakes\\${1}.jpg`,
        yumFactor: 1
      }];
      jest.spyOn(cakesRepo, 'getAll')
        .mockResolvedValue(expectedCakes);

      const result = await service.getCakes();

      expect(result).toEqual(expectedCakes);

    });

  });
});
