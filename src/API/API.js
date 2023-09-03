import axios from "axios";
/* const BaseURL='https://courseworkserver-e323df5c3fa1.herokuapp.com/'; */
const BaseURL='http://localhost:3001/';

const instance = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "multipart/form-data" }
});

const API = {
  getLike(data){debugger; return instance.post('/like',data)},
  getUserLikes(){return instance.get('/score_user')},
  getSort(sort){return instance.post('sort',sort)},
  getScore(){debugger; return instance.get('/score')},
  getUpdate(data){return instance.post('/update',data)},
  getDB() {return instance.get('db')},
  getUsers() {return instance.get('users')},
  getRegistration(data) {return instance.post('registration',data)},
  getAuth(data) {return instance.post('login',data)},
  getRecommendation(data) { return instance.post('recommendation',data)},
  getAddRecommend(data){ return instance.post('addRecommendation',data)}
};
export default API;