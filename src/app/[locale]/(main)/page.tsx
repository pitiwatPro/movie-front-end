import MovieList from "@/components/ui/home/movie-list";
import PreviewMovie from "@/components/ui/home/preview-movie";
import { movieUseCase } from "@/core/usecases/movie.usecase";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("movieType");
  const topMovies = await movieUseCase.getTopRatedMovies();
  const previewMovie = movieUseCase.randomMovie(topMovies);

  return (
    <div className="h-screen">
      <PreviewMovie previewMovie={previewMovie} />

      <div className="relative lg:-mt-24">
        <MovieList title={t("popular")} movies={topMovies} />
        <MovieList title={t("action")} movies={topMovies} />
        <MovieList title={t("comedy")} movies={topMovies} />
      </div>
    </div>
  );
}
