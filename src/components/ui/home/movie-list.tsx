import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { MovieItem } from "@/core/models/movie-Item.model";

export default function MovieList(props: {
  title: string;
  movies: MovieItem[];
}) {
  const { title, movies } = props;
  return (
    <div className="text-primary">
      <h1 className="text-sm xl:text-2xl py-2 pl-2 lg:pl-10 font-medium">
        {title}
      </h1>
      <Carousel>
        <CarouselContent className="pl-2 lg:pl-10">
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5 shadow-md hover:scale-105 duration-300"
            >
              <Image
                className="w-full"
                src={movie.thumbnailImage}
                alt={movie.title}
                width={219}
                height={389}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
