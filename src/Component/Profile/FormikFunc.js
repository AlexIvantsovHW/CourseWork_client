import { Field, Form, Formik } from "formik";
import moment from "moment";
import DropboxChooser from "../Dropbox-chooser";
import { UserForm } from "./Function";
import { closeForm, openForm } from "../CommonFunc";
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { CloudImg, SendImg } from "../img";
import { DropBoxImg } from './../img';
import style from'./style.module.css'
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
        /* axios.post('http://localhost:3001/upload',{images}).then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error.message)
            https://console.cloudinary.com/console/c-ecbf272216b928e0735664ab618fe3/getting-started
            https://www.youtube.com/watch?v=TBOkDQEBPIU
        }) */
        props.setReviewImageTC(images)
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
            <Formik initialValues={initialValues} validate={validate}
                onSubmit={async (values, { resetForm }) => {
                await onSubmit(values,props.id_user,props.imgLink,props.getAddRecomendTC);
                resetForm();}}>
                        {({ isSubmitting }) => (
                        <>
                        {images.length>0&&
                        <div>
                            {images.map((image,index)=><img src={image} key={index} width={50} height={50}/>)}
                        </div>}
                        {images.length>0&&
                        <button onClick={handleUpload}>Upload</button>}
                        <Form className="mx-auto">
                        <div className={style.dropzone} {...getRootProps()}>
                            <input {...getInputProps()}/>
                            {isDragActive?"Drag Active":"You can drop your image here"}

                        </div>
                            {UserForm(t)}
                            <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                            <button type="submit" disabled={isSubmitting}
                                className={`btn btn-${props.theme.btn} mx-auto`}>
                                {SendImg(20)} {t('Send')} 
                            </button> 
                                <button className={`btn btn-close btn-close-${props.theme.font}`} onClick={()=>{closeForm(props.setPublishAC)}}/>
                            </div>
                        </Form></> 
                        )}
                    </Formik>)
  }};

  export default FormikFunc;