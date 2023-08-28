import { Correct, Expand, Like } from "../img";
import { Checkbox, ImgReview } from "./ProfileForm";



export function catalog (array,isCheck,handleClick){
  debugger;
   return(
    array.map(({ id_r,title,name,score,date,group,text,tag}) => {
  return (
    <div className="row bg-white text-black border-bottom">
      <div className="col-1 d-flex justify-content-center align-items-center">
        <Checkbox
          key={id_r}
          type="checkbox"
          name={name}
          id={id_r}
          handleClick={handleClick}
          isChecked={isCheck.includes(id_r)}
        />
      </div>
      <div className="col-1  d-flex justify-content-center align-items-center">{id_r}</div>
      <div className="col-3  mx-auto"><ImgReview score={score} date={date}/>
      </div>
      <div className="col   text-black">
        <div className="row text-center"><h5 className="col">{title}</h5><div className="col">{Expand}</div></div>
        <div className="text-start font-weight-bold"><p>{name}/{group}</p></div>
        <div className="text-start">{text} {Correct}</div>
        <div className="row"><div className="col-9">Tags:{tag}</div> <div className="col">{Like}</div></div>
      </div>
    </div>
  );
}));}