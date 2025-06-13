import "./ItemModal.css";
import close from "../../assets/imageclose.svg";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={close}
            alt="Picture of close button 'X'"
            className="modal__close-image"
          />
        </button>
        <img
          src={card.imageUrl}
          alt={`Picture of the ${card.name}`}
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__footer-container">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <div className="modal__delete">
            <button
              onClick={() => {
                onDeleteItem(card);
              }}
              type="button"
              className="modal__delete-button"
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
