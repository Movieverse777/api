import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = new Movie();
    movie.mov_title = createMovieDto.mov_title;
    movie.mov_year = createMovieDto.mov_year;
    movie.mov_time = createMovieDto.mov_time;
    movie.mov_lang = createMovieDto.mov_lang;
    movie.mov_td_rel = createMovieDto.mov_td_rel;
    movie.mov_rel_country = createMovieDto.mov_rel_country;

    return this.moviesRepository.save(movie);
  }

  async findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  findOne(mov_id: number): Promise<Movie> {
    return this.moviesRepository.findOneBy({ mov_id: mov_id });
  }

  async remove(mov_id: string): Promise<void> {
    await this.moviesRepository.delete(mov_id);
  }
}
