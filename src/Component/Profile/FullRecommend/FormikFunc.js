import { Form, Formik } from "formik";
import moment from "moment";
import { UserForm } from "../Function";
import DropboxChooser from "../../Dropbox-chooser";


const date = moment().format("YYYY-MM-DD HH:mm:ss");
const initialValues = { text: "" };
const validate = (values) => {const errors = {};return errors;};
  const onSubmit = (values,id_user,id_r,TC) => {
    let fData = new FormData();
    fData.append("id_r", id_r);
    fData.append("id_user", id_user);
    fData.append("image", (!values.file?null:values.file));
    fData.append("title", values.title);
    fData.append("name", values.name);
    fData.append("group", values.group);
    fData.append("category", values.category);
    fData.append("text", values.text);
    fData.append("tag", values.tag);
    fData.append("date_upload",date);
    TC(fData);
  };

  function openForm(AC){return AC(true)}
  function closeForm(AC){debugger;return AC(false)}
export  const update=(status,TC,id_user,id_r,AC)=>{
  if(status===false){
    return(
      <div className="d-flex justify-content-center align-items-center w-100 mb-1 mt-1">
        <button className="btn btn-warning mx-auto" onClick={()=>{openForm(AC)}}>Update review</button>
      </div>
    )}else{
  
 
  return(
    <Formik initialValues={initialValues} validate={validate}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values,id_user,id_r,TC);
            resetForm();}}>
                  {({ isSubmitting }) => (
                    <Form className="mx-auto">{UserForm()}
                      <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                        <button type="submit" disabled={isSubmitting}
                          className="btn btn-success mx-auto ">
                          Update</button> 
                          <button className="btn btn-danger" onClick={()=>{closeForm(AC)}}>X</button>
                      </div>
                    </Form>
                  )}
                </Formik>)
    }};
    
