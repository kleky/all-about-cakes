import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('cakes/:id')
  async getCake(@Param() id: number): Promise<Cake> {
    return await this.cakesService.getCake(id);
  }

  @Post('cakes')
  async createCake(@Body() cake: Cake) {
    return await this.cakesService.createCake(cake);
  }
}
