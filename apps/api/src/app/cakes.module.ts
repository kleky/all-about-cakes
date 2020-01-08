import { Module } from '@nestjs/common';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { DbService } from './db.service';
import { CakesRepository } from '../aac-db/repositories/cakes.repository';

@Module({
  controllers: [CakesController],
  providers: [
    CakesService,
    CakesRepository,
    DbService
  ]
})
export class CakesModule {}
