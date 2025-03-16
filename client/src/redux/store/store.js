"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import heroReducer, { resetIntro } from "../features/hero/heroSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Choose either localStorage or sessionStorage
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  heroIntro: heroReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
persistor.purge();

// if (typeof window !== "undefined") {
//   const currentSessionID = sessionStorage.getItem("sessionID");
//   const newSessionID = Date.now().toString(); // Unique ID based on timestamp

//   if (!currentSessionID || currentSessionID !== newSessionID) {
//     // ✅ New browser session detected, reset session storage
//     sessionStorage.clear();
//     sessionStorage.setItem("sessionID", newSessionID);

//     // ✅ Reset Redux animation state
//     store.dispatch(resetIntro());
//   }
// }
