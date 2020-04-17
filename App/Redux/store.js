import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import {
  loaderReducer
} from "./Reducers/loader";
import { userDataReducer } from "./Reducers/auth-data";
import { balanceDataReducer } from "./Reducers/balance-data";

const rootReducer = combineReducers({
  loaderData: loaderReducer,
  userData: userDataReducer,
  balanceData: balanceDataReducer
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "",
  stateReconciler: hardSet // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  pReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
