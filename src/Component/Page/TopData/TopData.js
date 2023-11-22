import  React  from 'react';
import s from './style.module.css'
const TopData=(props)=>{
    let middleData=()=>{
        if(props.li===true){
            return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>)}
            else{
                return <div>False</div>
            }
        }
    return(
    <div className={s.dataContainer}>
        <div className={s.top}><h2>{props.article.toUpperCase()}</h2></div>
        <div className={s.middle}>
        {middleData()}
        </div>
        <div className={s.bottom}>
        <button onClick={() => props.setTop(props.btn[0])}>{props.btn[0]}</button>
        <button onClick={() => props.setTop(props.btn[1])}>{props.btn[1]}</button>
        </div>
    </div>        
    )
}
export default TopData;