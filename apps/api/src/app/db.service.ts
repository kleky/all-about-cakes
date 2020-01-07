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
  }
}
