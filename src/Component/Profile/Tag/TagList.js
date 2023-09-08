import React, { useEffect, useState } from "react";
import { liGenerator } from "../../CommonFunc";
import { addSVG } from "../../img";
import { Checkbox, tagArrCreator } from "../Function";
import { Field, Form, Formik } from "formik";

 const TagList=(props)=>{

  let tagArr=props.DB/* tagArrCreator(props.DB) */;
  function transformData(arr){
    for(let i=0;i<arr.length;i++){
      arr[i].id_r=String(arr[i].id_r)
    }
  }
  let transfromTagArr=transformData(props.DB)
  console.log(transfromTagArr)
  console.log(props.DB)

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
    }
  };

  console.log(isCheck);

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
    </div>
  );
};
export default TagList;  

