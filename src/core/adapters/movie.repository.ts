import { MovieItem } from "../models/movie-Item.model";

export interface MovieRepository {
  getTopRatedMovies(): Promise<MovieItem[]>;
}
