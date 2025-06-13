import "./ModalWithForm.css";
import close from "../../assets/close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  isValid,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={close}
            alt="Picture of close button 'X'"
            className="modal__close-image"
          />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            type="submit"
            className={!isValid ? "modal__submit_disabled" : "modal__submit"}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
