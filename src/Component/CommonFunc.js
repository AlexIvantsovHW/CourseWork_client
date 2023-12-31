import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SendImg, UserImg, deleteSVG } from "./img";
import { Form, Formik } from "formik";
import moment from "moment";
import { commentForm } from "./Profile/Function";
import { useState } from "react";

// CONTAINER
export var withRouter=function (Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
  };
export function setTheme(item,AC){AC(item)}  
export function searchLink(substring, arr) {
  let matchingObjects = [];
  for(let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    function searchSubstring(obj) {
      for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'string' && value.toLowerCase().includes(substring.toLowerCase())) {
          return true;
        }
        if (typeof value === 'object' && searchSubstring(value)) {
          return true;
        }
      }
      return false;
    }
    let containsSubstring = searchSubstring(obj);
    if (containsSubstring) {
      matchingObjects.push(obj);
    }
  }
  return matchingObjects;
}
//______________________Comment page____________________
export const userElement = (name,comment,date,Theme) => {
  const d=new Date(date)
  return (
    <div className={`bg-${Theme.bg} bg-gradient border-${Theme.border} border border-opacity-50`} style={{width:'95%'}}>
      <div className="row w-100">
      <div className="col-3 d-flex justify-content-center align-items-center">
          {UserImg(60)}
      </div>
      <div className="col ml-3">
        <p className={`text-${Theme.font} fw-bold`}>{name}</p>
        <div className={`text-${Theme.font}`}>{comment}</div>
        <div className={`text-${Theme.font}`}>{d.getDay()}/{d.getMonth()}/{d.getFullYear()}</div>
      </div>
      </div>
    </div>
  );
};
export function openForm(AC){return AC(true)}
export function closeForm(AC){return AC(false)}
export function filterComments(arr,id_r){return arr.filter(item=>item.id_r===id_r)}
export const date = moment().format("YYYY-MM-DD HH:mm:ss");
export const initialValues = { text: "" };
export const validate = (values) => {const errors = {};return errors;};
  const onSubmit = (values,id_user,id_r,TC) => {
    let fData = new FormData();
    fData.append("id_r", id_r);
    fData.append("id_user", id_user);
    fData.append("comment", values.comment);
    fData.append("date_upload",date);
    TC(fData);
  };
export  const addComment=(statusComment,TC,id_user,id_r,AC)=>{
  if(statusComment===false){
    return(
      <div className="d-flex justify-content-center">
        <button 
        className="btn btn-success w-25" 
        onClick={()=>{openForm(AC)}}>
          Добавить комментарий 
        </button>
      </div>
    )}else{
  return(
    <Formik initialValues={initialValues} validate={validate}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values,id_user,id_r,TC);
            resetForm();}}>
                  {({ isSubmitting }) => (
                    <Form className="mx-auto">
                      {commentForm()}
                      <div 
                      className="d-flex justify-content-center align-items-center w-100 mb-3">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn btn-success mx-auto ">
                          Send
                        </button> 
                        <button 
                          className="btn btn-danger" 
                          onClick={()=>{closeForm(AC)}}>
                          X
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>)
    }};
export function liGenerator(item,items,setItems,id){
      return(
            <div className="w-100 mb-2 d-flex align-content-center ">
              <li className="p-2  list-group-item bg-dark border-dark text-white">
                <button className="btn btn-danger mx-2" onClick={()=>(setItems(items.filter((item) => item.id !== id)))}>{deleteSVG}</button>{item}
              </li>
            </div>
      )
    }
export const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
      return (
        <input
          id={id}
          name={name}
          type={type}
          onChange={handleClick}
          checked={isChecked}
        />
      );
    };
export function modifyRecommendation(recommendation, comments) {
    const modifiedRecommendation = [...recommendation];
    modifiedRecommendation.forEach((rec) => {
      const filteredComments = comments.filter((comment) => comment.id_r === rec.id_r);
      rec.comments = filteredComments;
    });
    return modifiedRecommendation;
  }
// COMMON FUNCTIONS
export function transformData(arr){
  for(let i=0;i<arr.length;i++){
    arr[i].id_r=String(arr[i].id_r)
  }
}
export const handleSelectAll = (setIsCheckAll,isCheckAll,setIsCheck,list) => {
  setIsCheckAll(!isCheckAll);
  setIsCheck(list.map(li => li.id_r));
  if (isCheckAll) {
    setIsCheck([]);
  }
};