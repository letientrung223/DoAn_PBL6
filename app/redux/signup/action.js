import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILED,
} from "./actionType";

import axios from "axios";


export const postCheckSignUp = (name,email, password,repassword) => {
  return async (dispatch) => {
    dispatch(signupUser(name,email, password,repassword));
    try {
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/users/signup",
        {
          "name": name,
          "email":email, 
          "password":password,
          "passwordConfirm":repassword,
        })
        .then((response) => {
          console.log("phan hoi sign up ", response);
          const status = response.status;
          const message = response.message;
          
          dispatch(signupUserSuccess(status, message));
        })
        .catch((err) => {
          dispatch( signupUserFailed(err));
        });
    } catch (error) {
      dispatch( signupUserFailed(error));
    }
  };
};

const signupUser = (name,email, password,repassword) => {
  return {
    type: SIGNUP_USER,
  };
};

const signupUserSuccess = (status, message) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: { status, message },
  };
};

const  signupUserFailed = (error) => {
  return {
    type: SIGNUP_USER_FAILED,
    payload: {
      error,
    },
  };
};
