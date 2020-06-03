import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import Map from './map.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
      <Map />
    </div>
  );
}

export default App;
