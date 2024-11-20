import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  mov_id: number;

  @Column()
  mov_title: string;

  @Column()
  mov_year: number;

  @Column()
  mov_time: number;

  @Column()
  mov_lang: string;

  @Column()
  mov_td_rel: Date;

  @Column()
  mov_rel_country: string;
}
