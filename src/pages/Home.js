import './style.css'
import React from 'react';
import Header from '../components/Header';
import SolarSystem from '../components/SolarSystem';
import Missions from '../components/Missions';

class Home extends React.Component {
  render() {
    return (
      <main id="container-main">
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default Home;
