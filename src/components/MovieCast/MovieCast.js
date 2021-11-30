import PropTypes from "prop-types";
import s from "./MovieCast.module.scss";

export default function MovieCastDetails({ cast }) {
  return (
    <ul className={s.castList}>
      {cast.map((item) => {
        return (
          <li key={item.id} className={s.castItem}>
            <div>
              <img
                src={
                  item.profile_path &&
                  `https://image.tmdb.org/t/p/w500${item.profile_path}`
                }
                alt={item.original_name}
                width="294"
              ></img>
            </div>
            <div></div>
            <h4>{item.original_name}</h4>
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieCastDetails.propTypes = {
  cast: PropTypes.array,
};
