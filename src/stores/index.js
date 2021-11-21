import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import authReducers from "stores/auth/reducers";
import userReducers from "stores/user/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger)
);

const persistor = persistStore(store);
export { store, persistor };
