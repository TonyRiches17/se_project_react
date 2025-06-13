import { useContext } from "react";
import "./WeatherCard.css";
import {
  weatherOptions,
  defaultWeatherOptions,
} from "../../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  const defaultAltText = weatherData.isDay ? "day" : "night";
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {`${
          currentTemperatureUnit === "F"
            ? weatherData.temp.F
            : weatherData.temp.C
        }`}
        &deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Background picture of a day that represents ${
          filteredOptions.length === 0
            ? defaultAltText
            : weatherOption?.condition
        }`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
