import { Field } from "formik";
import { Camera, img_return } from "../img";
import React, { useState } from "react";
import { sort } from "../Main/Expand/Function";

export function UserForm(data) {
  function basicForm(label,name,type){
    return(
      <div className="row d-flex justify-content-end">
      <div className="col-2  d-flex align-items-center  justify-content-end">
        <h6 className="text-center">{label}</h6>
      </div>
      <div className="col ">
        <Field
          className="form-control form-control-sm mx-auto w-75 mt-1 mb-2"
          component="input"
          name={name}
          placeholder={`Type ${name}`}
          type={type}
        />
      </div>
    </div>
    )
  }
  return (
    <div className="row mb-2 border">
      <div className="col ml-4 border" >
        <div className="row">
          {basicForm('Title','title','text')}
          {basicForm('Name','name','text')}
          {basicForm('Group','group','text')}
          {basicForm('Category','category','text')}
          {basicForm('Tag','tag','text')}
        </div>
      </div>
       <div className="col mr-4 border">
        <Field
          className="form-control form-control-sm mx-0 w-75 h-100 mt-1 mb-1"
          component="input"
          name={"text"}
          placeholder={"Type recommendation"}
          type={"input"}
        />
      </div>
    </div>
  );
}
export function commentForm(data) {
  return (
       <div className="col mr-4 border">
        <Field
          className="form-control form-control-sm mx-0 w-100 h-100 mt-1 mb-1"
          component="input"
          name={"comment"}
          placeholder={"Type recommendation"}
          type={"input"}
        />
      </div>
  );
}
function setUserLike(arr,id_user){
  if (arr[0].id_user===null){return 0}
  let targetObj=arr.find(obj=>obj.id_user===Number(id_user));
  if (targetObj===undefined){return 0}
  else{return targetObj.userLikes}
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
export function Recommendations(id, name, handleClick, isCheck) {
  return (
    <div className="row border">
      <div className="col-1 border d-flex justify-content-center align-items-center">
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
      </div>
      <div className="col-1 border d-flex justify-content-center align-items-center">
        id
      </div>
      <div className="col-3 border mx-auto">
        <div
          className="row border mx-auto"
          style={{ maxHeight: "150px", maxWidth: "150px" }}
        >
          {Camera}
        </div>
        <div className="row border d-flex justify-content-center align-items-center">
          Score
        </div>
        <div className="row border d-flex justify-content-center align-items-center">
          upload data
        </div>
      </div>
      <div className="col border">
        <div>name review</div>
        <div>film name/ group name</div>
        <div>text</div>
        <div>Tags:tag</div>
      </div>
    </div>
  );
}
export const Toolbar = (props) => {
  const [isASC,setisASC]=useState(true)
  const deleteReview=()=>{
    const dataToDelete={data: props.isCheck.map((el)=>parseInt(el))}
    props.deleteRecommendationTC(dataToDelete)
  } 
  function dateSortedData(){
    let data=props.list,
        sortedData=data;
    if(isASC===true){
      sortedData=data.sort((x, y) => new Date(x.date_upload) - new Date(y.date_upload))
      props.setList(sortedData)
      setisASC(false)
    }else{
      sortedData=data.sort((x, y) =>new Date(y.date_upload) - new Date(x.date_upload))
      props.setList(sortedData)
      setisASC(true)
    }
  }
 
  return (
    <>
      <div className="col-1">id</div>
      <div className="col-1"><button onClick={deleteReview}>delete</button></div>
      <div className="col-1"><button onClick={() => {sort("ASC", "date_upload",props.sortProfileTC);}}>{'<'}</button></div>
      <div className="col-1">
      <button onClick={() => {sort("DESC", "date_upload",props.sortProfileTC);}}>{'>'}</button>
      </div>
    </>
  );
};
export const UserInformation = (props) => {
  return (
    <div className="row ">
      <div className="col-4 ">User Ava</div>
      <div className="col ">
      <div>
        User name: {props.name} 
      </div>
      <div>
        Total user's like: {setUserLike(props.score,props.id_user)} 
      </div>

      </div>
    </div>
  );
};
export const ImgReview = (props) => {
  return (
    <>
      <div
        className="row  mx-auto"
        style={{ maxHeight: "150px", maxWidth: "150px" }}
      >
        {((props.img===null)||(props.img==='null')?Camera:img_return(props.img))}
      </div>
      <div className="row  d-flex justify-content-center align-items-center">
        {props.score}
      </div>
      <div className="row  d-flex justify-content-center align-items-center">
        {props.date}
      </div>
    </>
  );
};
export function blockUser(ProfileId,id_user,ProfileName,Component){
  if((ProfileId===(+id_user))||ProfileName==='Admin'){
    return Component
  }else {return null}
}

//__________________ CLOUD OF TAG_________________
export function tagArrCreator(arr){
  let tagList=[];
  for(let i=0;i<arr.length;i++){
    tagList.push(arr[i].tag)
  }
  return tagList;
} 