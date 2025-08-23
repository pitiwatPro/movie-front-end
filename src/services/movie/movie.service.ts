import { MovieRepository } from "@/core/adapters/movie.repository";
import { MovieItem } from "@/core/models/movie-Item.model";

export class MovieService implements MovieRepository {
  getTopRatedMovies(): Promise<MovieItem[]> {
    throw new Error("Method not implemented.");
  }
}
