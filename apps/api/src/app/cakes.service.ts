import { Injectable } from '@nestjs/common';
import { ICake } from '@cakes-ltd/api-interfaces';
import { CakesRepository } from '../aac-db/repositories/cakes.repository';

@Injectable()
export class CakesService {

  constructor(private readonly cakesRepo: CakesRepository) {
  }

  async getCakes(): Promise<ICake[]> {
    return this.cakesRepo.getAll();
  }

}

