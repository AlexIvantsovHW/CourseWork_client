import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkbox, TagList, Toolbar, UserForm, UserInformation, blockUser } from "./Function";
import { catalog } from "./Catalog";
import { publish } from "./FormikFunc";

const Profile = (props) => {
  let pageName= props.Users.filter(function (el) {
    return el.id ===(+props.id_user);
  })
  let ProfileName=props.Login.name;
  let ProfileId=props.Login.id;
  let Recommendation = props.Recommendation.recommendation;
  let status = props.Recommendation.setPublish;
  let score = props.Recommendation.userScore;
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
  debugger;
  return (
    <div class="col">
      <div className="row border h-100 d-flex flex-row align-items-center text-white bg-success-subtle bg-gradient">
        <TagList />
        <div className="col-4 mx-auto w-75 h-auto bg-dark  bg-gradient rounded-4">
          <UserInformation score={score} id_user={props.id_user} name={pageName[0].name}/>
          <div className="row border mt-2">
            <div className="text-center mb-2">
              <h4>Recommendation list</h4>
            </div>
            <div className="row border w-75 mx-auto" style={{ height: "20px" }}>
              <div className="col-1">
                <Checkbox type="checkbox" name="selectAll" id="selectAll" handleClick={handleSelectAll} isChecked={isCheckAll}/>
              </div>
              <Toolbar />
            </div>
            {catalog(Recommendation, isCheck, handleClick)}
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
