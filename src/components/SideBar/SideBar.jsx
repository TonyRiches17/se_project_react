import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ handleEditProfileClick, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <img
          src={currentUser.avatar}
          alt="Default avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__buttons-container">
        <button
          onClick={handleEditProfileClick}
          className="sidebar__edit-profile"
        >
          Change profile data
        </button>
        <button onClick={handleLogOut} className="sidebar__logout">
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
