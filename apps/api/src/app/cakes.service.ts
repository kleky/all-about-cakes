import { Injectable } from '@nestjs/common';
import { DbService } from './db.service';
import { Cake } from './cake.entity';
import { ICake } from '@cakes-ltd/api-interfaces';

@Injectable()
export class CakesService {

  constructor(private readonly db: DbService) {
    const cakes: Cake[] = [];

    this.db.connection.then(async conn => {

      const repo = conn.getRepository(Cake);
      const count = await repo.count();

      // seed with initial data
      if(count === 0) {
        for (let i = 1; i <= 10; i++) {
          cakes.push(repo.create({
            name: `Cake ${i}`,
            comment: `Comment ${i}`,
            imageUrl: `..\\assets\\images\\cakes\\${i}.jpg`,
            yumFactor: i
          }))
        }
        repo.save(cakes)
          .then(e => console.log('Saved cakes', e))
          .catch(e => console.error('Error saving cakes', e));
      }

    });
  }

  async getCakes(): Promise<ICake[]> {
    const conn = await this.db.connection;

    const repo = await conn.manager.getRepository(Cake);
    return repo.createQueryBuilder('cakes')
      .getMany();
  }

}

