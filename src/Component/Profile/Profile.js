import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from "formik";
import { Checkbox,Toolbar, ImgReview, UserForm, UserInformation } from "./ProfileForm";
import { Correct, Expand, Like } from "../img";


const Profile = (props) => {
  let Recommendation=props.Recommendation.recommendation;

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
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
  const initialValues = { text: "" };
  const validate = (values) => {const errors = {};return errors;};
  const submit = (values) => {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("text", values.text);
    props.getRegistrationTC(fData);
  };

  const catalog = Recommendation.map(({ id_r, recommend_name,recommend_score,date,group_name,recommendation,recommend_tag}) => {
    return (
      <div className="row bg-white text-black border-bottom">
        <div className="col-1 d-flex justify-content-center align-items-center">
          <Checkbox
            key={id_r}
            type="checkbox"
            name={recommend_name}
            id={id_r}
            handleClick={handleClick}
            isChecked={isCheck.includes(id_r)}
          />
        </div>
        <div className="col-1  d-flex justify-content-center align-items-center">{id_r}</div>
        <div className="col-3  mx-auto"><ImgReview score={recommend_score} date={date}/>
        </div>
        <div className="col   text-black">
          <div className="row text-center"><h5 className="col">{recommend_name}</h5><div className="col">{Expand}</div></div>
          <div className="text-start font-weight-bold"><p>{recommend_name}/{group_name}</p></div>
          <div className="text-start">{recommendation} {Correct}</div>
          <div className="row"><div className="col-9">Tags:{recommend_tag}</div> <div className="col">{Like}</div></div>
        </div>
      </div>
    );
  });

  return (
    <div class="col">
      <div className="row border h-100 d-flex flex-row align-items-center text-white bg-success-subtle bg-gradient">
      <div className="col-2 h-75 bg-dark bg-gradient rounded-4 m-1" style={{maxWidth:'100px'}}>
        <div>TAG LIST</div>
        <div>
          <div><input type="checkbox"/>Tag1</div>
          <div><input type="checkbox"/>Tag1</div>
          <div><input type="checkbox"/>Tag1</div>
          <div><input type="checkbox"/>Tag1</div>
        </div>
      </div>
        <div className="col-4 mx-auto w-75 h-auto bg-dark  bg-gradient rounded-4">
          <UserInformation/>

          <div className="row border mt-2">
            <div className="text-center mb-2">
              <h4>User recommendations</h4>
            </div>
            <div className="row border w-75 mx-auto" style={{ height: "20px" }}>
              <div className="col-1">
              <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
              </div>
              <Toolbar/>
            </div>
            <div className="border w-75 mx-auto mb-2 overflow-auto" style={{ height: "300px" }}>{catalog}</div>
            <div className="mx-auto border">
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submit}
              >
                {({ isSubmitting }) => (
                  <Form className="mx-auto">
                    {UserForm()}
                    <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-success mx-auto "
                      >
                        Publish
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

