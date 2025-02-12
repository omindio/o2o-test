import { LocationPayload } from "../../types/Weather";
import apiClient from "../apiClient";

export const fetchWeather = async (location: LocationPayload) => {
  return apiClient.get(`/${location.city}?format=j1&lang=es`);
};
