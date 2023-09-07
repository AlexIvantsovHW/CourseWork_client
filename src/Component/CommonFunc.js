import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserImg, deleteSVG } from "./img";
import { Form, Formik } from "formik";
import moment from "moment";
import { commentForm } from "./Profile/Function";

export var withRouter=function (Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
  }
  ;
export function setTheme(item,AC){AC(item)}  
//______________________Comment page____________________
export const userElement = (name,comment,date) => {
  return (
    <div className="row border bg-white">
      <div className="col-1 ">
          {UserImg(70)}
      </div>
      <div className="col ml-1">
        <div className="">
          <h6>{name}</h6>
        </div>
        <div className="">{comment}</div>
        <div className="">{date}</div>
      </div>
    </div>
  );
};
export function openForm(AC){return AC(true)}
export function closeForm(AC){return AC(false)}
export function filterComments(arr,id_r){return arr.filter(item=>item.id_r===id_r)}
export const date = moment().format("YYYY-MM-DD HH:mm:ss");
export const initialValues = { text: "" };
export const validate = (values) => {const errors = {};return errors;};
  const onSubmit = (values,id_user,id_r,TC) => {
    let fData = new FormData();
    fData.append("id_r", id_r);
    fData.append("id_user", id_user);
    fData.append("comment", values.comment);
    fData.append("date_upload",date);
    TC(fData);
  };
export  const addComment=(statusComment,TC,id_user,id_r,AC)=>{
  if(statusComment===false){
    return(
      <div className="d-flex justify-content-center">
        <button 
        className="btn btn-success w-25" 
        onClick={()=>{openForm(AC)}}>
          Add comment
        </button>
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
                      <div 
                      className="d-flex justify-content-center align-items-center w-100 mb-3">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn btn-success mx-auto ">
                          Send
                        </button> 
                        <button 
                          className="btn btn-danger" 
                          onClick={()=>{closeForm(AC)}}>
                          X
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>)
    }};
export function liGenerator(item,items,setItems,id){
      return(
            <div className="w-100 mb-2 d-flex align-content-center ">
              <li className="p-2  list-group-item bg-dark border-dark text-white">
                <button className="btn btn-danger mx-2" onClick={()=>(setItems(items.filter((item) => item.id !== id)))}>{deleteSVG}</button>{item}
              </li>
            </div>
      )
    }
