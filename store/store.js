import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import {productReducer} from "./reducer/productReducer"
const initialState = {};
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;
const store = createStore(combineReducers({
   products:productReducer, 
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;