import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkbox, Toolbar, UserInformation, blockUser } from "./Function";
import { Catalog, catalog } from "./Catalog";
import FormikFunc, { publish } from "./FormikFunc";
import TagList from './Tag/TagList';
import { handleSelectAll, transformData } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'

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
      <div className="row h-100 d-flex flex-row align-items-center text-white bg-dark bg-gradient">
      <TagList
                Theme={theme} 
                themeAC={props.themeAC}
                filterAC={props.filterAC}
                tagsAC={props.tagsAC}
                DB={Recommendation}
            />
        <div className={`col-4 mx-auto w-75 h-auto bg-${theme.bg}  border-${theme.border} border rounded-4  border-opacity-50`}>
          <UserInformation t={t} score={score} id_user={props.id_user} name={pageName[0].name}/>
          <div className="row mt-2 border-danger border-1">
            <div className={`text-center mb-2 text-${theme.font}`}>
              <h4>{t('RecommendationHeader')}</h4>
            </div>
            <div className={`row border-bottom border-${theme.border} border-3 w-75 mx-auto`} style={{ height: "40px" }}>
              <div className="col-1">
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
                />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
