import { Field } from "formik";
import { Camera, DateSort, Like, ProfileImg, TrashImg, UsersImg, img_return } from "../img";
import React, { useEffect, useState } from "react";
import { sort } from "../Main/Expand/Function";
import RangeSlider from "react-bootstrap-range-slider";

export function UserForm(t, i18n) {
  function basicForm(name,type,plholder){
    return(
      <div className="row d-flex justify-content-end">
      <div className="col ">
        <Field
          className="form-control form-control-sm mx-auto w-75 mt-1 mb-2"
          component="input"
          name={name}
          placeholder={`${plholder}`}
          type={type}
        />
      </div>
    </div>
    )
  }
  return (
    <div className="row mb-2">
      <div className="col ml-4" >
        <div className="row">
          {basicForm('title','text',t('inputTitle'))}
          {basicForm('name','text',t('inputName'))}
          {basicForm('group','text',t('inputGroup'))}
          {basicForm('category','text',t('inputCategory'))}
          {basicForm('tag','text',t('inputTag'))}
        </div>
      </div>
       <div className="col mr-4">
        <Field
          className="form-control form-control-sm mx-0 w-75 h-100 mt-1 mb-1"
          component="input"
          name={"text"}
          placeholder={t('inputText')}
          type={"input"}
        />
      </div>
    </div>
  );
}
export function commentForm(Theme,t,i18n) {
  return (
       <div className="col mr-4 w-100">
        <Field
          className={`form-control form-control-sm mx-0 w-100 h-100 mt-1 mb-1 `}
          component="input"
          name={"comment"}
          placeholder={t('inputComment')}
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
export function Recommendations(id, name, handleClick, isCheck){
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
  const [asc,setASC]=useState(true)
  const deleteReview=()=>{
    const dataToDelete={data: props.isCheck.map((el)=>parseInt(el))}
    props.deleteRecommendationTC(dataToDelete)
  }
  const [isAscending, setIsAscending] = useState(true);

  const sortBy = () => {
    const sortedArray = [...props.list].sort((a, b) => {
      if (a.id_r < b.id_r) return -1;
      if (a.id_r > b.id_r) return 1;
      return 0;
    });

    if (!isAscending) {
      sortedArray.reverse();
    }

    props.setList(sortedArray);
    setIsAscending(!isAscending);
  };

  return (
    <>
      <div className="col">id</div>
      <div className="col"><button className={`btn btn-${props.theme.btn}`}onClick={deleteReview}>{TrashImg(20)}</button></div>
      <div className="col"><button className={`btn btn-${props.theme.btn}`} onClick={sortBy /* () => {sort( "date_upload",props.getSortTC,asc,setASC); } */}>{DateSort(20)}</button></div>
      <div className="col-1">
      <button onClick={() => {sort("DESC", "date_upload",props.sortProfileTC);}}>{'>'}</button>
      </div>
    </>
  );
};
export const UserInformation = (props) => {

  return (
    <div className="row ">
      <div className="col-4 d-flex justify-content-center align-items-center">
        <div className="row d-flex flex-column">
        <div className="col mx-auto">{ProfileImg(100)}</div>
        <div className="col d-flex justify-content-center align-items-center">{Like(20)} {setUserLike(props.score,props.id_user)}</div>
        </div>
         
      </div>
      <div className="col ">
      <div>
        {props.t('UserName')} {props.name} 
      </div>
      <div>
        
      </div>
      <div>
      <div>
      </div>              
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