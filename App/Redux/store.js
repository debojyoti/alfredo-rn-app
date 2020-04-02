import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import {
  loaderReducer
} from "./Reducers/loader";

const rootReducer = combineReducers({
  loaderData: loaderReducer 
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
