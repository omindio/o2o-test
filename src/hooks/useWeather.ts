import { weatherRequest } from "../redux/reducers/weatherReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { LocationPayload } from "../types/Weather";

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector;

  const { isLoading, location, data, error } = useSelector(
    (state) => state.weather
  );

  const fetch = (location: LocationPayload) => {
    dispatch(weatherRequest(location));
  };

  return {
    isLoading,
    fetch,
    location,
    data,
    error,
  };
};
