import { Injectable } from '@nestjs/common';
import { DbService } from '../db.service';
import { Cake, CakeEntity } from '@cakes-ltd/api-interfaces';
import { InsertResult } from 'typeorm';

@Injectable()
export class CakesRepository {

  constructor(private readonly db: DbService) {}

  async getAll(): Promise<Cake[]> {
    const conn = await this.db.connection;
    const repo = await conn.manager.getRepository(CakeEntity);
    return repo.createQueryBuilder('cakes')
      .getMany();
  }

  async create(cake: Cake): Promise<InsertResult> {
    const conn = await this.db.connection;
    const repo = await conn.manager.getRepository(CakeEntity);
    const newCake = repo.create(cake);
    return repo.insert(newCake);
  }

  async get(id: number): Promise<Cake> {
    const conn = await this.db.connection;
    const repo = await conn.manager.getRepository(CakeEntity);
    return repo.findOneOrFail(id);
  }
}
