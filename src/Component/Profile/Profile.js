import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from "formik";
import { Checkbox,Toolbar, UserForm, UserInformation } from "./ProfileForm";
import { catalog } from "./Catalog";
import moment from "moment";
import TagList  from './TagList';
import DropboxChooser from './../Dropbox-chooser';

const Profile = (props) => {
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  let Recommendation=props.Recommendation.recommendation;
  let status=props.Recommendation.setPublish;
  let score=props.Recommendation.score;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [imgLink,setImgLink]=useState([])
  const [list, setList] = useState([]);
  function openForm(){return props.setPublishAC(true)}
  function closeForm(){return props.setPublishAC(false)}
  useEffect(() => {setList(Recommendation);}, [Recommendation]);

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
  function onSuccess(files){setImgLink(files)}
  const initialValues = { text: "" };
  const validate = (values) => {const errors = {};return errors;};
  const onSubmit = (values) => {
    let fData = new FormData();
    fData.append("id_user", props.id_user);
    fData.append("image", (!imgLink?null:imgLink));
    fData.append("title", values.title);
    fData.append("name", values.name);
    fData.append("group", values.group);
    fData.append("category", values.category);
    fData.append("text", values.text);
    fData.append("tag", values.tag);
    fData.append("date_upload",date);
    props.getAddRecomendTC(fData);
  };
  const publish=()=>{if(status===false){return(<button onClick={openForm}>Add recommendation</button>)}else{
    return(
<Formik initialValues={initialValues} validate={validate}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();}}>
                {({ isSubmitting }) => (
                  <>
                  <h5 style={{textAlign:'center'}}>Upload or choose image from DropBox</h5>
                  <div><DropboxChooser  onSuccess={onSuccess}/></div>
                  <Form className="mx-auto">{UserForm()}
                    <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                      <button type="submit" disabled={isSubmitting}
                        className="btn btn-success mx-auto ">
                        Publish</button> 
                        <button onClick={closeForm}>X</button>
                    </div>
                  </Form></> 
                )}
              </Formik>)
  }};
debugger;
  return (
    <div class="col">
      <div className="row border h-100 d-flex flex-row align-items-center text-white bg-success-subtle bg-gradient">
      <TagList/>
        <div className="col-4 mx-auto w-75 h-auto bg-dark  bg-gradient rounded-4">
          <UserInformation score={score} id_user={props.id_user} name={props.Login}/>
          <div className="row border mt-2">
            <div className="text-center mb-2"><h4>Recommendation list</h4></div>
            <div className="row border w-75 mx-auto" style={{ height: "20px" }}>
              <div className="col-1">
              <Checkbox type="checkbox" name="selectAll" id="selectAll" handleClick={handleSelectAll} isChecked={isCheckAll}/>
              </div>
              <Toolbar/>
            </div>
            <div className="border w-75 mx-auto mb-2 overflow-auto" style={{ height: "300px" }}>
              {catalog(Recommendation,isCheck,handleClick)}</div>
            <div className="mx-auto border">
            
              {publish()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

