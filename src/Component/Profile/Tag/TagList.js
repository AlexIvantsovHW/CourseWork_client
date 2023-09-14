import React, { useEffect, useState } from "react";
import { handleSelectAll, liGenerator, transformData } from "../../CommonFunc";
import { addSVG } from "../../img";
import { Checkbox} from "../Function";
import { useTranslation } from 'react-i18next';
import '../../../i18n'

 const TagList=(props)=>{
  const { t, i18n } = useTranslation();
  let tagArr=props.DB;
  let transfromTagArr=transformData(props.DB)
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(tagArr);
  }, [list]);

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
          <h4 className="text-center">{t('TagList')}</h4>
        </div>
      <div className="border-bottom">
      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={()=>{handleSelectAll(setIsCheckAll,isCheckAll,setIsCheck,list)}}
        isChecked={isCheckAll}
      />
      {t('SelectAll')}
      </div>
            <div className="bg-gradient overflow-auto" style={{ maxHeight: "380px" }}>
      {catalog}
      </div>
      
      <div className="w-100 d-flex justify-content-center align-items-center">
        <button className='btn btn-success w-50 h-75' onClick={sendFiltedArray}>Display</button>
      </div>

      </div>
    </div>
  );
};
export default TagList;  

