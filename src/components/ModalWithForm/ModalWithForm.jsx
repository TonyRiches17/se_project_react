import "./ModalWithForm.css";
import close from "../../assets/close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  additionalText,
  contentStyle,
  buttonStyle,
  isOpen,
  onClose,
  onSubmit,
  isValid,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content" style={contentStyle}>
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
          <div className="modal__submit-container">
            <button
              type="submit"
              className={!isValid ? "modal__submit_disabled" : "modal__submit"}
              style={buttonStyle}
            >
              {buttonText}
            </button>
            <div className="modal__additional-text">{additionalText}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
