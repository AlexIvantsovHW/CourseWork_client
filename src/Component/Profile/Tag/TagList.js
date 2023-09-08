import React, { useEffect, useState } from "react";
import { liGenerator } from "../../CommonFunc";
import { addSVG } from "../../img";
import { Checkbox, tagArrCreator } from "../Function";
import { Field, Form, Formik } from "formik";

 const TagList=(props)=>{
debugger;
  let tagArr=props.DB;
  function transformData(arr){
    for(let i=0;i<arr.length;i++){
      arr[i].id_r=String(arr[i].id_r)
    }
  }
  let transfromTagArr=transformData(props.DB)
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(tagArr);
  }, [list]);
  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id_r));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
      props.filterAC(isCheck)
    }
  };
  const catalog = list.map(({ id_r, tag }) => {
    return (
      <div >
        <Checkbox
          type="checkbox"
          name={tag}
          id={id_r}
          handleClick={handleClick}
          isChecked={isCheck.includes(id_r)}
        />
        {tag}
      </div>
    );
  });

  function sendFiltedArray(){
    
    function filterDBById(DB, check) {return DB.filter(item => check.includes(item.id_r));}
    let filteredData=filterDBById(tagArr,isCheck),
        transformArrData=filteredData.map(item => ({ id: item.id_r, value: item.tag }));
if(transformArrData.length===0){transformArrData=[{id:null,value:null}]}else{
  transformArrData=filteredData.map(item => ({ id: item.id_r, value: item.tag }));
}
    props.filterAC(transformArrData)
  }
  return (
    <div className="col-2 bg-dark">
      <div className="row">
        <div>
          <h4 className="text-center">Tag</h4>
        </div>
      <div className="border-bottom">
      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      Select All
      </div>
            <div className="bg-gradient overflow-auto" style={{ maxHeight: "380px" }}>
      {catalog}
      </div>
      
      <button onClick={sendFiltedArray}>Send</button>

      </div>
    </div>
  );
};
export default TagList;  

