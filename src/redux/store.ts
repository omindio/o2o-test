import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { createRootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

export const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
  devTools: import.meta.env.MODE !== "production",
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { TypedUseSelectorHook };
