import Image from "next/image";
import { Button } from "@/components/common/button";
import { MovieItem } from "@/core/models/movie-Item.model";
import { getTranslations } from "next-intl/server";

export default async function PreviewMovie(props: { previewMovie: MovieItem }) {
  const { previewMovie } = props;
  const t = await getTranslations();

  return (
    <div className="aspect-3/2 lg:aspect-auto lg:h-screen overflow-hidden relative">
      <Image
        src={previewMovie.fullImage}
        alt={previewMovie.title}
        fill
        style={{ objectFit: "cover" }}
        priority
        />

      <div className="absolute pl-3 lg:pl-10 top-14 md:top-1/2 w-full text-primary">
        <h1 className="text-base xl:text-3xl font-bold">{t('homePage.top1')}</h1>
        <p className="text-sm xl:text-2xl md:w-1/2 line-clamp-3 mt-2">
          {previewMovie.overview}
        </p>
        <div className="flex gap-4">
          <Button
            className="mt-6 text-secondary hover:scale-105 duration-300"
            variant="default"
            size="lg"
          >
            {t("button.play")}
          </Button>
          <Button
            className="mt-6 text-primary bg-info hover:scale-105 hover:bg-info duration-300"
            variant="default"
            size="lg"
          >
            {t("button.info")}
          </Button>
        </div>
      </div>
    </div>
  );
}
