import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import star from "../assets/images/star.png";
import { imageBaseURL } from "../App";

export default function MoviesSection({ base_api_url, api_key, name }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `${base_api_url}?api_key=${api_key}&language=en-US&page=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching upcoming movies:", error);
      });
  }, [base_api_url, api_key]);

  const moviesList = movies.map((movie) => {
    const date = movie.release_date.split("-")[0];
    const rate = movie.vote_average.toFixed(1);
    return (
      <div
        className="slide"
        key={movie.id}
        onClick={() => {
          window.location.pathname = "/details";
          localStorage.setItem("movieId", movie.id);
        }}>
        <img src={`${imageBaseURL}w342${movie.poster_path}`} alt="img" />
        <h2>{movie.title}</h2>
        <div className="rate">
          <span>
            <img src={star} alt="" /> {rate}
          </span>
          <span>{date}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="movies-section">
      <h1>{name}</h1>
      <div className="slider">{moviesList}</div>
    </div>
  );
}

MoviesSection.propTypes = {
  base_api_url: PropTypes.string.isRequired,
  api_key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
