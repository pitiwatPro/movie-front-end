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

  
  shuffleMovies(movies: MovieItem[]): MovieItem[] {
    const copiedMovies = [...movies];
    for (let i = copiedMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiedMovies[i], copiedMovies[j]] = [copiedMovies[j], copiedMovies[i]];
    }
    return copiedMovies;
  }
}

export const movieUseCase = new MovieUseCase(new MovieService());
