import { Module } from '@nestjs/common';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { DbService } from './db.service';

@Module({
  controllers: [CakesController],
  providers: [CakesService, DbService]
})
export class CakesModule {}
