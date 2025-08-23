import { MovieRepository } from "@/core/adapters/movie.repository";
import { MovieItem } from "@/core/models/movie-Item.model";
import { delay } from "@/lib/utils";

export class MovieMockService implements MovieRepository {
  async getTopRatedMovies(): Promise<MovieItem[]> {
    await delay(1000);

    return Promise.resolve([
      new MovieItem(
        "1",
        "Inception",
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        "/mock/mock-movie2.jpg",
        "/mock/mock-movie2.jpg"
      ),
      new MovieItem(
        "2",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "3",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "4",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "5",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "6",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "7",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "8",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "9",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "10",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
      new MovieItem(
        "12",
        "The Dark Knight",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "/mock/mock-movie1.jpg",
        "/mock/mock-movie1.jpg"
      ),
    ]);
  }
}
