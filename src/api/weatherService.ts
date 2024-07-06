import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const getWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCoordinates = async (city: string) => {
  const geocodingURL = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`;
  try {
    const response = await axios.get(geocodingURL);
    if (response.data.length === 0) {
      throw new Error('City not found');
    }
    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    throw error;
  }
};
