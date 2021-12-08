import { GET_ALL_PRODUCTS } from "../types";

const initialState = {
  products: []
}

export default function(state = initialState, action = {}) {
 switch (action.type) {
   case GET_ALL_PRODUCTS: {
     return {
       ...state,
       products: action.payload
     }
   }
 }
}
