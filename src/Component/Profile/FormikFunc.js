import { Form, Formik } from "formik";
import moment from "moment";
import DropboxChooser from "../Dropbox-chooser";
import { UserForm } from "./Function";
import { closeForm, openForm } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { CloudImg, SendImg } from "../img";
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


 const FormikFunc=(props)=>{
    
    const { t, i18n } = useTranslation();
    if(props.status===false){return(
        <div className="d-flex justify-content-center align-items-center w-100">
            <button 
                className={`btn btn-${props.theme.btn} mx-auto`}
                onClick={()=>{openForm(props.setPublishAC)}}>
                {CloudImg(20)} {t('AddRecommend')}
    </button>
        </div>
    )}
    else{
        return(
            <Formik initialValues={initialValues} validate={validate}
                onSubmit={async (values, { resetForm }) => {
                await onSubmit(values,props.id_user,props.imgLink,props.getAddRecomendTC);
                resetForm();}}>
                        {({ isSubmitting }) => (
                        <>
                        <h5 style={{textAlign:'center'}}>{t('ImgDowloadHeader')}</h5>
                        <div><DropboxChooser  onSuccess={props.onSuccess}/></div>
                        <Form className="mx-auto">{UserForm(t)}
                            <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                            <button type="submit" disabled={isSubmitting}
                                className={`btn btn-${props.theme.btn} mx-auto`}>
                                {SendImg(20)} {t('Send')}</button> 
                                <button onClick={()=>{closeForm(props.setPublishAC)}}>X</button>
                            </div>
                        </Form></> 
                        )}
                    </Formik>)
  }};

  export default FormikFunc;