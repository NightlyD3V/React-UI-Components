import React from 'react';
import './App.css';
import './components/CardComponents/CardBanner';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className = "App">
      <HeaderContainer/>
      <CardContainer />
    </div>
  );
};

export default App;
