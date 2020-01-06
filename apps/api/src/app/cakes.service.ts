import { Injectable } from '@nestjs/common';
import { Cake } from '@cakes-ltd/api-interfaces';

@Injectable()
export class CakesService {
  getCakes(): Cake[] {
    const cakes = [];
    for (let i = 1; i <= 10; i++) {
      cakes.push(this.generateCake(i));
    }
    return cakes;
  }

  private generateCake(index: number): Cake {
    return {
      id: index,
      name: `Cake ${index}`,
      comment: `Comment ${index}`,
      imageUrl: `..\\assets\\images\\cakes\\${index}.jpg`,
      yumFactor: index,
    };
  }

}
