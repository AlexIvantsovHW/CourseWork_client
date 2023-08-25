import axios from "axios";
/* const BaseURL='https://courseworkserver-e323df5c3fa1.herokuapp.com/'; */
const BaseURL='http://localhost:3001/';

const instance = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "multipart/form-data" }
});

const API = {
  getDB(){return axios.get(BaseURL+'data');},
  getRegistration(data) {return instance.post('registration',data)},
  getAuth(data) {return instance.post('login',data)},
};
export default API;