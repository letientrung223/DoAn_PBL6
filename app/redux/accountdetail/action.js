import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from "./actionType";
import axios from "axios";

const updateAccount = (name, email) => {
  return {
    type: UPDATE_USER,
  };
};

const updateAccountSuccess = (name, email) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: { name, email },
  };
};

const updateAccountFailed = (error) => {
  return {
    type: UPDATE_USER_FAILED,
    payload: {
      error,
    },
  };
};

export const updateAccountDetail = (name, email,tokenVN) => {
  return async (dispatch) => {
    dispatch(updateAccount(name, email));
    try {
      axios
        .patch("https://shop-pbl6.herokuapp.com/api/v1/users/updateMe", {
          name: name,
          email: email,
        },{ headers: {"Authorization" : `Bearer ${tokenVN}`} })
        .then((response) => {
          console.log(response);
          const name=response.data.data.user.name;
          const email=response.data.data.user.email;
          dispatch(updateAccountSuccess(name, email));
        })
        .catch((err) => {
          console.log("loi", err);
          dispatch(updateAccountFailed(err));
        });
    } catch (error) {
      dispatch(updateAccountFailed(error));
    }
  };
};

export const getAccountDetail = (tokenVN) => {
  return async (dispatch) => {
    dispatch(getAccount());
    try {
      axios
        .get("https://shop-pbl6.herokuapp.com/api/v1/users/me",{ headers: {"Authorization" : `Bearer ${tokenVN}`} })
        .then((response) => {
          const name = response.data.data.data.name;
          const email = response.data.data.data.email;
          dispatch(getAccountSuccess(name, email));
        })
        .catch((err) => {
          dispatch(getAccountFailed(err));
        });
    } catch (error) {
      dispatch(getAccountFailed(error));
    }
  };
};

const getAccount = () => {
  return {
    type: GET_USER,
  };
};

const getAccountSuccess = (name, email) => {
  return {
    type: GET_USER_SUCCESS,
    payload: { name, email},
  };
};

const getAccountFailed = (error) => {
  return {
    type: GET_USER_FAILED,
    payload: {
      error,
    },
  };
};
