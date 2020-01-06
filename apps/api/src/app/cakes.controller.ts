import { Controller, Get } from '@nestjs/common';

import { Cake } from '@cakes-ltd/api-interfaces';

import { CakesService } from './cakes.service';

@Controller()
export class CakesController {
  constructor(private readonly cakesService: CakesService) {}

  @Get('cakes')
  getCakes(): Cake[] {
    return this.cakesService.getCakes();
  }
}
