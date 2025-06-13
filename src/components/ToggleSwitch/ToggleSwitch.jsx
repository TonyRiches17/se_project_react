import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__f ${
          currentTemperatureUnit === "F" ? "toggle-switch__letter_white" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__c ${
          currentTemperatureUnit === "C" ? "toggle-switch__letter_white" : ""
        }`}
      >
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;
