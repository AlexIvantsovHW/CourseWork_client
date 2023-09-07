import React from "react";
import { UserImg, img_return } from "./../../img";
import { addComment } from "./FormikFunc";



const Expand = (props) => {
debugger;
  const recommendList = props.DB.DB;
  const targetId = recommendList[0].id_r === null ? 0 : +props.id_r;
  const targetRecommendation = recommendList.filter((rec) => rec.id_r === targetId);
  function openForm(AC){return AC(true)}
  function closeForm(AC){debugger;return AC(false)}
  function filterComments(arr,id_r){return arr.filter(item=>item.id_r===id_r)}
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
  let filteredComments=filterComments(props.DB.comments,+props.id_r),
      statusComment=props.statusComment;
  return (
    <div class="col">
      <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
        <div className="row mx-auto w-75 mr-1 h-auto bg-dark  bg-gradient rounded-4">
          <div className="row mb-2">
            <h1 className=" text-center">{targetRecommendation[0].title}</h1>
            <div className="col-4 h-100">{img_return(targetRecommendation[0].image, 250)}</div>
            <div
              className="col bg-light text-black overflow-auto"
              style={{ height: "250px" }}
            >
              <p>{targetRecommendation[0].text}</p>
            </div>
          </div>

          <div>
          {(props.DB.setView===false?
          <div className="d-flex justify-content-center">
            <a 
            className="text-center fst-italic text-decoration-none" 
            onClick={()=>{openForm(props.setViewAC)}}>
              View comments
            </a>
          </div>
          :
          <div>
           <div>
           <div className="d-flex justify-content-end">
              <button className="btn btn-danger"
                      onClick={()=>{closeForm(props.setViewAC)}}>X
              </button>
            </div>
            <div><h4 className="text-center">Comments</h4></div>
           </div>
            <div
                className="container ml-2 d-grid gap-2  text-black  overflow-auto border"
                style={{ height: "120px", width: "95%",margin:'1.5%' }}>  
                {filteredComments.map((user)=>{return userElement(user.name,user.comment,user.date_upload)})}
            </div>
            {addComment(
                statusComment, props.setCommentsTC,
                targetRecommendation[0].id_user,
                targetId,props.setCommentStatusAC,
                props.setViewAC
              )}
      </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expand;
