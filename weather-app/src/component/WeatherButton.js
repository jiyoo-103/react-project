import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="menu-container">
      <Button variant="warning" onClick={() => handleCityChange('current')}>
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          key={city}
          variant="warning"
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;