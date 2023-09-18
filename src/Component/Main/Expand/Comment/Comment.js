import { React, useState } from "react";
import { filterComments, userElement } from "../../../CommonFunc";
import moment from "moment";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import "../../../../i18n";
import { PencilImg, SendImg } from "../../../img";

const Comment = (props) => {
  debugger;
  const { t, i18n } = useTranslation();
  const Theme = props.Theme;
  const [commentWindow, setCommentWindow] = useState(false);
  const [inputWindow, setInputWindow] = useState(true);
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  const initialValues = { text: "" };
  const validate = (values) => {
    const errors = {};
    return errors;
  };
  const onSubmit = (values) => {
    debugger;
    let fData = new FormData();
    fData.append("id_r", props.targetId);
    fData.append("id_user", props.id_user);
    fData.append("comment", values.comment);
    fData.append("date_upload", date);
    props.setCommentsTC(fData);
  };
  function commentForm(Theme, t, i18n) {
    return (
      <div className="col mr-4 w-100">
        <Field
          className={`form-control form-control-sm mx-0 w-100 h-100 mt-1 mb-1 `}
          component="input"
          name={"comment"}
          placeholder={t("inputComment")}
          type={"input"}
        />
      </div>
    );
  }
  let filteredComments = filterComments(props.comments, +props.targetId);
  if (commentWindow === false) {
    return (
      <p
        className="text-center fst-italic text-decoration-none text-info"
        onClick={() => {
          setCommentWindow(true);
        }}
      >
        {t("viewComment")}
      </p>
    );
  } else {
    debugger;
    return (
      <>
        <div className="d-flex justify-content-end">
          <button
            className="btn-close btn-close-white"
            onClick={() => {
              setCommentWindow(false);
            }}
          />
        </div>
        <div>
          <h4 className={`text-center text-${Theme.font}`}>{t("Comments")}</h4>
        </div>
        <div
          className={`container ml-2 d-grid gap-2 bg-${Theme.bg} text-${Theme.font}  overflow-x-hidden overflow-y-auto`}
          style={{ height: "120px", width: "95%", margin: "1.5%" }}
        >
          {filteredComments.map((user) => {
            return userElement(
              user.name,
              user.comment,
              user.date_upload,
              Theme
            );
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {props.id_user === null ? null : inputWindow === false ? (
            <button
              className={`btn btn-${Theme.btn} border-0 mx-auto`}
              onClick={() => setInputWindow(true)}
            >
              {PencilImg(20)} {t("AddComment")}
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
                  {commentForm(Theme, t, i18n)}
                  <div className="d-flex justify-content-center align-items-center w-100 mb-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-${Theme.btn} border-0 mx-auto`}
                    >
                      {SendImg(20)} {t("Send")}
                    </button>
                    <button
                      className={`btn-close btn-close-white`}
                      onClick={() => setInputWindow(false)}
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
