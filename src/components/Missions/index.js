import './style.css'
import React from 'react';
import Title from '../Title';
import MissionCard from '../MissionCard';
import missions from '../../data/missions'

function missionCardGenerator({ name, year, country, destination }) {
  return (
    <MissionCard
      key={ name }
      name={ name }
      year={ year }
      country={ country }
      destination={ destination }
    />
  );
}

class Missions extends React.Component {
  render() {
    return (
      <div id='missions-container' data-testid="missions">
        <Title headline="Missões" />
        <div id="cardMissions-container">
          {missions.map((mission) => missionCardGenerator(mission))}
        </div>
      </div>
    );
  }
}

export default Missions;
