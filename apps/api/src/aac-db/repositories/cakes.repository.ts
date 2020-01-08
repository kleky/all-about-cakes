import { Injectable } from '@nestjs/common';
import { DbService } from '../../app/db.service';
import { Cake } from '../../../../../libs/entities/cake.entity';
import { ICake } from '@cakes-ltd/api-interfaces';

@Injectable()
export class CakesRepository {

  constructor(private readonly db: DbService) {}

  async getAll(): Promise<ICake[]> {
    const conn = await this.db.connection;

    const repo = await conn.manager.getRepository(Cake);
    return repo.createQueryBuilder('cakes')
      .getMany();
  }
}
