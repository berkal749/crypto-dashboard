
import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import unitsReducer from "./weightSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    units:unitsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;