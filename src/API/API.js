import axios from "axios";
/* const BaseURL='https://courseworkserver-e323df5c3fa1.herokuapp.com/'; */
const BaseURL='http://localhost:3001/';

const instance = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "multipart/form-data" }
});

const API = {
  // Common API
  getDB() {return instance.get('db')},
  getLikeList(){return instance.get('likeList')},
  getAuth(data) {return instance.post('login',data)},
  getLike(data){debugger; return instance.post('like',data)},
  getUserLikes(){return instance.get('score_user')},
  getSort(sort){return instance.post('sort',sort)},
  getScore(){return instance.get('score')},
  getUpdate(data){return instance.post('update',data)},
  getUsers() {return instance.get('users')},
  getRegistration(data) {return instance.post('registration',data)},
  getRecommendation(data) {return instance.post('recommendation',data)},
  getAddRecommend(data){return instance.post('addRecommendation',data)}
};
export default API;