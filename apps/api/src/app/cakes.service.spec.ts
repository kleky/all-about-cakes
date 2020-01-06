import { Test } from '@nestjs/testing';

import { CakesService } from './cakes.service';

describe('CakesService', () => {
  let service: CakesService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CakesService]
    }).compile();

    service = app.get<CakesService>(CakesService);
  });

  describe('getCakes', () => {
    it('should return array of cakes', () => {
      expect(service.getCakes().length).toEqual(10);
    });
  });
});
