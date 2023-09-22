import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserInformation, blockUser } from "./Function";
import { catalog } from "./Catalog";
import TagList from './Tag/TagList';
import { transformData } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'

const UserProfile = (props) => {
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
          <div className="col d-flex justify-content-center align-content-center">
          <UserInformation 
            theme={theme}  
            score={score} 
            id_user={props.id_user} 
            name={pageName[0].name}
            />
          </div>
          <div className="col">
          <TagList
                Theme={theme} 
                themeAC={props.themeAC}
                filterAC={props.filterAC}
                tagsAC={props.tagsAC}
                DB={Recommendation}
            />
          </div>
        </div>   
          <div className={`row mt-2 border-${theme.border} border-1`}>
          <div className={`mx-auto w-75 text-center mb-2 text-${theme.font} border-${theme.border} border-bottom border-3`}>
              <h4>{t('RecommendationHeader')}</h4>
            </div>
            {catalog(list, isCheck, handleClick,
              Filter,props.Recommendation.rate,
              props.Recommendation.totalScore,
              props.id_user,theme,t)}
            <div className="mx-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
