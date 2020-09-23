import React, { useState } from "react";
import PropTypes from "prop-types";
import AnimateHeight from "react-animate-height";
import RaceInfoRow from "../RaceInfoRow/RaceInfoRow";
import "./style.css";

const StartInfo = ({starts}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
        <button className="race-info-row button" onClick={() => setIsOpen(!isOpen)}>
            <p className="start-info-header">Se startinformation</p>
            <img className={`start-info-chevron ${isOpen ? 'open' : '' }`} src="./chevron_down.png" alt="tooltip" />
        </button>
        <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
        {
            starts.map(start =>(
                <div className="start-info-wrapper" key={start.number}>
                    <RaceInfoRow leftColumnContent="Startnummer:" rightColumnContent={start.number}/>
                    <RaceInfoRow leftColumnContent="Häst:" rightColumnContent={start.horse.name}/>
                    <RaceInfoRow leftColumnContent="Kusk:" rightColumnContent={`${start.driver.firstName} ${start.driver.lastName}`}/>
                    <RaceInfoRow leftColumnContent="Hingst:" rightColumnContent={start.horse.pedigree.father.name}/>
                    <RaceInfoRow leftColumnContent="Tränare:" rightColumnContent={`${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}/>
                </div>             
            ))
        }
        </AnimateHeight>
    </React.Fragment>
  );
}

StartInfo.propTypes = {
    starts: PropTypes.instanceOf(Array),
}

export default StartInfo;
