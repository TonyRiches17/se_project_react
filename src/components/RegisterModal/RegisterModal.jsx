import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  onClose,
  onResetForm,
  isOpen,
  onSignUpSubmit,
  activeModal,
  handleSignInClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  };

  useEffect(() => {
    onResetForm.current = resetForm;
  }, [onResetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignUpSubmit({ email, password, name, avatar });
  };

  const isFormValid = email && password && name && avatar;

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      additionalText={
        <button
          type="button"
          className="modal__link"
          onClick={handleSignInClick}
        >
          or Log In
        </button>
      }
      contentStyle={{ "--modal-min-height": "456px" }}
      buttonStyle={{ "--submit-width": "86px" }}
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isFormValid}
    >
      <label htmlFor="register-email" className="modal__label">
        Email{""}
        <input
          id="register-email"
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{""}
        <input
          id="register-password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name{""}
        <input
          id="register-name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL{""}
        <input
          id="register-avatar"
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
