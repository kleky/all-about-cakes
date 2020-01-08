import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ICake } from '@cakes-ltd/api-interfaces';

@Entity({name: 'cakes'})
export class Cake extends BaseEntity implements ICake {

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
