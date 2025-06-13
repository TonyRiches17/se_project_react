import "./SideBar.css";
import stockAvatar from "../../assets/stockavatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={stockAvatar} alt="Default avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
