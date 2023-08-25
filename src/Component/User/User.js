import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from "formik";
import { Checkbox, RecomendationForm, UserForm } from "./UserForm";


const Catalogues = [
  {id: "01",name: "Chicken"},
  {id: "02",name: "Beef"},
  {id: "03",name: "Lamb"},
  {id: "04",name: "Pork"},
  {id: "05",name: "Seafood"}
];


const User = (props) => {

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const initialValues = { text: "" };
  const validate = (values) => {
    const errors = {};
    return errors;
  };
  const submit = (values) => {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("text", values.text);
    props.getRegistrationTC(fData);
  };



  {/*__________________________________________*/}

  const catalog = list.map(({ id, name }) => {
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
      </div>)
})

  {/*__________________________________________*/}
  return (
    <div class="col">
      <div className="row border h-100 d-flex flex-column align-items-center text-white bg-success-subtle bg-gradient">
        <div className="col mx-auto w-75 h-auto bg-dark  bg-gradient rounded-4 m-5">
          <div className="row border">
            <div className="col-4 border">User Ava</div>
            <div className="col border">User info</div>
          </div>
          <div className="row border mt-2">
            <div className="text-center mb-2"><h4>User recommendations</h4></div>
            <div className="row border w-75 mx-auto" style={{ height: "20px" }}>
              <div className="col-1">           <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      /></div>
              <div className="col-1">id</div>
              <div className="col-1">delete</div>
              <div className="col-1">filter</div>
              <div className="col-1">Sort</div>
              <div className="col-1">date</div>
              <div className="col-1">rank</div>
            </div>
            <div className="border w-75 mx-auto mb-2 overflow-auto" style={{ height: "300px" }}
            >
                {/*______________________________________________________________________________ */}
      {catalog}
                {/*______________________________________________________________________________ */}
  
            </div>
            <div className="mx-auto border">
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submit}
              >
                {({ isSubmitting }) => (
                  <Form className="mx-auto">
                    {UserForm()}
                    <div className="d-flex justify-content-ceter align-items-center w-100 mb-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-success mx-auto "
                      >
                        Publish
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
