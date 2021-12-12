import axios from 'axios';
//mock API
let API_URL = 'https://shop-pbl6.herokuapp.com/api/v1/';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
//https://shop-pbl6.herokuapp.com/api/v1/products