import React, { useEffect, useState } from "react";
import { liGenerator } from "../../CommonFunc";
import { addSVG } from "../../img";
import { tagArrCreator } from "../Function";
import { Field, Form, Formik } from "formik";


 const TagList=(props)=>{
  
  let tagArr=tagArrCreator(props.DB);
  React.useEffect(() => {
    if (values.selectAll) {
        setFieldValue('checked',  tagArr.map(({ tag }) => tag));
    } else {
        setFieldValue('checked',  []);
    }
  }, [values.selectAll])
 
     return(
      <div className={`col-3 h-50 bg-${props.Theme} bg-gradient rounded-4 m-1`} style={{maxWidth:'250px'}}>
      <h1 className="text-white text-center">Tag list</h1>
      <div className="row ">
        
        <Formik
      initialValues={{
        checked: [],
        selectAll: false
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values)
      }}
    >
      {({ values }) => (
        <Form>
              <div className="row">
                <label>
                <Field type="checkbox" name="selectAll"/>
                Select all
                </label>

    </div>
        <div className="row overflow-auto" style={{maxHeight:'230px'}}>
          <div role="group" aria-labelledby="checkbox-group" className="row">
            {tagArr.map((item)=>
            <div>
              <label>
                  <Field type="checkbox" name="checked" value={item} />
                  {item}
              </label>
            </div>
            )}
          </div>
          </div>
          <button type="submit">Display</button>
        </Form>
      )}
    </Formik>

      </div>
      <div className="d-flex align-items-end justify-content-center mt-3">
      </div>
    </div>
    )
  }    
export default TagList;  

