import React from "react";

const TagList=()=>{
    return(
        <div className="col-2 h-75 bg-dark bg-gradient rounded-4 m-1" style={{maxWidth:'100px'}}>
        <div>TAG LIST</div>
        <div>
          <div><input type="checkbox"/>Tag1</div>
          <div><input type="checkbox"/>Tag1</div>
          <div><input type="checkbox"/>Tag1</div>
          <div><input type="checkbox"/>Tag1</div>
        </div>
      </div>
    )
}
export default TagList;