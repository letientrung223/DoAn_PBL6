import {
  FETCH_USER_CART,
  FETCH_USER_CART_SUCCESS,
  FETCH_USER_CART_FAILED,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  UPDATE_QUANTITY_FAILED, 

} from "./actionType";
import axios from "axios";



export const fetchUserCart = (tokenVN) => {
  return async (dispatch) => {
    dispatch(fetchCart())
    try {
      axios.get("https://shop-pbl6.herokuapp.com/api/v1/cart/",{ headers: {"Authorization" : `Bearer ${tokenVN}`} } ).then(response => {
        console.log("ben action cart ",response);
        const cart = response.data.data.cart.cartItem;
        
        dispatch(fetchCartSuccess(cart));
      }).catch(err => {
        dispatch(fetchCartFailed(err));
      })
    } catch (error) {
      dispatch(fetchCartFailed(error));
    }
  };
};

const fetchCart = () => {
  return {
    type: FETCH_USER_CART,
  };
};

const fetchCartSuccess = (cart) => {
  return {
    type: FETCH_USER_CART_SUCCESS,
    payload:{cart},
  };
};

const fetchCartFailed = (error) => {
  return {
    type: FETCH_USER_CART_FAILED,
    payload: {
      error,
    },
  };
};
export const deleteItem = (id,tokenVN) =>{
  return async (dispatch) => {
    try {
      const headers = {
        'Authorization':  `Bearer ${tokenVN}`
      }
      const data = {
        item: id
      } 
      axios.delete("https://shop-pbl6.herokuapp.com/api/v1/cart/",
      {headers,data}
      ).then(response => {
        dispatch(fetchUserCart(tokenVN));
        
      })
    } catch (error) {
      dispatch(fetchCartFailed(error));
    }
  };
};

export const increaseQuantityUserCart = (id_product,size,quantity,tokenVN) => {
  return async (dispatch) => {
    try {
      axios
        .patch("https://shop-pbl6.herokuapp.com/api/v1/cart/", {
          "id": id_product,
          "size":size,
          "quantity":quantity + 1
          
        },{ headers: {"Authorization" : `Bearer ${tokenVN}`} })
        .then((response) => {
         dispatch(fetchUserCart(tokenVN));

        })
        .catch((err) => {
          console.log("loi", err);
          dispatch(updateQtyFailed(err));
        });
    } catch (error) {
      dispatch(updateSizeFailed(error));
    }
  };
};

export const decreaseQuantityUserCart = (id_product,size,quantity,tokenVN) => {
  return async (dispatch) => {
    try {
      axios
        .patch("https://shop-pbl6.herokuapp.com/api/v1/cart/", {
          "id": id_product,
          "size":size,
          "quantity":quantity - 1
          
        },{ headers: {"Authorization" : `Bearer ${tokenVN}`} })
        .then((response) => {
         dispatch(fetchUserCart(tokenVN));

        })
        .catch((err) => {
          console.log("loi", err);
          dispatch(updateQtyFailed(err));
        });
    } catch (error) {
      dispatch(updateSizeFailed(error));
    }
  };
};


// const increaseQuantity = (id_product,size,qty) => {
//   return {
//     type: INCREASE_QUANTITY,
//     payload: {id_product,size,qty},
//   };
// };

// const decreaseQuantity = (id_product,size,qty) => {
//   return {
//     type: DECREASE_QUANTITY,
//     payload: {id_product,size,qty},
//   };
// };
const updateQtyFailed = (error) => {
  return {
    type: UPDATE_QUANTITY_FAILED,
    payload: {
      error,
    },
  };
};

