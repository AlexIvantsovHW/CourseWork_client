import { Form, Formik } from "formik";
import moment from "moment";
import DropboxChooser from "../Dropbox-chooser";
import { UserForm } from "./Function";
import { closeForm, openForm } from "../CommonFunc";
const date = moment().format("YYYY-MM-DD HH:mm:ss");

export const initialValues = { text: "" };
export const validate = (values) => {const errors = {};return errors;};
export const onSubmit = (values,id_user,imgLink,TC) => {
let tag='#'+values.tag;
  let fData = new FormData();
  fData.append("id_user", id_user);
  fData.append("image", (!imgLink?null:imgLink));
  fData.append("title", values.title);
  fData.append("name", values.name);
  fData.append("group", values.group);
  fData.append("category", values.category);
  fData.append("text", values.text);
  fData.append("tag", tag);
  fData.append("date_upload",date);
  TC(fData);
};


export const publish=(status,AC,id_user,TC,onSuccess,imgLink)=>{
    if(status===false){return(<button onClick={()=>{openForm(AC)}}>Add recommendation</button>)}
    else{
        return(
            <Formik initialValues={initialValues} validate={validate}
                onSubmit={async (values, { resetForm }) => {
                await onSubmit(values,id_user,imgLink,TC);
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
                                <button onClick={()=>{closeForm(AC)}}>X</button>
                            </div>
                        </Form></> 
                        )}
                    </Formik>)
  }};