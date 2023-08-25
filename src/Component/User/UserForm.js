import { Field } from "formik";
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

export function RecomendationForm(id,type){
    return(
        <div className="row border">
        <div  className="col-1 border d-flex justify-content-center align-items-center">
        {Checkbox(id,type)}
        </div >
        <div  className="col-1 border d-flex justify-content-center align-items-center">
          id
        </div >
        <div  className="col-3 border mx-auto">
          <div className="row border mx-auto" style={{maxHeight:'150px',maxWidth:'150px'}}>
            Ava
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
      </div>
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