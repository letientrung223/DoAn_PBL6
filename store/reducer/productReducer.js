import {GET_ALL_PRODUCTS} from '../types'; // .. lùi 1 folder
export const productReducer =(state ={},action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {item:action.payload};
        default:
            return state;    
    }
}