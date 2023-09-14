import axios from "axios";
/* export  const BaseURL='https://coursework-server.onrender.com/'; */
export const BaseURL='http://localhost:3001/';

const instance = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "multipart/form-data" }
});

const API = {
  // Common API
  getDB() {return instance.get('db')},
  getData(){ return instance.get('data')},
  getLikeList(){return instance.get('likeList')},
  getAuth(data) {return instance.post('login',data)},
  getLike(data){return instance.post('like',data)},
  getUserLikes(){return instance.get('score_user')},
  getSort(sort){return instance.post('sort',sort)},
  getScore(){return instance.get('score')},
  getUpdate(data){return instance.post('update',data)},
  getUsers() {return instance.get('users')},
  getRegistration(data) {return instance.post('registration',data)},
  getRecommendation(data) {return instance.post('recommendation',data)},
  getAddRecommend(data){return instance.post('addRecommendation',data)},
  postRate(data){return instance.post('rate',data)},
  getRate(){return instance.get('ratedb')},
  getComments(){return instance.get('comment')},
  setComments(data){return instance.post('setComment',data)},
  deleteRecommends(data){return instance.post('deleteRecommend',data)},
  //========================ADMIN PAGE
  deleteUsers(data){debugger; return instance.post('deleteUser',data)}
};
export default API;