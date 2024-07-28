import { useEffect, useState } from "react";
import { api_key, imageBaseURL } from "../App";
import star from "../assets/images/star.png";
import loading from "../assets/images/loader.svg";

const genresId = localStorage.getItem("genreId");
const langId = localStorage.getItem("langId");
const GenreName = localStorage.getItem("GenreName");
const cat = localStorage.getItem("cat");
const searchValue = localStorage.getItem("searchValue");

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      cat === "lang"
        ? `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_original_language=${langId}&page=${page}`
        : cat === "genre"
        ? `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genresId}&page=${page}`
        : `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setLoad(true);
        setBtnLoad(false);
      });
  }, [page]);

  const moviesList = movies.map((movie, index) => {
    return (
      <div
        className="slide"
        key={index}
        onClick={() => {
          window.location.pathname = "/details";
          localStorage.setItem("movieId", movie.id);
        }}>
        <img src={`${imageBaseURL}w342${movie.poster_path}`} alt="img" />
        <h2>{movie.title}</h2>
        <div className="rate">
          <span>
            <img src={star} alt="" /> {movie.vote_average.toFixed(1)}
          </span>
          <span>{movie.release_date.split("-")[0]}</span>
        </div>
      </div>
    );
  });

  return load ? (
    <div className="container">
      {cat === "search" ? (
        <h1>
          Results For <span style={{ color: "#db0028" }}>{GenreName}</span>{" "}
        </h1>
      ) : (
        <h1>
          All <span style={{ color: "#db0028" }}>{GenreName}</span> Movies
        </h1>
      )}
      <div className="movie-list">{moviesList}</div>
      <button
        onClick={() => {
          setBtnLoad(true);
          setPage((prev) => prev + 1);
        }}>
        <span
          style={{ display: btnLoad ? "block" : "none" }}
          className="loading"></span>
        See More
      </button>
    </div>
  ) : (
    <div className="loadingSvg">
      <img src={loading} alt="loading" />
    </div>
  );
}
