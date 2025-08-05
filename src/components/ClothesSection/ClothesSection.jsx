import { useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext";
import "./ClothesSection.css";
import ItemCard from "../Main/ItemCard/ItemCard.jsx";

function ClothesSection({
  onCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__text">Your items</p>
        <button onClick={handleAddClick} className="clothes-section__button">
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          const isOwn =
            item.owner === currentUser._id ||
            item.owner?._id === currentUser._id;
          if (!isOwn) return null;
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
