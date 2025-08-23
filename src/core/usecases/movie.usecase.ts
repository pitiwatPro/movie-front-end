import { MovieRepository } from "../adapters/movie.repository";
import { MovieItem } from "../models/movie-Item.model";
import { MovieService } from "@/services/movie/movie.service";

class MovieUseCase {
  constructor(private movieRepository: MovieRepository) {}

  async getTopRatedMovies(): Promise<MovieItem[]> {
    return this.movieRepository.getTopRatedMovies();
  }

  randomMovie(movies: MovieItem[]): MovieItem {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }
}

export const movieUseCase = new MovieUseCase(new MovieService());
