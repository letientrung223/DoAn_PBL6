import { request } from "./api";
import axios from "axios";

const fetchProductList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://shop-pbl6.herokuapp.com/api/v1/products")
      .then((response) => {
        console.log('products:', response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export default fetchProductList
