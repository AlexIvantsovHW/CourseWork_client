import { Form, Formik } from "formik";
import { UserForm } from "../Function";
import { closeForm, date, initialValues, openForm, validate } from "../../CommonFunc";
import { useTranslation } from 'react-i18next';
import { SendImg, ToolsImg } from "../../img";

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
export const update=(status,TC,id_user,id_r,AC,Theme, t, i18n)=>{
  
  if(status===false){
    return(
      <div className="d-flex justify-content-center align-items-center w-100 mb-1 mt-1">
        <button className={`btn btn-${Theme.btn} mx-auto`} onClick={()=>{openForm(AC)}}>{ToolsImg(20)} {t('UpdateReview')}</button>
      </div>
    )}else{
  return(
    <Formik initialValues={initialValues} validate={validate}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values,id_user,id_r,TC);
            resetForm();}}>
                  {({ isSubmitting }) => (
                    <Form className="mx-auto">{UserForm(t, i18n)}
                      <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`btn btn-${Theme.btn} mx-auto`}>
                          {SendImg(20)} {t('Send')}
                        </button> 
                          <button 
                            className="btn-close btn-close-white" 
                            onClick={()=>{closeForm(AC)}}/>
                      </div>
                    </Form>
                  )}
                </Formik>)
    }};
    
