import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./home/homeReducer";

const reducer = combineReducers({
  homeReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
