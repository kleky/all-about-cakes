import {Injectable} from '@angular/core';
import {Connection, ConnectionOptions, createConnection} from 'typeorm';
import { Cake } from './cake.entity';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public connection: Promise<Connection>;
  private readonly options: ConnectionOptions;

  constructor() {
    this.options = {
      type: 'sqlite',
      database: "aac-db",
      entities: [Cake],
      synchronize: true,
      logging: 'all',
    };
    this.connection = createConnection(this.options);

    const cakes: Cake[] = [];
    this.connection.then(async conn => {

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
}
