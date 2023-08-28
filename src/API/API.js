import axios from "axios";
/* const BaseURL='https://courseworkserver-e323df5c3fa1.herokuapp.com/'; */
const BaseURL='http://localhost:3001/';

const instance = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "multipart/form-data" }
});

const API = {
  getDB(){return axios.get(BaseURL+'data');},
  getUsers() {return instance.get('users')},
  getRegistration(data) {return instance.post('registration',data)},
  getAuth(data) {return instance.post('login',data)},
  getRecommendation(data) {debugger; return instance.post('recommendation',data)},
  getAddRecommend(data){debugger; return instance.post('addRecommendation',data)}
};
export default API;