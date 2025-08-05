import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({
  onClose,
  isOpen,
  onEditProfileSubmit,
  activeModal,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  useEffect(() => {
    if (activeModal === "edit-profile" && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [activeModal, currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onEditProfileSubmit({ name, avatar });
  };

  const isFormValid = name && avatar;
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      contentStyle={{ "--modal-min-height": "304px" }}
      buttonStyle={{ "--submit-width": "128px" }}
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isFormValid}
    >
      <label htmlFor="edit-profile-name" className="modal__label">
        Name*{""}
        <input
          id="edit-profile-name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="edit-profile-avatar" className="modal__label">
        Avatar*{""}
        <input
          id="edit-profile-avatar"
          type="URL"
          className="modal__input"
          placeholder="ImageURL"
          required
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
