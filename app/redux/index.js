import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./home/reducer";

const rootReducer = combineReducers({ homeState });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
