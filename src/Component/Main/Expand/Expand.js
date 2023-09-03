import { Form, Formik } from "formik";
import React from "react";
import moment from "moment";
import { UserForm } from "../../Profile/ProfileForm";
import { img_return } from './../../img';

const Expand = (props) => {
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
    
    const recommendList=props.DB;
    const targetId=(recommendList[0].id_r===null?0:+props.id_r);
    const targetRecommendation = recommendList.filter(rec => rec.id_r === targetId);


  return (

    <div class="col">
    <div className="row border h-100 d-flex align-items-center text-white bg-success-subtle bg-gradient">
       <div className="mx-auto w-50 h-auto bg-dark  bg-gradient rounded-4">
       <div className="mb-2">
         <h1 className="text-center">{targetRecommendation[0].title}</h1>
         <div>{img_return(targetRecommendation[0].image,200)}</div>
       <div className="bg-light text-black overflow-auto" style={{ height: "300px" }}>
         <p>{targetRecommendation[0].text}</p>
       </div>
       </div>

       </div>
       
     </div>
</div>
  );
};

export default Expand;
