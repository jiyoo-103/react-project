import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : '';

  const temperatureF =
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : '';

  return (
    <Card className="weather-card">
      <Card.Body>
        <div>{weather?.name || '날씨를 가져오는데 실패했습니다.'}</div>
        <h2>{`${temperatureC} °C / ${temperatureF} °F`}</h2>
        <h3>{weather && weather.weather[0]?.description}</h3>
      </Card.Body>
    </Card>
  );
};

export default WeatherBox;