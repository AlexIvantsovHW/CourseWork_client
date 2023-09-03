import { NavLink } from "react-router-dom";
import { Correct, Expand, Like } from "../img";
import { Checkbox, ImgReview } from "./ProfileForm";


export function catalog (array,isCheck,handleClick){

function postCorrection(){alert('Correct')};
   return(
    array.map((el) => {
  return (
    <div className="row bg-white text-black border-bottom">
      <div className="col-1 d-flex justify-content-center align-items-center">
        <Checkbox
          key={el.id_r}
          type="checkbox"
          name={el.name}
          id={el.id_r}
          handleClick={handleClick}
          isChecked={isCheck.includes(el.id_r)}
        />
      </div>
      <div className="col-1  d-flex justify-content-center align-items-center">{el.id_r}</div>
      <div className="col-3  mx-auto"><ImgReview  img={el.image} score={el.score} date={el.date}/>
      </div>
      <div className="col   text-black">
        <div className="row text-center"><h5 className="col">{el.title}</h5><div className="col">
    <NavLink to={"/fullrecommend/"+el.id_r}><button>Read</button></NavLink>
          </div></div>
        <div className="text-start font-weight-bold"><p>{el.name}/{el.group}</p></div>
        <div className="row"><div className="col-9">Tags:{el.tag}</div> <div className="col">{Like}</div></div>
      </div>
    </div>
  );
}));}