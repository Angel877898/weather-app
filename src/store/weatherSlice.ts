// store/weatherSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: WeatherState = {
  loading: false,
  error: null,
  data: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data.push(action.payload);
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearWeather(state) {
      state.data = [];
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure, clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
