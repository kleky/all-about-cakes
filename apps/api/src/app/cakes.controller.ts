import { Body, Controller, Get, Post } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { Cake } from '@cakes-ltd/api-interfaces';

@Controller()
export class CakesController {

  constructor(private readonly cakesService: CakesService) {
  }

  @Get('cakes')
  async getCakes(): Promise<Cake[]> {
    return await this.cakesService.getCakes();
  }

  @Post('cakes')
  async createCake(@Body() cake: Cake) {
    return await this.cakesService.createCake(cake);
  }
}
