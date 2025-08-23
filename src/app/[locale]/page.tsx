import MovieList from "@/components/ui/home/movie-list";
import PreviewMovie from "@/components/ui/home/preview-movie";
import { movieUseCase } from "@/core/usecases/movie.usecase";

export default async function Home() {
  const topMovies = await movieUseCase.getTopRatedMovies();
  const previewMovie = topMovies[0];
  const topMoviesList = topMovies.slice(1);

  return (
    <div className="h-screen">
      <PreviewMovie previewMovie={previewMovie} />

      <div className="relative lg:-mt-24">
        <MovieList title="Popular on Netflix" movies={topMoviesList} />
        <MovieList title="Action Movies" movies={topMoviesList} />
        <MovieList title="Comedy Movies" movies={topMoviesList} />
      </div>
    </div>
  );
}
