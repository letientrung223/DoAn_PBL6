import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {homeReducer} from "./home/reducer";
import {loginReducer} from "./login/reducer"
import {signupReducer} from "./signup/reducer"
import {orderReducer} from "./order/reducer"
import {cartReducer} from "./cart/reducer"
import {forgotPWReducer} from "./forgotpassword/reducer"
import {resetPWReducer} from "./resetpassword/reducer"
import {getAccountReducer,updateAccountReducer} from "./accountdetail/reducer"
import {updatePasswordReducer} from "./changepassword/reducer"
const rootReducer = combineReducers({ 
  homeReducer,
  loginReducer,
  signupReducer,
  orderReducer,
  cartReducer,
  forgotPWReducer,
  resetPWReducer,
  getAccountReducer,
  updateAccountReducer,
  updatePasswordReducer,
 });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
