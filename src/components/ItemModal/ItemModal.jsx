import "./ItemModal.css";
import close from "../../assets/imageclose.svg";
import mobileclose from "../../assets/mobileclose.svg";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={close}
            alt="Picture of close button 'X'"
            className="modal__close-image"
          />
          <img
            src={mobileclose}
            alt="Picture of close button 'X'"
            className="modal__close-mobile"
          />
        </button>
        <img src={card.link} alt={`Picture of the ${card.name}`} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
