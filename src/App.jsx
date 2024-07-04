import React from 'react';
import LocationTracker from './LocationTracker';
import './App.css'; // Import your global CSS styles

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <h1>Salesman Tracker</h1>
        <LocationTracker />
      </div>
    </div>
  );
};

export default App;
