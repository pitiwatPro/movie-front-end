import { MovieRepository } from "@/core/adapters/movie.repository";
import { MovieItem } from "@/core/models/movie-Item.model";
import movieApi from "../api/movie.api";

export class MovieService implements MovieRepository {
  async getTopRatedMovies(): Promise<MovieItem[]> {
    const data = await movieApi.get("/movies/top-rated");

    return data.map((item: any) => {
      return new MovieItem(
        item.id,
        item.title,
        item.overview,
        item.fullImage,
        item.thumbnailImage
      );
    });
  }
}
