import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = (props) => {
  function sort(sort, data) {
    const fData = new FormData();
    fData.append("sort", sort);
    fData.append("field", data);
    props.getSortTC(fData);
  }
  let DBlist = props.DB.map((el) => {
    return (
      <div className="row border">
        <div className="col">
          <div>Title: {el.title}</div>
          <div>Date: {el.date_upload}</div>
          <div>Score: {el.score}</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
