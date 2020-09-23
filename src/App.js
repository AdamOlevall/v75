import React, { useState } from 'react';
import DropDown from "./components/DropDown";
import StartInfo from "./components/StartInfo";
import RaceInfoRow from "./components/RaceInfoRow";
import { GAMES } from "./utils/types";
import useGetGameSchedule from "./hooks/useGetGameSchedule";
import './App.css';


const App = () => {
  const [chosenOption, setChosenOption] = useState("");
  const [closestGame, setClosestGame] = useState(null);
  const getGameSchedule = useGetGameSchedule();
  
  const handleChangeGameType = (gameType) => {
    setChosenOption(gameType);
    getGameSchedule(gameType, (res) => {
      setClosestGame(res)
    });
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Spelinformation ATG</h1>
        <DropDown options={GAMES} chosenOption={chosenOption} selectOption={handleChangeGameType} />
        {
          closestGame &&
            <div className="game-area">
            <p className="race-header">Raceinformation {chosenOption}</p>
              {
                closestGame.races.map(race => (
                  <div className="race-info" key={race.id}>
                    <RaceInfoRow leftColumnContent="Loppnummer:" rightColumnContent={race.number}/>
                    <RaceInfoRow leftColumnContent="Namn:" rightColumnContent={race.name}/>
                    <RaceInfoRow leftColumnContent="Starttid:" rightColumnContent={`${race.startTime.substring(0,10)} ${race.startTime.substring(11,16)}`}/>
                    <StartInfo starts={race.starts}/>                  
                  </div>
                ))
              } 
            </div>
         }
      </div>
    </div>
  );
}

export default App;
