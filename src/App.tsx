import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure, clearWeather } from './store/weatherSlice';
import { loadUsernameFromStorage } from './store/userSlice';
import { getWeather, getCoordinates } from './api/weatherService';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';
import LoginScreen from './components/LoginScreen';
import LogoutButton from './components/LogoutButton';
import { Container, Typography, CircularProgress, Button, Box, Grid } from '@mui/material';

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

  const handleClear = () => {
    dispatch(clearWeather());
  };

  if (!user.username) {
    return <LoginScreen />;
  }

  return (
    <Container
      sx={{
        margin: 'auto',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
        <Typography variant="h4" sx={{ color: '#3f51b5' }}>Weather App</Typography>
        <LogoutButton />
      </Box>
      <Typography variant="h6" my={2} sx={{ color: '#3f51b5' }}>Hello, {user.username}!</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <SearchInput onSearch={handleSearch} />
      </Box>
      {weather.loading && <CircularProgress />}
      {weather.error && <Typography color="error">{weather.error}</Typography>}
      {weather.data.length > 0 && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClear}
          sx={{
            backgroundColor: '#f50057',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#c51162',
            },
            marginBottom: '20px',
          }}
        >
          Clear History
        </Button>
      )}
      <Grid container spacing={3} mt={2}>
        {weather.data.map((data, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <WeatherCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
