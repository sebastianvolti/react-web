import React from 'react';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  "Montevideo,uy",
  "Buenos Aires,ar",
  "Santa Catarina,br",
  "Rio de Janeiro,br",
  "Oranjestad,aru",
];

const handleSelectionLocation = city => {
  console.log(`handleSelectionLocation ${city}`);
};

function App() {
  return (
    <div className="App">
      Weather app
      <LocationList cities={cities} 
                    onSelectedLocation={handleSelectionLocation}> </LocationList>
    </div>
  );
}

export default App;
