import { React, useState } from "react";
import {
  addComment,
  closeForm,
  filterComments,
  openForm,
  userElement,
} from "../../../CommonFunc";
import moment from "moment";
import { Form, Formik } from "formik";
import { commentForm } from "../../Function";
import { PencilImg, SendImg } from "../../../img";
import { useTranslation } from 'react-i18next';
import '../../../../i18n'

const Comment = (props) => {
  const { t, i18n } = useTranslation();
  const Theme=props.Theme;
  const [commentWindow, setCommentWindow] = useState(false);
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  const initialValues = { text: "" };
  const validate = (values) => {
    const errors = {};
    return errors;
  };
  const onSubmit = (values) => {
    let fData = new FormData();
    fData.append("id_r", props.targetId);
    fData.append("id_user", props.id_user);
    fData.append("comment", values.comment);
    fData.append("date_upload", date);
    debugger;
    props.setCommentsTC(fData);
  };

  let filteredComments = filterComments(props.comments, (+props.targetId));
  if (props.statusView === false) {
    return (
      <p
        className="text-center fst-italic text-decoration-none text-info"
        onClick={() => {openForm(props.setViewAC);}}
      >
        {t('viewComment')}
      </p>
    );
  } else {
    return (
      <>
        <div className="d-flex justify-content-end">
          <button
            className="btn-close btn-close-white"
            onClick={() => {
            closeForm(props.setViewAC);
            }}/>        
          </div>
        <div><h4 className={`text-center text-${Theme.font}`} >{t('Comments')}</h4></div>
        <div
          className={`container ml-2 d-grid gap-2 bg-${Theme.bg} text-${Theme.font}  overflow-x-hidden overflow-y-auto`}
          style={{ height: "120px", width: "95%", margin: "1.5%" }}
        >
          {filteredComments.map((user) => {
            return userElement(user.name, user.comment, user.date_upload,Theme);
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {commentWindow === false ? (
            <button 
              className={`btn btn-${Theme.btn} border-0 mx-auto`}
              onClick={() => setCommentWindow(true)}>
              {PencilImg(20)} {t('AddComment')}
            </button>
          ) : (
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={async (values, { resetForm }) => {
                await onSubmit(values);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="mx-auto">
                  {commentForm(Theme,t,i18n)}
                  <div className="d-flex justify-content-center align-items-center w-100 mb-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-${Theme.btn} border-0 mx-auto`}
                    >
                      {SendImg(20)} {t('Send')}
                    </button>
                    <button
                      className={`btn-close btn-close-white`} 
                      onClick={() => setCommentWindow(false)}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </>
    );
  }
};
export default Comment;
