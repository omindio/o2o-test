import { all } from "redux-saga/effects";
import weatherSaga from "./sagas/WeatherSaga";

export default function* rootSaga() {
  yield all([weatherSaga()]);
}
