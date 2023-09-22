import { Field, Form, Formik } from "formik";
import moment from "moment";
import { UserForm } from "./Function";
import { closeForm, openForm } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { CloudImg, SendImg, UploadImg } from "../img";
import style from'./style.module.css'
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";


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
    const [images,setImages]=useState([])
    function handleUpload(){
        console.log('Uploading files....')
        props.setReviewImageTC({images})
    }
    const onDrop=useCallback(
    (acceptedFiles,rejectFiles)=>{
        const reader=new FileReader();
        acceptedFiles.forEach(file=>{
            reader.onload=()=>{
            setImages(prevState=>[...prevState,reader.result])
        }
        reader.readAsDataURL(file)
        })
        console.log('acceptedFiles',acceptedFiles)
        console.log('rejectedFiles',rejectFiles)
    },[])
    useEffect(()=>{
        console.log(images)
    },[images])
    const {getRootProps,getInputProps,isDragActive}=useDropzone({onDrop,accept:'image/png , image/jpeg, image/jpg'});
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
            <>
            <Formik initialValues={initialValues} validate={validate}
                onSubmit={async (values, { resetForm }) => {
                await onSubmit(values,props.id_user,props.imgLink,props.getAddRecomendTC);
                resetForm();}}>
                        {({ isSubmitting }) => (
                        <div className={`w-75 mx-auto d-flex justify-content-center align-items-center border-top border-bottom border-${props.theme.border} border-opacity-50`}>
                        <Form className="mx-auto">
                            <div 
                                className="w-100 d-flex justify-content-end">
                                <button 
                                    className={`btn btn-close btn-close-${props.theme.font} `} 
                                    onClick={()=>{closeForm(props.setPublishAC)}}/>
                            </div>
                        <h4 className="text-center">{t('Step1')}</h4>
                            {UserForm(t)}
                            <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                            <button type="submit" disabled={isSubmitting}
                                className={`btn btn-${props.theme.btn} mx-auto`}>
                                {SendImg(20)} {t('Send')} 
                            </button> 
                            </div>
                        </Form>        
                        </div> 
                        )}
                    </Formik>
                                  <div className={`w-75 mx-auto border-bottom border-${props.theme.border} border-opacity-50`}>
                                  <h4 className="text-center">{t('Step2')}</h4>
                              <div className={style.dropzone} {...getRootProps()}>
                                  <input {...getInputProps()}/>
                                  {isDragActive?"Drag Active":t('dragDrop')}
                              </div>
                              {images.length>0&&
                              <div className="w-100 d-flex align-items-center justify-content-center">
                            <button 
                                className="btn btn-dark" 
                                onClick={handleUpload}>
                                    {UploadImg(20)} {t('Upload')}
                            </button>
                              </div>}
                             
                              </div>
                              </>
                              )
  }};

  export default FormikFunc;