import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function planetCardGenerator(name, image) {
  return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
}

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {planets.map(({ name, image }) => planetCardGenerator(name, image))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
