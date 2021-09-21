import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Movie.css";

const summaryLength = 140;

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link // Similar to a tag
      to={{
        pathname: `/movie/${id}`,
        state: { id, title, year, summary, poster, genres },
      }}
    >
      <div className="movie">
        <img className="movie_poster" src={poster} alt={title}></img>
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genre">
                  <span>{genre}</span>
                </li>
              );
            })}
          </ul>
          <p className="movie_summary">{summary.slice(0, summaryLength)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.proptype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
