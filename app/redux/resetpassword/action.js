import {
  PATCH_PW,
  PATCH_PW_SUCCESS,
  PATCH_PW_FAILED,
} from "./actionType";
import axios from "axios";

export const patchUserPassword = (code,password,repassword) => {
  return async (dispatch) => {
    dispatch(patchPassword(code,password,repassword));
    try {
      axios
        .patch(`https://shop-pbl6.herokuapp.com/api/v1/users/resetPassword/${code}`,
        {
          "password":password, 
          "passwordConfirm":repassword
        })
        .then((response) => {
          console.log(response);
          // const email = response.data.data.user.email;
          // const tokenVN = response.data.token;
          // const name = response.data.data.user.name;

         // dispatch(patchPasswordSuccess(email));
        })
        .catch((err) => {
          console.log("loi",err)
          dispatch(patchPasswordFailed(err));
        });
    } catch (error) {
      dispatch(patchPasswordFailed(error));
    }
  };
};

const patchPassword = (code,password,repassword) => {
  return {
    type: PATCH_PW,
  };
};
const patchPasswordSuccess = (code,password,repassword) => {
  return {
    type: PATCH_PW_SUCCESS,
    payload: {code,password,repassword},
  };
};

const patchPasswordFailed = (error) => {
  return {
    type: PATCH_PW_FAILED,
    payload: {
      error,
    },
  };
};
