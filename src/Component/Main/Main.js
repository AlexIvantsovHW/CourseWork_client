import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Camera, img_return } from "../img";
import { NavLink } from "react-router-dom";
import { blockRender } from "../withAuthNavigate";
import { Raiting } from "./Raiting";




const Main = (props) => {
let rateBlock=props.Recommendation.rate;
  const setRate=(id_r,id_user,rate,action)=>{
    const fData=new FormData();
    fData.append('id_r',id_r);
    fData.append('id_user',id_user);
    fData.append('rate',rate);
    fData.append('action',action);
    props.setRateTC(fData);
  } 

  let DB=props.DB;
  function replaceAmountValues(DB, totalScore) {
    return DB.map(item => {
      const matchingScore = totalScore.find(score => score.id_r === item.id_r);
      if (matchingScore) {return { ...item, Amount: matchingScore.Amount };} 
      else {return item;}});
  }
  let transformArr=replaceAmountValues(DB,props.totalScore);
  let id_user=props.id_user
  function likePresence(arr2, id_r, id_user) {return arr2.some(element => element.id_r === id_r && element.id_user === id_user);}


  function setLike(status,id_r,id_user){
    let fData=new FormData();
    fData.append('like',status)
    fData.append('id_r',id_r)
    fData.append('id_user',id_user)
    props.getLikeTC(fData);
  }

  function sort(sort, data) {
    const fData = new FormData();
    fData.append("sort", sort);
    fData.append("field", data);
    props.getSortTC(fData);
  }
  let DBlist=transformArr.map((el) => {
    return (
      <div className="row border">
        <div className="col">
          <div>Title: {el.title}</div>
          <div>Date: {el.date_upload}</div>
          <div>id_r:  {el.id_r}</div>
          <div>Likes:  {el.Amount}</div>
          
        <div>
          <button onClick={()=>{setRate(el.id_r,props.id_user,1,1)}}>1</button>
          <button onClick={()=>{setRate(el.id_r,props.id_user,2,1)}}>2</button>
          <button onClick={()=>{setRate(el.id_r,props.id_user,3,1)}}>3</button>
          <button onClick={()=>{setRate(el.id_r,props.id_user,4,1)}}>4</button>
          <button onClick={()=>{setRate(el.id_r,props.id_user,5,1)}}>5</button>
        </div>
        </div>
        <div className="col">
        {((el.image===null)||(el.image==='null')?Camera:img_return(el.image))}
        </div>
        <div className="col-3 border">
        <NavLink to={"/expand/"+el.id_r}><button>Read</button></NavLink>
        {blockRender(props.Login.auth.auth,<div className="row d-flex align-items-end justify-content-end">
          <div className="col">{
          ((likePresence(props.score, el.id_r, el.id_user)===true)?<button onClick={()=>{setLike(0,el.id_r,id_user)}}>dis</button>:
          <button onClick={()=>{setLike(1,el.id_r,id_user)}}>Like</button>)}</div>
          </div>          
          )}  
        </div>
      </div>
    );
  });
  return (
    <div class="col">
      <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="mx-auto w-50 h-auto bg-dark  bg-gradient rounded-4">
          <div className="mb-2">
            <h1 className="text-center">Recommendation list</h1>
            <div className="row w-100 mx-auto" style={{ height: "30px" }}>
                <div className="col-2">Sort by:</div>
                <div className="col-4">
                  Date
                  <button onClick={() => {sort("ASC", "date_upload");}}>{'<'}</button>
                  <button onClick={() => {sort("DESC", "date_upload");}}>{'>'}</button>
                </div>
                <div className="col-4">
                  Score
                  <button onClick={() => {sort("ASC", "score");}}>{'<'}</button>
                  <button onClick={() => {sort("DESC", "score");}}>{'>'}</button>
                </div>
              </div>
            <div className="w-100 mx-auto mb-2 overflow-auto" style={{ height: "500px" }}>
              {DBlist}
          <div>
     
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
