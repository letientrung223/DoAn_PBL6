import { GET_ALL_PRODUCTS } from "./actionType";
import { request } from '../../config/api';
import { endpoints } from '../../config/endpoint';

export const callApiGetListProducts = async (dispatch) => {
  const products = request(endpoints.LIST_PRODUCT)
  dispatch(getProductList(products))
}

export const getProductList = (products) => ({
  return({
    type: GET_ALL_PRODUCTS,
    payload: products
  })
})

