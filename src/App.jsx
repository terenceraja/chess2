import { useState } from "react";
import styles from "./styles/App.module.css";

import Board from "./components/Board";

import board from "./reducers/board";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";

const reducers = combineReducers({ board });

const persistConfig = { key: "applicationName", storage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className={styles.main}>
          <Board />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
