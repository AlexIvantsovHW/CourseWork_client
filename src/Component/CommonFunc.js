import { useLocation, useNavigate, useParams } from "react-router-dom";

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