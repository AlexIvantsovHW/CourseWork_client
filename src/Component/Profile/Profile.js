import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkbox, Toolbar, UserInformation, blockUser } from "./Function";
import { catalog } from "./Catalog";
import { publish } from "./FormikFunc";
import TagList from './Tag/TagList';
import { handleSelectAll, searchLink, transformData } from "../CommonFunc";


const Profile = (props) => {
  const [search,setSearch]=useState('');
  
  let pageName= (props.Users[0].name===null?props.Users:props.Users.filter(function (el) {return el.id ===(+props.id_user);})),
     ProfileName=props.Login.name,
     ProfileId=props.Login.id,
     Recommendation = props.Recommendation.recommendation,
     Filter=props.Recommendation.Filter,
     /* filteredData=searchLink(search,Recommendation), */
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
  function onSuccess(files) {
    setImgLink(files);
  }
 
  return (
    <div class="col">
      <div className="row border h-100 d-flex flex-row align-items-center text-white bg-success-subtle bg-gradient">
      <TagList
                Theme={props.Theme.theme} 
                themeAC={props.themeAC}
                filterAC={props.filterAC}
                tagsAC={props.tagsAC}
                DB={Recommendation}
            />
        <div className={`col-4 mx-auto w-75 h-auto bg-${theme}  bg-gradient rounded-4`}>
          <UserInformation score={score} id_user={props.id_user} name={pageName[0].name}/>
          <div className="row border mt-2">
            <div className="text-center mb-2">
              <h4>Recommendation list</h4>
            </div>
            <div className="row border w-75 mx-auto" style={{ height: "20px" }}>
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
                />
            </div>
            {catalog(list, isCheck, handleClick,Filter,props.Recommendation.rate,props.Recommendation.totalScore)}
            <div className="mx-auto border">
              {blockUser(
                ProfileId,
                props.id_user,
                ProfileName,
                publish(
                status,
                props.setPublishAC,
                props.id_user,
                props.getAddRecomendTC,
                onSuccess,
                imgLink
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
