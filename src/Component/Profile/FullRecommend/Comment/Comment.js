import { React } from "react";
import { 
  addComment, 
  closeForm, 
  filterComments, 
  openForm, 
  userElement 
} from "../../../CommonFunc";


const Comment = (props) => {
  let filteredComments=filterComments(props.comments,props.targetId)

  if(props.statusView===false){return(
  <a 
  className="text-center fst-italic text-decoration-none" 
  onClick={()=>{openForm(props.setViewAC)}}>View comments</a>)}
  else{
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
      {addComment(
                props.statusComment, 
                props.setCommentsTC,
                props.id_user,
                props.targetId,
                props.setCommentStatusAC,
                props.setViewAC
              )}
              
    </>
  );}
};
export default Comment;
