import { useEffect, useState } from "react";
import menuIcon from "../src/assets/images/menu.png";
import menuCloseIcon from "../src/assets/images/menu-close.png";
import playIcon from "../src/assets/images/play_circle.png";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import MoviesSection from "./Components/MoviesSection";
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import loading from "./assets/images/loader.svg";
import MovieList from "./Components/MovieList";

export const imageBaseURL = "https://image.tmdb.org/t/p/";
export const api_key = "a06452976f2c72784fb4f4596dd0457e";

let interval;
export default function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [menuIconSrc, setMenuIconSrc] = useState(menuIcon);

  const handleSearchClick = () => {
    setIsSearchVisible(false);
  };

  const handleCloseClick = () => {
    setIsSearchVisible(true);
  };

  const handleMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
    setMenuIconSrc(isSidebarVisible ? menuIcon : menuCloseIcon);
  };

  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [genres, setGenres] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoad(true);
      })
      .catch((error) => {
        console.error("Error fetching the data: ", error);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }, []);

  const posterslist = movies.map((movie, index) => {
    const { poster_path, id } = movie;
    return (
      <button
        onClick={() => {
          clearInterval(interval);
          setActiveIndex(index);
          interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
          }, 5000);
        }}
        className={` ${index === activeIndex ? "active" : ""}`}
        key={id}>
        <img src={`${imageBaseURL}w342${poster_path}`} alt="img" />
      </button>
    );
  });

  const moviesList = movies.map((movie, index) => {
    const {
      backdrop_path,
      id,
      title,
      overview,
      release_date,
      vote_average,
      genre_ids,
    } = movie;

    const rate = vote_average.toFixed(1);
    const date = release_date.split("-")[0];
    const selectedGenerse = genre_ids
      .map((id, index) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? <span key={index}>{genre.name}</span> : null;
      })
      .filter((name) => name);

    return (
      <div className={`item ${index === activeIndex ? "active" : ""}`} key={id}>
        <img
          src={`${imageBaseURL}original${backdrop_path}`}
          alt="Slider Banner"
        />

        <div>
          <h1>{title}</h1>
          <div className="rate">
            <span>{date}</span>
            <span>{rate}</span>
          </div>
          <p>{selectedGenerse}</p>
          <p>{overview}</p>
          <div className="btn">
            <img src={playIcon} alt="Play Icon" />
            Watch Now
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header
        handleSearchClick={handleSearchClick}
        handleCloseClick={handleCloseClick}
        handleMenuClick={handleMenuClick}
        isSearchVisible={isSearchVisible}
        menuIconSrc={menuIconSrc}
      />
      <main>
        <SideBar isSidebarVisible={isSidebarVisible} />

        <article>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {load ? (
                    <>
                      <div className="banner">
                        {moviesList}
                        <div className="slider">{posterslist}</div>
                      </div>
                      <MoviesSection
                        name={"Upcoming Movies"}
                        base_api_url={
                          "https://api.themoviedb.org/3/movie/upcoming"
                        }
                        api_key={api_key}
                      />
                      <MoviesSection
                        name={"Top Rated Movies"}
                        base_api_url={
                          "https://api.themoviedb.org/3/movie/top_rated"
                        }
                        api_key={api_key}
                      />
                      <MoviesSection
                        name={"This Week Trending Movies"}
                        base_api_url={
                          "https://api.themoviedb.org/3/trending/movie/week"
                        }
                        api_key={api_key}
                      />
                    </>
                  ) : (
                    <div className="loadingSvg">
                      <img src={loading} alt="loading" />
                    </div>
                  )}
                </>
              }
            />

            <Route path="/details" element={<Details api_key={api_key} />} />

            <Route
              path="/movie-list"
              element={<MovieList api_key={api_key} />}
            />
          </Routes>
        </article>
      </main>
    </>
  );
}
