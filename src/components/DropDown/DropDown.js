import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AnimateHeight from "react-animate-height";
import "./style.css";

const DropDown = ({ options, selectOption, chosenOption }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (isMenuOpen && dropDownRef && !dropDownRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("mousedown", handleClickOutside);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClick = (option) => {
    setIsMenuOpen(false);
    selectOption(option);
  };

  return (
    <section className="drop-down" ref={dropDownRef}>
      <button
        className={`drop-down--top-section ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
      >
        <p
          className={`drop-down--choose-text ${
            chosenOption ? "" : "add-opacity"
          }`}
        >
          {chosenOption || "Välj lopp"}
        </p>
        <img src="./chevron_down.png" alt="chevron" />
      </button>
      <AnimateHeight duration={500} height={isMenuOpen ? "auto" : 0}>
        <section className="drop-down--expandable-section">
          <section className="drop-down--options">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                className="drop-down--option"
                onClick={() => handleClick(option)}
              >
                <p className="drop-down--option-name">{option}</p>
              </button>
            ))}
          </section>
        </section>
      </AnimateHeight>
    </section>
  );
};

DropDown.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  selectOption: PropTypes.func.isRequired,
  chosenOption: PropTypes.string.isRequired,
};

export default DropDown;
