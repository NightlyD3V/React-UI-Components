import React from 'react';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButtons from './components/ButtonComponents/NumberButton';
import ActionButtons from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {
  return (
    <div className="calc-container">
      <div className="display">
        <Display displayStyle="display"/>
      </div>
      <div className="number-container">
        <div className="button-wrap">
          <div>
            <div>
              <button className="clear-btn">CLEAR</button>
            </div>
            <div className="number-wrap">
              <NumberButtons text="1" buttonStyle="button"/>
              <NumberButtons text="3" buttonStyle="button"/>
              <NumberButtons text="2" buttonStyle="button"/>
            </div>
            <div className="number-wrap">
              <NumberButtons text="4" buttonStyle="button"/>
              <NumberButtons text="5" buttonStyle="button"/>
              <NumberButtons text="6" buttonStyle="button"/>
            </div>
            <div className="number-wrap">
              <NumberButtons text="7" buttonStyle="button"/>
              <NumberButtons text="8" buttonStyle="button"/>
              <NumberButtons text="9" buttonStyle="button"/>
            </div>
            <NumberButtons text="0" buttonStyle="button-0"/>
          </div>
          <div className="action-wrap">
            <ActionButtons buttonStyle="action-btn"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
