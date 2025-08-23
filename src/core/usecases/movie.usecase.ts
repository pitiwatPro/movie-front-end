import { MovieMockService } from "@/services/movie/movie.mock.service";
import { MovieRepository } from "../adapters/movie.repository";
import { MovieItem } from "../models/movie-Item.model";

class MovieUseCase {
  constructor(private movieRepository: MovieRepository) {}

  async getTopRatedMovies(): Promise<MovieItem[]> {
    return this.movieRepository.getTopRatedMovies();
  }
}

export const movieUseCase = new MovieUseCase(new MovieMockService());
