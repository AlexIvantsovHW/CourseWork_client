import React, { useState } from "react";
import "./style.css";
import TopData from "./TopData/TopData";
import Element from "./Element/Element";


const List=[
  {
    article:'Social Network',
    git:'https://github.com/AlexIvantsovHW/SocialNetwork',
    desc:'Social Network',
    link:'https://alexivantsovhw.github.io/SocialNetwork/'
  },
  {
    article:'Reccomendation application',
    git:'https://github.com/AlexIvantsovHW/CourseWork_client',
    desc:'Reccomendation application',
    link:'https://itransionuser.000webhostapp.com/'
  },
  {
    article:'Souvenir online store',
    git:'https://github.com/AlexIvantsovHW/AltaySuvenir',
    desc:'Souvenir online store',
    link:'https://itransionuser.000webhostapp.com/'
  },
]
const ProfiePage = () => {
  const [top, setTop] = useState("summary");
  const ListElement=List.map((e)=>{return <Element data={e}/>})
  const data=[{article:'summary',}]
  const dispayTopData = () => {
    if (top === "summary") {return (<TopData article='summary' setTop={setTop} btn={['education','experience']} li={false}/>);
    } else if (top === "experience") {return (<TopData article='experience' setTop={setTop} btn={['summary','education']} li={true}/>);
    } else if (top === "education") {return (<TopData article='education' setTop={setTop} btn={['experience','summary']} li={true}/>);}
  };
  return (
    <div className="main-container">
      <div className="top">
        <div className="top-container">
          <div className="avatar">
            <div className="avatar-container">
              <div className="ava">Img</div>
              <div>
                <h2>
                  Alexander
                  <br /> Ivantsov
                </h2>
              </div>
            </div>
          </div>
          {dispayTopData()}
        </div>
        <div className="contact-info">
          <div className="contact">Contact data</div>
        </div>
      </div>  
      <div className="body">
      {ListElement}
      </div>
    </div>
  );
};
export default ProfiePage;
