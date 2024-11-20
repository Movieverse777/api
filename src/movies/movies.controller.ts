import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':mov_id')
  findOne(@Param('mov_id', ParseIntPipe) id: number): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  @Delete(':mov_id')
  remove(@Param('mov_id') id: string): Promise<void> {
    return this.moviesService.remove(id);
  }
}
