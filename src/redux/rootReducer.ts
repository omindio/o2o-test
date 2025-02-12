import { combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import weatherReducer from "./reducers/weatherReducer";

export const staticReducers = {
  weather: weatherReducer,
};

export function createRootReducer(
  dynamicReducers: { [key: string]: Reducer } = {}
): Reducer {
  return combineReducers({
    ...staticReducers,
    ...dynamicReducers,
  });
}
