import { IsInt, IsString, IsDate } from 'class-validator';

export class CreateMovieDto {
  @IsInt()
  mov_id: number;

  @IsString()
  mov_title: string;

  @IsInt()
  mov_year: number;

  @IsInt()
  mov_time: number;

  @IsString()
  mov_lang: string;

  @IsDate()
  mov_td_rel: Date;

  @IsString()
  mov_rel_country: string;
}
