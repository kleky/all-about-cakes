import { Injectable } from '@nestjs/common';
import { Cake } from '@cakes-ltd/api-interfaces';
import { CakesRepository } from '../aac-db/repositories/cakes.repository';

@Injectable()
export class CakesService {

  constructor(private readonly cakesRepo: CakesRepository) {
  }

  async getCakes(): Promise<Cake[]> {
    return this.cakesRepo.getAll();
  }

}

