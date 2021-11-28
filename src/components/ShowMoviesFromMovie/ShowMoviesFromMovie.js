import { Link, useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router";
import PropTypes from "prop-types";
import s from "./ShowMoviesFromMovie.module.scss";

export default function ShowMoviesFromMovie({ movies }) {
  const { url } = useRouteMatch();
  const location = useLocation();
  let updateURL = url === "/" ? "movie" : url;

  return (
    <ul className={s.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.movieItem}>
          <Link
            to={{
              pathname: `${updateURL}/${movie.id}`,
              state: { from: location },
            }}
          >
            <div className={s.thumb}>
              <img
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt={movie.title}
              ></img>
            </div>
            <p>{movie.title}</p>
            <p>{movie.popularity}</p>
            <p>{movie.overview}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

ShowMoviesFromMovie.propTypes = {
  movies: PropTypes.array,
};
