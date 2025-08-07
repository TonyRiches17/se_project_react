import { useContext } from "react";
import CurrentUserContext from "../../../utils/contexts/CurrentUserContext";
import "./ItemCard.css";
import liked from "../../../assets/liked.svg";
import unliked from "../../../assets/unliked.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes?.some((id) => id === currentUser._id);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__name-container">
        <h2 className="card__name">{item.name}</h2>
        <img
          className={
            currentUser._id ? "card__like-icon" : "card__like-icon_hidden"
          }
          src={isLiked ? liked : unliked}
          alt={isLiked ? "Unlike" : "Like"}
          onClick={handleLike}
        />
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
