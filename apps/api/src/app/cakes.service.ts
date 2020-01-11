import { Injectable } from '@nestjs/common';
import { Cake } from '@cakes-ltd/api-interfaces';
import { CakesRepository } from '../aac-db/repositories/cakes.repository';
import { InsertResult } from 'typeorm';

@Injectable()
export class CakesService {

  constructor(private readonly cakesRepo: CakesRepository) {
  }

  async getCakes(): Promise<Cake[]> {
    return this.cakesRepo.getAll();
  }

  async createCake(cake: Cake): Promise<InsertResult> {
    return this.cakesRepo.create(cake);
  }

  async getCake(id: number): Promise<Cake> {
    return this.cakesRepo.get(id);
  }
}

