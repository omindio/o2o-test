import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationPayload, Weather } from "../../types/Weather";

interface WeatherState {
  isLoading: boolean;
  location: LocationPayload | null;
  data: Weather | null;
  error: string | null;
}

const initialState: WeatherState = {
  isLoading: false,
  location: null,
  data: null,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherRequest(state, action: PayloadAction<LocationPayload>) {
      state.isLoading = true;
      state.location = action.payload;
      state.error = null;
    },
    weatherSuccess(state, action: PayloadAction<Weather>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    weatherFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { weatherRequest, weatherSuccess, weatherFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
