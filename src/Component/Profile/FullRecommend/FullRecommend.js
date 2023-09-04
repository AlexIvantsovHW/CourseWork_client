import { Form, Formik } from "formik";
import React from "react";
import moment from "moment";
import { UserForm } from "../Function";

const FullRecommend = (props) => {
  let status=props.status;
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
    
    const recommendList=props.Recommendation;
    const targetId=+props.id_r;
    const targetRecommendation = recommendList.filter(rec => rec.id_r === targetId);
    const initialValues = { text: "" };
    const validate = (values) => {const errors = {};return errors;};
  const onSubmit = (values) => {
    let fData = new FormData();
    fData.append("id_r", props.id_r);
    fData.append("id_user", targetRecommendation[0].id_user);
    fData.append("image", (!values.file?null:values.file));
    fData.append("title", values.title);
    fData.append("name", values.name);
    fData.append("group", values.group);
    fData.append("category", values.category);
    fData.append("text", values.text);
    fData.append("tag", values.tag);
    fData.append("date_upload",date);
    props.getUpdateTC(fData);
  };
  function openForm(){return props.setUpdateAC(true)}
  function closeForm(){return props.setUpdateAC(false)}

    const update=()=>{if(status===false){return(<button onClick={openForm}>Update review?</button>)}else{
      return(
    <Formik initialValues={initialValues} validate={validate}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();}}>
                  {({ isSubmitting }) => (
                    <Form className="mx-auto">{UserForm()}
                      <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                        <button type="submit" disabled={isSubmitting}
                          className="btn btn-success mx-auto ">
                          Update</button> 
                          <button onClick={closeForm}>X</button>
                      </div>
                    </Form>
                  )}
                </Formik>)
    }};
    
  return (

    <div class="col">
    <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
       <div className="mx-auto w-50 h-auto bg-dark  bg-gradient rounded-4">
       <div className="mb-2">
         <h1 className="text-center">{targetRecommendation[0].title}</h1>
         <div>Img</div>
       <div className="bg-light text-black overflow-auto" style={{ height: "300px" }}>
         <p>{targetRecommendation[0].text}</p>
       </div><div className="mx-auto border">{update()}</div>
       </div>

       </div>
       
     </div>
</div>
  );
};

export default FullRecommend;
