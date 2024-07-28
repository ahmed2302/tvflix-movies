import PropTypes from "prop-types";
import tmdbLogo from "../assets/images/tmdb-logo.svg";
import gitHubLogo from "../assets/images/GitHub-Logo.png";

export default function SideBar({ isSidebarVisible }) {
  return (
    <aside className={isSidebarVisible ? "show" : ""}>
      <h2>Genre</h2>
      <ul>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 12);
            localStorage.setItem("GenreName", "Adventure");
            localStorage.setItem("cat", "genre");
          }}>
          Adventure
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 14);
            localStorage.setItem("GenreName", "Fantasy");
            localStorage.setItem("cat", "genre");
          }}>
          Fantasy
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 16);
            localStorage.setItem("GenreName", "Animation");
            localStorage.setItem("cat", "genre");
          }}>
          Animation
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 18);
            localStorage.setItem("GenreName", "Drama");
            localStorage.setItem("cat", "genre");
          }}>
          Drama
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 27);
            localStorage.setItem("GenreName", "Horror");
            localStorage.setItem("cat", "genre");
          }}>
          Horror
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 28);
            localStorage.setItem("GenreName", "Action");
            localStorage.setItem("cat", "genre");
          }}>
          Action
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 35);
            localStorage.setItem("GenreName", "Comedy");
            localStorage.setItem("cat", "genre");
          }}>
          Comedy
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 36);
            localStorage.setItem("GenreName", "History");
            localStorage.setItem("cat", "genre");
          }}>
          History
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 37);
            localStorage.setItem("GenreName", "Western");
            localStorage.setItem("cat", "genre");
          }}>
          Western
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 53);
            localStorage.setItem("GenreName", "Thriller");
            localStorage.setItem("cat", "genre");
          }}>
          Thriller
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 80);
            localStorage.setItem("GenreName", "Crime");
            localStorage.setItem("cat", "genre");
          }}>
          Crime
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 99);
            localStorage.setItem("GenreName", "Documentary");
            localStorage.setItem("cat", "genre");
          }}>
          Documentary
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 878);
            localStorage.setItem("GenreName", "Science Fiction");
            localStorage.setItem("cat", "genre");
          }}>
          Science Fiction
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 9648);
            localStorage.setItem("GenreName", "Mystery");
            localStorage.setItem("cat", "genre");
          }}>
          Mystery
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 10402);
            localStorage.setItem("GenreName", "Music");
            localStorage.setItem("cat", "genre");
          }}>
          Music
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 10749);
            localStorage.setItem("GenreName", "Romance");
            localStorage.setItem("cat", "genre");
          }}>
          Romance
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 10751);
            localStorage.setItem("GenreName", "Family");
            localStorage.setItem("cat", "genre");
          }}>
          Family
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 10752);
            localStorage.setItem("GenreName", "War");
            localStorage.setItem("cat", "genre");
          }}>
          War
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("genreId", 10770);
            localStorage.setItem("GenreName", "TV Movie");
            localStorage.setItem("cat", "genre");
          }}>
          TV Movie
        </li>
      </ul>

      <h2>Language</h2>
      <ul>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "en");
            localStorage.setItem("GenreName", "English");
            localStorage.setItem("cat", "lang");
          }}>
          English
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "ar");
            localStorage.setItem("GenreName", "Arabic");
            localStorage.setItem("cat", "lang");
          }}>
          Arabic
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "hi");
            localStorage.setItem("GenreName", "Hindi");
            localStorage.setItem("cat", "lang");
          }}>
          Hindi
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "bn");
            localStorage.setItem("GenreName", "Bengalil");
            localStorage.setItem("cat", "lang");
          }}>
          Bengali
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "es");
            localStorage.setItem("GenreName", "Spanish");
            localStorage.setItem("cat", "lang");
          }}>
          Spanish
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "fr");
            localStorage.setItem("GenreName", "French");
            localStorage.setItem("cat", "lang");
          }}>
          French
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "de");
            localStorage.setItem("GenreName", "German");
            localStorage.setItem("cat", "lang");
          }}>
          German
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "it");
            localStorage.setItem("GenreName", "Italian");
            localStorage.setItem("cat", "lang");
          }}>
          Italian
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "pt");
            localStorage.setItem("GenreName", "Portuguese");
            localStorage.setItem("cat", "lang");
          }}>
          Portuguese
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "zh");
            localStorage.setItem("GenreName", "Chinese");
            localStorage.setItem("cat", "lang");
          }}>
          Chinese
        </li>
        <li
          onClick={() => {
            window.location.pathname = "/movie-list";
            localStorage.setItem("langId", "ja");
            localStorage.setItem("GenreName", "Japanese");
            localStorage.setItem("cat", "lang");
          }}>
          Japanese
        </li>
      </ul>

      <hr />

      <p>Copyright &copy; 2024</p>
      <img src={tmdbLogo} alt="" />
      <a href="https://github.com/ahmed2302" rel="noreferrer" target="_blank">
        <img src={gitHubLogo} alt="" />
      </a>
    </aside>
  );
}

SideBar.propTypes = {
  isSidebarVisible: PropTypes.bool.isRequired,
};
