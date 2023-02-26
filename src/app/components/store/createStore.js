import { combineReducers, configureStore } from "@reduxjs/toolkit";
import callsReducer from "./calls";
import filtrationReducer from "./filtration";

const rootReducer = combineReducers({
  calls: callsReducer,
  filtration: filtrationReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
}

export default createStore;
