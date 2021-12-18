import {
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILED
  } from "./actionType";
  import axios from "axios";
  
  const updatePassword = (oldPass, newPass,renewPass) => {
    return {
      type: UPDATE_PASSWORD,
    };
  };
  
  const updatePasswordSuccess = (oldPass, newPass,renewPass) => {
    return {
      type: UPDATE_PASSWORD_SUCCESS,
      payload: { name, email },
    };
  };
  
  const updatePasswordFailed = (error) => {
    return {
      type: UPDATE_PASSWORD_FAILED,
      payload: {
        error,
      },
    };
  };
  
  export const updatePasswordUser = (oldPass, newPass,renewPass ,tokenVN) => {
    return async (dispatch) => {
      dispatch(updatePassword(oldPass, newPass,renewPass ,tokenVN));
      try {
        axios
          .patch("https://shop-pbl6.herokuapp.com/api/v1/users/updateMyPassword", {
            "passwordCurrent":oldPass,
            "password":newPass,
            "passwordConfirm":renewPass
          },{ headers: {"Authorization" : `Bearer ${tokenVN}`} })
          .then((response) => {
            console.log(response);
            // const name=response.data.data.user.name;
            // const email=response.data.data.user.email;
            dispatch(updatePasswordSuccess(oldPass, newPass,renewPass));
          })
          .catch((err) => {
            console.log("loi", err);
            dispatch(updatePasswordFailed(err));
          });
      } catch (error) {
        dispatch(updatePasswordFailed(error));
      }
    };
  };
  