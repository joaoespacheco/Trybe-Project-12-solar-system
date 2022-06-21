import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

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
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((mission) => missionCardGenerator(mission))}
        </div>
      </div>
    );
  }
}

export default Missions;
