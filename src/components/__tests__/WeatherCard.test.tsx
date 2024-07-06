import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherCard from '../WeatherCard';

const mockWeatherData = {
  current_weather: {
    temperature: 22,
    windspeed: 5,
    weathercode: 0,
  },
  city_name: 'New York',
};

test('renders WeatherCard with weather data', () => {
  render(<WeatherCard data={mockWeatherData} />);

  expect(screen.getByText(/New York/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 22°C/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed: 5 m\/s/i)).toBeInTheDocument();
  expect(screen.getByText(/Condition: Clear sky/i)).toBeInTheDocument();
});
