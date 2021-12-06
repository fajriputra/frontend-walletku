import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import authReducers from "stores/auth/reducers";
import userReducers from "stores/user/reducers";
import topupReducers from "stores/topup/reducers";
import dashboardReducers from "stores/dashboard/reducers";
import historyReducers from "stores/history/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
  topup: topupReducers,
  dashboard: dashboardReducers,
  history: historyReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger)
);

const persistor = persistStore(store);
export { store, persistor };
