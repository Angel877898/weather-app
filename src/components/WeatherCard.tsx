import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WeatherCardProps {
  data: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { temperature, windspeed, weathercode } = data.current_weather;
  
  const weatherConditions: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    56: 'Light Freezing drizzle',
    57: 'Dense Freezing drizzle',
    61: 'Slight Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    66: 'Light Freezing rain',
    67: 'Heavy Freezing rain',
    71: 'Slight Snow fall',
    73: 'Moderate Snow fall',
    75: 'Heavy Snow fall',
    77: 'Snow grains',
    80: 'Slight Rain showers',
    81: 'Moderate Rain showers',
    82: 'Violent Rain showers',
    85: 'Slight Snow showers',
    86: 'Heavy Snow showers',
    95: 'Slight or Moderate Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{data.city_name}</Typography>
        <Typography variant="body2">Temperature: {temperature}°C</Typography>
        <Typography variant="body2">Wind Speed: {windspeed} m/s</Typography>
        <Typography variant="body2">Condition: {weatherConditions[weathercode]}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
