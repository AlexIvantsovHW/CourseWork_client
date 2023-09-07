import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserImg } from "./img";

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
//Comments
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