import { call, put, takeLatest } from "redux-saga/effects";
import {
  weatherRequest,
  weatherSuccess,
  weatherFailure,
} from "../reducers/weatherReducer";

import { fetchWeather } from "../api/weatherApi";
import { Weather } from "../../types/Weather";

function* fetchWeatherSaga(
  action: ReturnType<typeof weatherRequest>
): Generator<any, void> {
  try {
    const { data } = yield call(fetchWeather, action.payload);
    const weather: Weather = {
      date: data.current_condition[0].localObsDateTime,
      temperature: parseFloat(data.current_condition[0].temp_C),
      humidity: parseFloat(data.current_condition[0].humidity),
      windSpeed: data.current_condition[0].windspeedKmph,
      description: data.current_condition[0].lang_es
        ? data.current_condition[0].lang_es[0].value
        : data.current_condition[0].weatherDesc[0].value,
      code: data.current_condition[0].weatherCode,
      forecast: data.weather.map((day: any) => ({
        date: day.date,
        maxTemp: parseFloat(day.maxtempC),
        minTemp: parseFloat(day.mintempC),
      })),
    };
    yield put(weatherSuccess(weather));
  } catch (error: any) {
    yield put(weatherFailure("Error al obtener el tiempo para esta ciudad."));
  }
}

export default function* authSaga() {
  yield takeLatest(weatherRequest.type, fetchWeatherSaga);
}
