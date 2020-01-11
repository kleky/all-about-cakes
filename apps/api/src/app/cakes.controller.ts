import { Controller, Get } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { Cake } from '@cakes-ltd/api-interfaces';

@Controller()
export class CakesController {

  constructor(private readonly cakesService: CakesService) {
  }

  @Get('cakes')
  getCakes(): Promise<Cake[]> {
    return this.cakesService.getCakes();
  }
}
