import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  onClose,
  onResetForm,
  isOpen,
  onSignInSubmit,
  activeModal,
  handleSignUpClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    onResetForm.current = resetForm;
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignInSubmit({ email, password });
  };

  const isFormValid = email && password;

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      additionalText={
        <button
          type="button"
          className="modal__link"
          onClick={handleSignUpClick}
        >
          or Sign Up
        </button>
      }
      contentStyle={{ "--modal-min-height": "304px" }}
      buttonStyle={{ "--submit-width": "73px" }}
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isFormValid}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{""}
        <input
          id="login-email"
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{""}
        <input
          id="login-password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
