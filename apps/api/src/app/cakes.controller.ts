import { Controller, Get } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { ICake } from '@cakes-ltd/api-interfaces';

@Controller()
export class CakesController {

  constructor(private readonly cakesService: CakesService) {
  }

  @Get('cakes')
  getCakes(): Promise<ICake[]> {
    return this.cakesService.getCakes();
  }
}
