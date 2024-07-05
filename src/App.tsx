import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } from './store/weatherSlice';
import { loadUsernameFromStorage, setUsername } from './store/userSlice';
import { getWeather, getCoordinates } from './api/weatherService';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';
import { Container, Typography, CircularProgress } from '@mui/material';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(loadUsernameFromStorage());
  }, [dispatch]);

  const handleSearch = async (city: string) => {
    dispatch(fetchWeatherStart());
    try {
      const { lat, lon } = await getCoordinates(city);
      const data = await getWeather(lat, lon);
      data.city_name = city;
      dispatch(fetchWeatherSuccess(data));
    } catch (error) {
      dispatch(fetchWeatherFailure('Error fetching weather data'));
    }
  };

  return (
    <Container>
      <Typography variant="h4">Weather App</Typography>
      <Typography variant="h6">Hello, {user.username || 'Guest'}!</Typography>
      <SearchInput onSearch={handleSearch} />
      {weather.loading && <CircularProgress />}
      {weather.error && <Typography color="error">{weather.error}</Typography>}
      {weather.data && <WeatherCard data={weather.data} />}
    </Container>
  );
};

export default App;
