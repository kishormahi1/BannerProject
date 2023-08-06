import React from 'react';
import Banner from './components/Banner';
import Section from './components/Section';
import { bannerArray, sectionArray, cardArray } from './data/dashboardData';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {bannerArray.map((banner) => (
        <Banner key={banner.id} {...banner} />
      ))}
      {sectionArray.map((section) => (
        <Section key={section.id} {...section} cards={cardArray.filter(card => card.parent_sec === section.id)} />
      ))}
    </div>
  );
};

export default App;
