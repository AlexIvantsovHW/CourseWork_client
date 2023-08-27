import { Field } from "formik";
import { Camera } from "../img";

export function UserForm(data){
    return(
        <>
        <Field
        className="form-control form-control-lg mx-auto w-25 mt-2 mb-2"
        component="input"
        name={'file'}
        type={"file"}
      />
        <Field
                      className="form-control form-control-lg mx-auto w-75 mt-2 mb-2"
                      component="input"
                      name={'text'}
                      placeholder={"Type your recommendation"}
                      type={"input"}
                    />

        </>
        )
} 


export const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
    );
  };
export function Recommendations(id,name,handleClick,isCheck){
    return(
    <div className="row border">
          <div  className="col-1 border d-flex justify-content-center align-items-center">
          <Checkbox          
           key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick={handleClick}
            isChecked={isCheck.includes(id)}/>
          </div >
          <div  className="col-1 border d-flex justify-content-center align-items-center">
            id
          </div >
          <div  className="col-3 border mx-auto">
            <div className="row border mx-auto" style={{maxHeight:'150px',maxWidth:'150px'}}>
              {Camera}
            </div>
            <div className="row border d-flex justify-content-center align-items-center">
              Score
            </div>
            <div className="row border d-flex justify-content-center align-items-center">
              upload data
            </div>
          </div>
          <div  className="col border">
            <div>
              name review
            </div>
            <div>
              film name/ group name
            </div>
            <div>
              text
            </div>
            <div>
              Tags:tag
            </div>
          </div>
        </div>)}
export const Toolbar=()=>{return(
    <>
                 <div className="col-1">id</div>
              <div className="col-1">delete</div>
              <div className="col-1">filter</div>
              <div className="col-1">Sort</div>
              <div className="col-1">date</div>
              <div className="col-1">rank</div>
              </>
)}     

export const UserInformation=()=>{
    return(
    <div className="row ">
        <div className="col-4 ">User Ava</div>
        <div className="col ">User info</div>
      </div>
    )
}
export const ImgReview=(props)=>{return(
    <>
        <div className="row  mx-auto" style={{ maxHeight: "150px", maxWidth: "150px" }}>{Camera}</div>
        <div className="row  d-flex justify-content-center align-items-center">{props.score}</div>
        <div className="row  d-flex justify-content-center align-items-center">{props.date}</div>
    </>
    )}