import './style.css'
import React from 'react';
import Title from '../Title';
import PlanetCard from '../PlanetCard';
import planets from '../../data/planets';

function planetCardGenerator(name, image, index) {
  return <PlanetCard index={index} key={ name } planetName={ name } planetImage={ image } />;
}

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div id="planets-container" className="planet">
          {planets.map(({ name, image }, index) => planetCardGenerator(name, image, index))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
