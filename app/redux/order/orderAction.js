import {GET_ALL_PRODUCTS} from '../types';
export const fetchAction =() =>async(dispatch) =>{
const res= await  fetch("https://shop-pbl6.herokuapp.com/api/v1/products")
dispatch(
    {
     type:GET_ALL_PRODUCTS,
     payload:res.data,
 });
}