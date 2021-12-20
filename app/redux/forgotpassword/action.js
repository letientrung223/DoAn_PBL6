import {
  POST_EMAIL,
  POST_EMAIL_SUCCESS,
  POST_EMAIL_FAILED,
} from "./actionType";
import axios from "axios";

export const posFGPW = (email) => {
  return async (dispatch) => {
    dispatch(postForgotPassword(email));
    try {
      axios
        .post("https://shop-pbl6.herokuapp.com/api/v1/users/forgotPassword",
        {
          "email":email, 
        })
        .then((response) => {
          console.log(response);
          dispatch(postForgotPasswordSuccess(email));
        })
        .catch((err) => {
          console.log("loi",err)
          dispatch(postForgotPasswordFailed(err));
        });
    } catch (error) {
      dispatch(postForgotPasswordFailed(error));
    }
  };
};

const postForgotPassword = (email) => {
  return {
    type: POST_EMAIL,
  };
};
const postForgotPasswordSuccess = (email) => {
  return {
    type: POST_EMAIL_SUCCESS,
    payload: {email},
  };
};

const postForgotPasswordFailed = (error) => {
  return {
    type: POST_EMAIL_FAILED,
    payload: {
      error,
    },
  };
};
