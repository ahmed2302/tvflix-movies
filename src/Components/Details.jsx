import { useEffect, useState } from "react";
import star from "../assets/images/star.png";
import PropTypes from "prop-types";
import MoviesSection from "./MoviesSection";
import { imageBaseURL } from "../App";
import loading from "../../src/assets/images/loader.svg";


const movieId = localStorage.getItem("movieId");

const getGenres = function (genreList) {
  const newGenreList = [];

  for (const { name } of genreList) newGenreList.push(name);
  return newGenreList.join(", ");
};

const getCasts = function (castList) {
  const newCastList = [];

  for (let i = 0, len = castList.length; i < len && i < 10; i++) {
    const { name } = castList[i];
    newCastList.push(name);
  }
  return newCastList.join(", ");
};

const getDirectors = function (crewList) {
  let directors = "";
  if (crewList) {
    directors = crewList.filter(({ job }) => job === "Director");
  }

  const directorList = [];
  for (const { name } of directors) directorList.push(name);
  return directorList.join(", ");
};

export default function Details({ api_key }) {
  const [tvShow, setTVShow] = useState({
    backdrop_path: "",
    poster_path: "",
    title: "",
    release_date: "",
    runtime: "",
    vote_average: "",
    certification: "",
    genres: "",
    overview: "",
    cast: "",
    crew: "",
    videos: [],
  });

  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts,videos,images,releases`
    )
      .then((res) => res.json())
      .then((data) => {
        setTVShow({
          backdrop_path: data.backdrop_path,
          poster_path: data.poster_path,
          title: data.title,
          release_date: data.release_date,
          runtime: data.runtime,
          vote_average: data.vote_average,
          certification: data.releases.countries[0].certification,
          genres: data.genres,
          overview: data.overview,
          cast: data.casts.cast,
          crew: data.casts.crew,
          videos: data.videos.results,
          key: data.videos.results.length > 0 ? data.videos.results : "",
        });
        setLoad(true);
      });
  }, [api_key]);

  const videoList = tvShow.videos.slice(0, 5).map((video) => {
    return (
      <iframe
        key={video.id}
        src={`https://www.youtube.com/embed/${video.key}?vq=small`}
        allowFullScreen
        title={video.name}
        allow="encrypted-media; picture-in-picture"></iframe>
    );
  });

  return (
    <>
      {load ? (
        <>
          <div className="detailsPage">
            <div className="background">
              <img
                src={`${imageBaseURL}original${tvShow.backdrop_path}`}
                alt="Slider Banner"
              />
              <div className="overlay"></div>
            </div>
            <div className="content">
              <div className="poster">
                <img
                  src={`${imageBaseURL}w342${tvShow.poster_path}`}
                  alt="img"
                />
              </div>
              <div className="detailsText">
                <h1>{tvShow.title}</h1>
                <div className="info">
                  <span className="rate">
                    <img src={star} alt="stars" />
                    {Number(tvShow.vote_average).toFixed(1)}
                  </span>
                  •<span className="time">{tvShow.runtime} m</span>•
                  <span className="year">
                    {tvShow.release_date.split("-")[0]}
                  </span>
                  <span className="cat">{tvShow.certification}</span>
                </div>
                <div className="geners">{getGenres(tvShow.genres)}</div>
                <div className="overview">{tvShow.overview}</div>
                <div className="details-list">
                  <div className="list-item">
                    <p className="name">Starring</p>
                    <p>{getCasts(tvShow.cast)}</p>
                  </div>

                  <div className="list-item">
                    <p className="name">Directed By</p>
                    <p>{getDirectors(tvShow.crew)}</p>
                  </div>
                </div>
                {tvShow.key !== "" ? (
                  <>
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="show-video">
                      📺
                    </div>
                    <div
                      style={{ display: show ? "flex" : "none" }}
                      className="video-slide">
                      {videoList}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <MoviesSection
            name={"You May Also Like"}
            base_api_url={`https://api.themoviedb.org/3/movie/${movieId}/recommendations`}
            api_key={api_key}
          />
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "100px",
          }}>
          <img src={loading} alt="loading" />
        </div>
      )}
    </>
  );
}

Details.propTypes = {
  api_key: PropTypes.string.isRequired,
};
