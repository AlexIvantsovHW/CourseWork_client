import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Camera, img_return } from "../img";
import { NavLink } from "react-router-dom";
import { blockRender } from "../withAuthNavigate";
import { Raiting } from "./Raiting";
import { calculateAverageRate, likePresence, replaceAmountValues, replaceRateValues, setLike, sort } from "./Expand/Function";

const Main = (props) => {
let avRate=calculateAverageRate(props.Recommendation.rate),
    id_user=props.id_user,
    arrayWithAvRate=replaceRateValues(replaceAmountValues(props.DB,props.totalScore),avRate),
    DBlist=arrayWithAvRate.map((el) => {
    return (
      <div className="row border">
          {Raiting(el.title,el.date_upload,el.Amount,el.id_r,props.id_user,el.rate,props.setRateTC,avRate,props.Recommendation.rate)}
        <div className="col">
        {((el.image===null)||(el.image==='null')?Camera:img_return(el.image))}
        </div>
        <div className="col-3 border">
        <NavLink to={"/expand/"+el.id_r}><button>Read</button></NavLink>
        {blockRender(props.Login.auth.auth,<div className="row d-flex align-items-end justify-content-end">
          <div className="col">{
          ((likePresence(props.score, el.id_r, el.id_user)===true)?<button onClick={()=>{setLike(0,el.id_r,id_user,props.getLikeTC)}}>dis</button>:
          <button onClick={()=>{setLike(1,el.id_r,id_user,props.getLikeTC)}}>Like</button>)}</div>
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
                  <button onClick={() => {sort("ASC", "date_upload",props.getSortTC);}}>{'<'}</button>
                  <button onClick={() => {sort("DESC", "date_upload",props.getSortTC);}}>{'>'}</button>
                </div>
                <div className="col-4">
                  Score
                  <button onClick={() => {sort("ASC", "score",props.getSortTC);}}>{'<'}</button>
                  <button onClick={() => {sort("DESC", "score",props.getSortTC);}}>{'>'}</button>
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
