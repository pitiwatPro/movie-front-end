import Image from "next/image";
import { Button } from "@/components/common/button";
import { MovieItem } from "@/core/models/movie-Item.model";

export default function PreviewMovie(props: { previewMovie: MovieItem }) {
  const { previewMovie } = props;
  return (
    <div className="w-full xl:h-screen lg:overflow-hidden relative">
      <Image
        src={previewMovie.fullImage}
        alt={previewMovie.title}
        layout="responsive"
        width={400}
        height={200}
        priority
      />

      <div className="absolute pl-3 lg:pl-10 top-14 md:top-1/2 w-full">
        <h1 className="text-base xl:text-3xl font-bold">#1 TV Shows today</h1>
        <p className="text-sm xl:text-2xl md:w-1/2 line-clamp-3 mt-2">
          {previewMovie.overview}
        </p>
        <div className="flex gap-4">
          <Button className="mt-6 text-secondary" variant="default" size="lg">
            Watch Now
          </Button>
          <Button
            className="mt-6 text-primary bg-info"
            variant="default"
            size="lg"
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
