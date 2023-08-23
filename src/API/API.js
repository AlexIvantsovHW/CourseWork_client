import axios from "axios";
const BaseURL='https://courseworkserver-e323df5c3fa1.herokuapp.com/';

const API = {
  getDB(){return axios.get(BaseURL+'data');},
  getRegistration(data) {debugger; return axios.post(BaseURL+'registration',data)},
};
export default API;