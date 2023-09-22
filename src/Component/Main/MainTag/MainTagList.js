import React, { useEffect, useState } from "react";
import { Checkbox } from "../../Profile/Function";
import { transformData } from "../../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../../i18n'
import { DisplayImg } from "../../img";

 const MainTagList=(props)=>{
  const { t, i18n } = useTranslation();
  let tagArr=props.DB;
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
      <div className="w-50 mx-auto">
        <Checkbox
        className="mx-auto"
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
    <div className={`mx-auto w-100 bg-${props.Theme.bg}`}>
      <div className="row">
        <div>
          <h4 className="text-center">{t('TagList')}</h4>
        </div>
      <div className={` mx-auto w-50 border-bottom border-${props.Theme.border} border-1`}> 
      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
        {t('SelectAll')}
        <button 
          className={`btn btn-${props.Theme.btn}`} 
          onClick={sendFiltedArray}>
            {DisplayImg(20)}
        </button>
      </div>
            <div 
              className="overflow-auto" 
              style={{ maxHeight: "120px" }}>
              {catalog}
            </div>
      </div>
    </div>
  );
};
export default MainTagList;  

