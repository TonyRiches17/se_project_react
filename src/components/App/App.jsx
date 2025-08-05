import { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../utils/contexts/CurrentTemperatureUnitContext.jsx";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import {
  getItems,
  removeItems,
  addItems,
  editProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { signUp, signIn, getUserData } from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const handleSignInClick = () => {
    setActiveModal("sign-in");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleItemDelete = (card) => {
    removeItems(card._id)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== card._id));
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Delete failed:", error);
      });
  };

  const handleResetForm = useRef(null);

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    const itemsToAdd = { name, imageUrl, weather };
    addItems(itemsToAdd)
      .then((item) => {
        setClothingItems([item.data, ...clothingItems]);
        handleResetForm.current();
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Add Item failed:", error);
      });
  };

  const navigate = useNavigate();

  const handleSignUpSubmit = ({ name, avatar, email, password }) => {
    signUp(name, avatar, email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        console.log("Full response:", data);
        return getUserData(data.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        setUserData(userData);
        handleResetForm.current();
        navigate("/profile");
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const handleSignInSubmit = ({ email, password }) => {
    signIn(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        console.log("Full response:", data);

        return getUserData(data.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleResetForm.current();
        navigate("/");
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    setUserData({});
    navigate("/");
  };

  const handleEditProfileSubmit = ({ name, avatar }) => {
    editProfile(name, avatar)
      .then((data) => {
        setUserData((prev) => ({
          ...prev,
          name: data.name,
          avatar: data.avatar,
        }));
        setCurrentUser(data);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Failed to Edit Profile:", error);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const likeAction = isLiked ? removeCardLike : addCardLike;

    likeAction(id)
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) =>
            item._id === id
              ? updatedCard.data || updatedCard.item || updatedCard
              : item
          )
        );
      })
      .catch((err) => console.error("Failed to toggle like:", err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    getUserData(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              handleSignUpClick={handleSignUpClick}
              handleSignInClick={handleSignInClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      weatherData={weatherData}
                      handleAddClick={handleAddClick}
                      handleEditProfileClick={handleEditProfileClick}
                      handleLogOut={handleLogOut}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            activeModal={activeModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
            onResetForm={handleResetForm}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteItem={handleItemDelete}
          />
          <RegisterModal
            onClose={closeActiveModal}
            onResetForm={handleResetForm}
            isOpen={activeModal === "sign-up"}
            onSignUpSubmit={handleSignUpSubmit}
            activeModal={activeModal}
            handleSignInClick={handleSignInClick}
          />
          <LoginModal
            onClose={closeActiveModal}
            onResetForm={handleResetForm}
            isOpen={activeModal === "sign-in"}
            onSignInSubmit={handleSignInSubmit}
            activeModal={activeModal}
            handleSignUpClick={handleSignUpClick}
          />
          <EditProfileModal
            onClose={closeActiveModal}
            isOpen={activeModal === "edit-profile"}
            activeModal={activeModal}
            onEditProfileSubmit={handleEditProfileSubmit}
            onResetForm={handleResetForm}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
