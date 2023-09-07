import { React } from "react";
import { UserImg } from "../../../img";
import { AddComment } from "./FormikFunc";

const Comments=[
    {name:'ALex',comment:'it is my first comment',date:'2023-08-16'},
    {name:'ALex',comment:'it is my first comment',date:'2023-08-16'},
    {name:'ALex',comment:'it is my first comment',date:'2023-08-16'},
    {name:'ALex',comment:'it is my first comment',date:'2023-08-16'},
]

const Comment = (props) => {
  debugger;
  let userElement = (name,comment,date) => {
    return (
      <div className="row border bg-white">
        <div className="col-1 ">
            {UserImg(70)}
        </div>
        <div className="col ml-1">
          <div className="">
            <h6>{name}</h6>
          </div>
          <div className="">{comment}</div>
          <div className="">{date}</div>
        </div>
      </div>
    );
  };
  function openForm(AC){return AC(true)}
  function closeForm(AC){debugger;return AC(false)}
  function filterComments(arr,id_r){return arr.filter(item=>item.id_r===id_r)}
  let filteredComments=filterComments(props.comments,props.targetId)

  if(props.statusView===false){return(
  <a className="text-center fst-italic text-decoration-none" onClick={()=>{openForm(props.setViewAC)}}>View comments</a>)}else{
  return (
    <>
    <div className="d-flex justify-content-end"><button 
    className="btn btn-danger"
    onClick={()=>{closeForm(props.setViewAC)}}>X</button></div>
    <div><h4 className="text-center">Comments</h4></div>
      <div
        className="container ml-2 d-grid gap-2  text-black  overflow-auto border"
        style={{ height: "120px", width: "95%",margin:'1.5%' }}
      >
        
        {filteredComments.map((user)=>{return userElement(user.name,user.comment,user.date_upload)})}
      </div>
      {AddComment(
                props.statusComment, props.setCommentsTC,
                props.id_user,
                props.targetId,props.setCommentStatusAC,
                props.setViewAC
              )}
              
    </>
  );}
};
export default Comment;
