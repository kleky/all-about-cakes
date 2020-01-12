import { Test } from '@nestjs/testing';

import { CakesService } from './cakes.service';
import { CakesRepository } from '../aac-db/repositories/cakes.repository';
import { DbService } from '../aac-db/db.service';
import { InsertResult } from 'typeorm';

const cake = {
  id: 1,
  name: `Cake 1`,
  comment: `Comment 1`,
  imageUrl: `..\\assets\\images\\cakes\\1.jpg`,
  yumFactor: 1
};

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

      const expectedCakes = [cake];
      jest.spyOn(cakesRepo, 'getAll')
        .mockResolvedValue(expectedCakes);

      const result = await service.getCakes();

      expect(result).toEqual(expectedCakes);

    });

  });

  describe('getCake', () => {

    it('should return a cake', async () => {

      jest.spyOn(cakesRepo, 'get')
        .mockResolvedValue(cake);

      const result = await service.getCake(1);

      expect(cakesRepo.get).toHaveBeenCalledWith(1);
      expect(result).toEqual(cake);

    });

  });

  describe('createCake', () => {

    it('should return an Insert Result', async () => {
      const expectedResult: InsertResult = {
        "identifiers": [ { "id": 1 } ],
        "generatedMaps": [ { "id": 1 } ],
        "raw": 1
      };
      jest.spyOn(cakesRepo, 'create').mockResolvedValue(expectedResult);

      const result = await service.createCake(cake);

      expect(cakesRepo.create).toHaveBeenCalledWith(cake);
      expect(result).toEqual(expectedResult);

    });

  });
});
