import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";
import searchIcon from "../assets/images/search.png";
import closeIcon from "../assets/images/close.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({
  isSearchVisible,
  handleCloseClick,
  handleMenuClick,
  handleSearchClick,
  menuIconSrc,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [searchBtn, setSearchBtn] = useState(false);

  function handleSearchBtn(event) {
    const value = event.target.value;
    setSearchValue(value);
    setSearchBtn(value !== "");
  }

  function handleSearch() {
    localStorage.setItem("searchValue", searchValue);
    localStorage.setItem("cat", "search");
    localStorage.setItem("GenreName", searchValue);
    window.location.pathname = "/movie-list";
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={isSearchVisible ? "header" : "header hide"}>
      <Link to="/" className="logo" onClick={() => {}}>
        <img src={logo} alt="Tvflix home" />
      </Link>
      <div className="search" onClick={handleSearchClick}>
        <img src={searchIcon} alt="search" />
        <input
          value={searchValue}
          onChange={handleSearchBtn}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search any movies..."
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ display: searchBtn ? "block" : "none" }}
          onClick={handleSearch}
          className="btn btn-search">
          Search
        </div>
        <div
          className="close"
          onClick={() => {
            handleCloseClick();
            setSearchBtn(false);
          }}>
          <img src={closeIcon} alt="close" />
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <img src={menuIconSrc} alt="menu" />
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  isSearchVisible: PropTypes.bool.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  menuIconSrc: PropTypes.string.isRequired,
};
