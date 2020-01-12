import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Cake } from '@cakes-ltd/api-interfaces';

@Entity({name: 'cakes'})
export class CakeEntity extends BaseEntity implements Cake {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column()
  imageUrl: string;

  @Column()
  name: string;

  @Column()
  yumFactor: number;
}
