import { React } from "react";
import { Like, dislike, star } from "./img";
import { blockRender } from "./withAuthNavigate";
import { likePresence, setLike } from "./Main/Expand/Function";

const LikeComponent = (props) => {
  return (
    <>
      {blockRender(
        props.auth,
        <>
          {props.id_user != null ? (
            likePresence(props.score, props.id_r, props.id_user) === true ? (
              <div className="col">
                <button
                  className={`btn btn-outline-${props.theme.border} border-0`}
                  onClick={() => {
                    setLike(0, props.id_r, props.id_user, props.getLikeTC);
                  }}
                >
                  {dislike(20)}
                </button>
                {props.Amount}
              </div>
            ) : (
              <div className="col">
                <button
                  className=" btn btn-outline-success border-0"
                  onClick={() => {
                    setLike(1, props.id_r, props.id_user, props.getLikeTC);
                  }}
                >
                  {Like(20)}
                </button>
                {props.Amount}
              </div>
            )
          ) : (
            <div className="col ">{star(20)}</div>
          )}
        </>
      )}
    </>
  );
};
export default LikeComponent;
