import React from "react";
import s from "./style.module.css";
import { useState } from "react";
import { GitLogo, LinkImg } from './../../img';

const Element = (props) => {
  const [description, setDescription] = useState(false);
  const toggleDesciption=()=>{setDescription(!description)}
  return (
    <div className={s.elContainer} >
      <div className={s.elImg}>Img</div>
      <div className={s.elArticle} onClick={toggleDesciption}>
        <h5>{props.data.article}</h5>
      </div>
      {description ? (
        <div className={s.elShortDescription}>
          {props.data.desc}        </div>
      ) : null}
      <div className="el-git">
        <a href={props.data.git}>{GitLogo(25)}</a>
        <a href={props.data.link}>{LinkImg(25)}</a>
      </div>
    </div>
  );
};

export default Element;
