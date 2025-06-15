import { useState, useEffect } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  onClose,
  isOpen,
  activeModal,
  onAddItemModalSubmit,
  onResetForm,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleimageUrlChange = (evt) => {
    setImageUrl(evt.target.value);
  };

  const handleWeatherChange = (evt) => {
    setWeather(evt.target.value);
  };

  const resetForm = () => {
    setName("");
    setImageUrl("");
    setWeather("");
  };

  useEffect(() => {
    onResetForm.current = resetForm;
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  const isFormValid = name && imageUrl && weather;

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isFormValid}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          id="name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{""}
        <input
          id="imageUrl"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          onChange={handleimageUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          style={{ color: weather === "hot" ? "black" : "" }}
          htmlFor="hot"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="climate"
            required
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label
          style={{ color: weather === "warm" ? "black" : "" }}
          htmlFor="warm"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="climate"
            required
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label
          style={{ color: weather === "cold" ? "black" : "" }}
          htmlFor="cold"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="climate"
            required
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
