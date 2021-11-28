import { useEffect, useState } from "react/cjs/react.development";
import ShowMoviesFromMovie from "../ShowMoviesFromMovie";
import { fetchApiRating } from "../api";

export default function Home() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchApiRating().then((data) => setMovies(data.results));
  }, []);

  return <>{movies && <ShowMoviesFromMovie movies={movies} />}</>;
}
