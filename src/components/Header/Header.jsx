import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleSignUpClick,
  handleSignInClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const hasAvatar = currentUser.avatar && currentUser.avatar.trim() !== "";
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Website logo" className="header__logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch isLoggedIn={isLoggedIn} />
      <button
        onClick={handleAddClick}
        type="button"
        className={
          isLoggedIn
            ? "header__add-clothes-button"
            : "header__add-clothes-button-hidden"
        }
      >
        + Add Clothes
      </button>
      <Link className="header__profile-link" to="/profile">
        <div
          className={
            isLoggedIn
              ? "header__user-container"
              : "header__user-container-hidden"
          }
        >
          <p className="header__username">{currentUser?.name || ""}</p>
          {hasAvatar ? (
            <img
              src={currentUser?.avatar}
              alt="Pictue of user's avatar"
              className="header__avatar"
            />
          ) : (
            <div className="header__avatar-placeholder">
              {currentUser.name ? currentUser?.name[0].toUpperCase() : "?"}
            </div>
          )}
        </div>
      </Link>
      <div
        className={
          isLoggedIn
            ? "header__user-container-loggedout-hidden"
            : "header__user-container-loggedout"
        }
      >
        <button
          onClick={handleSignUpClick}
          type="button"
          className="header__signup"
        >
          Sign Up
        </button>
        <button
          onClick={handleSignInClick}
          type="button"
          className="header__login"
        >
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header;
