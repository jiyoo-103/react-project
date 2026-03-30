import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import WeatherButton from './component/WeatherButton';
import WeatherBox from './component/WeatherBox';

const cities = ['hanoi', 'paris', 'new york', 'seoul'];
const API_KEY = '4b133e15f0aadea91ea267ba6ec14f60';

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 썹씨, 화씨 날씨 상태
// 3. 5개의 버튼이 있다. ( 1개는 현재위치, 4개는 다른도시 )
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

const App = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState('');

  const getWeatherByCurrentLocation = useCallback(async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }, []);

  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByCurrentLocation(latitude, longitude);
    });
  }, [getWeatherByCurrentLocation]);

  const getWeatherByCity = useCallback(async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city, getCurrentLocation, getWeatherByCity]);

  const handleCityChange = (nextCity) => {
    if (nextCity === 'current') {
      setCity(null);
    } else {
      setCity(nextCity);
    }
  };

  return (
    <>
      {loading ? (
        <div className="main-container">
          <ClipLoader color="#ffc107" loading={loading} size={150} />
        </div>
      ) : !apiError ? (
        <Container className="main-container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            selectedCity={city}
            handleCityChange={handleCityChange}
          />
        </Container>
      ) : (
        apiError
      )}
    </>
  );
};

export default App;
