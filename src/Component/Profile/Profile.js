import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkbox, Toolbar, UserInformation, blockUser } from "./Function";
import { Catalog } from "./Catalog";
import TagList from './Tag/TagList';
import { handleSelectAll, transformData } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import FormikFunc from "./FormikFunc";

const Profile = (props) => {
  const [search,setSearch]=useState('');
  const { t, i18n } = useTranslation();
  let pageName= (props.Users[0].name===null?props.Users:props.Users.filter(function (el) {return el.id ===(+props.id_user);})),
     ProfileName=props.Login.name,
     ProfileId=props.Login.id,
     Recommendation = props.Recommendation.recommendation.filter((el)=>el.id_user===(+props.id_user)),
     Filter=props.Recommendation.Filter,
     transfromTagArr=transformData(Recommendation),
     status = props.Recommendation.setPublish,
     score = props.Recommendation.userScore,
     theme=props.Theme.theme;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [imgLink, setImgLink] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(Recommendation);
  }, [list]);

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  function onSuccess(files) {setImgLink(files);}
  return (
    <div class="col">
      <div className={`row h-100 d-flex flex-row align-items-center text-${theme.font} bg-${theme.bg} bg-gradient`}>
         <div className={`col-4 mx-auto w-75 h-auto bg-${theme.bg}  border-${theme.border} border rounded-4  border-opacity-50`}>
        <div className="row">          
          <UserInformation theme={theme} t={t} score={score} id_user={props.id_user} name={pageName[0].name}/>
          <TagList
                Theme={theme} 
                themeAC={props.themeAC}
                filterAC={props.filterAC}
                tagsAC={props.tagsAC}
                DB={Recommendation}
            /></div>
          <div className={`row mt-2 border-${theme.border} border-1`}>
            <div className={`text-center mb-2 text-${theme.font}`}>
              <h4 className="text-center">{t('RecommendationHeader')}</h4>
            </div>
            <div className={`row border-bottom border-${theme.border} border-3 w-75 mx-auto`} style={{ height: "50px" }}>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Checkbox 
                  type="checkbox" 
                  name="selectAll" 
                  id="selectAll" 
                  handleClick={()=>{handleSelectAll(setIsCheckAll,isCheckAll,setIsCheck,list)}} 
                  isChecked={isCheckAll}/>
              </div>
              <Toolbar 
                isCheck={isCheck}
                deleteRecommendationTC={props.deleteRecommendationTC}
                list={list}
                setList={setList}
                sortProfileTC={props.sortProfileTC}
                getSortTC={props.getSortTC}
                theme={theme}
                />
            </div>
            <div 
              className="w-100 mx-auto mb-2 overflow-x-hidden overflow-y-auto" 
              style={{ maxHeight: "300px" }}>
               <Catalog
                  list={list}
                  isCheck={isCheck}
                  handleClick={handleClick}
                  Filter={Filter}
                  rate={props.Recommendation.rate}
                  totalScore={props.Recommendation.totalScore}
                  t={t}
                  theme={theme}
               />
            </div>
            <div>
            <div className="mx-auto">
              {blockUser(
                ProfileId,
                props.id_user,
                ProfileName,
                <FormikFunc
                  status={status}
                  setPublishAC={props.setPublishAC}
                  id_user={props.id_user}
                  getAddRecomendTC={props.getAddRecomendTC}
                  onSuccess={onSuccess}
                  imgLink={imgLink}
                  theme={theme}
                  setReviewImageTC={props.setReviewImageTC}
                />
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
