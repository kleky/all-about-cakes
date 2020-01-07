import { Module } from '@nestjs/common';
import { CakesModule } from './cakes.module';

@Module({
  imports: [
    CakesModule,
  ],
})
export class AppModule {}
