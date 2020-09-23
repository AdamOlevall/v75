import React from "react";
import "./style.css";

const RaceInfoRow = ({leftColumnContent, rightColumnContent}) => (
    <section className="race-info-row">
        <section className="race-info-column">
            <p>{leftColumnContent}</p>
        </section>
        <section className="race-info-column race-info-column--right">
            <p>{rightColumnContent}</p>
        </section>
    </section>
);

export default RaceInfoRow;