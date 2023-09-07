import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkbox, TagList, Toolbar, UserInformation, blockUser } from "./Function";
import { catalog } from "./Catalog";
import { publish } from "./FormikFunc";
import TagContainer from "./Tag/TagContainer";

const Profile = (props) => {
  debugger;
  let pageName= (props.Users[0].name===null?props.Users:props.Users.filter(function (el) {return el.id ===(+props.id_user);})),
     ProfileName=props.Login.name,
     ProfileId=props.Login.id,
     Recommendation = props.Recommendation.recommendation,
     Filter=props.Recommendation.Filter,
     status = props.Recommendation.setPublish,
     score = props.Recommendation.userScore,
     theme=props.Theme.theme;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [imgLink, setImgLink] = useState([]);
  const [list, setList] = useState([]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(Recommendation.map((li) => li.id_r));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e) => {
    const { id_r, checked } = e.target;
    setIsCheck([...isCheck, id_r]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id_r));
    }
  };
  function onSuccess(files) {
    setImgLink(files);
  }
  useEffect(() => {
    setList(Recommendation);
  }, [Recommendation]);
  return (
    <div class="col">
      <div className="row border h-100 d-flex flex-row align-items-center text-white bg-success-subtle bg-gradient">
        <TagContainer/>
        <div className={`col-4 mx-auto w-75 h-auto bg-${theme}  bg-gradient rounded-4`}>
          <UserInformation score={score} id_user={props.id_user} name={pageName[0].name}/>
          <div className="row border mt-2">
            <div className="text-center mb-2">
              <h4>Recommendation list</h4>
            </div>
            <div className="row border w-75 mx-auto" style={{ height: "20px" }}>
              <div className="col-1">
                <Checkbox 
                  type="checkbox" name="selectAll" 
                  id="selectAll" handleClick={handleSelectAll} 
                  isChecked={isCheckAll}/>
              </div>
              <Toolbar />
            </div>
            {catalog(Recommendation, isCheck, handleClick,Filter)}
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
