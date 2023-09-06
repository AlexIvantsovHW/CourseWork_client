import { Form, Formik } from "formik";
import moment from "moment";
import { UserForm, commentForm } from "../../Function";



const date = moment().format("YYYY-MM-DD HH:mm:ss");
const initialValues = { text: "" };
const validate = (values) => {const errors = {};return errors;};
  const onSubmit = (values,id_user,id_r,TC) => {
    debugger;
    let fData = new FormData();
    fData.append("id_r", id_r);
    fData.append("id_user", id_user);
    fData.append("comment", values.comment);
    fData.append("date_upload",date);
    TC(fData);
  };

  function openForm(AC){return AC(true)}
  function closeForm(AC){return AC(false)}
export  const AddComment=(statusComment,TC,id_user,id_r,AC)=>{
  if(statusComment===false){
    return(
      <div className="d-flex justify-content-center">
        <button className="btn btn-success w-25" onClick={()=>{openForm(AC)}}>Add comment</button>
      </div>
    )}else{
  
 
  return(
    <Formik initialValues={initialValues} validate={validate}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values,id_user,id_r,TC);
            resetForm();}}>
                  {({ isSubmitting }) => (
                    <Form className="mx-auto">
                      {commentForm()}

                      <div className="d-flex justify-content-center align-items-center w-100 mb-3">
                        <button type="submit" disabled={isSubmitting}
                          className="btn btn-success mx-auto ">
                          Send</button> 
                          <button className="btn btn-danger" onClick={()=>{closeForm(AC)}}>X</button>
                      </div>
                    </Form>
                  )}
                </Formik>)
    }};
    
