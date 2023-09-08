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
  const catalog = list.map(({ id_r, name }) => {
    return (
      <>
        <Checkbox
          type="checkbox"
          name={name}
          id={id_r}
          handleClick={handleClick}
          isChecked={isCheck.includes(id_r)}
        />
        {name}
      </>
    );
  });

  function toNumber(arr){arr.map((el)=>Number(el))}
  function sendFiltedArray(){
    function filterDBById(DB, check) {return DB.filter(item => check.includes(item.id_r));}
    const filteredData=filterDBById(tagArr,isCheck);
    props.filterAC(filteredData.map(item => ({ id: item.id_r, value: item.tag })))
  }
  return (
    <div>

      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      Select All
      {catalog}
      <button onClick={sendFiltedArray}>Send</button>
    </div>
  );
};
export default TagList;  

