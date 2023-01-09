import './style.css';
import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, index } = this.props;
    return (
      <div id={ `planet-${index}` } data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
        <img
          className="planet-image"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default PlanetCard;
