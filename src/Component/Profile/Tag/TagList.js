import React, { useState } from "react";
import { liGenerator } from "../../CommonFunc";
import { addSVG } from "../../img";

 const TagList=(props)=>{
  
  const handle = (e) => handlecheckbox(e);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isChecked, setChecked] = useState([]);
  const handlecheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChecked([...isChecked, value]);
    } else {
      setChecked(isChecked.filter((e) => e !== value));
    }
  };
  function addItem() {if (!newItem) {alert("Press enter a tag.");return;}
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: "#" + newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
    return(
      <div className={`col-3 h-50 bg-${props.Theme} bg-gradient rounded-4 m-1`} style={{maxWidth:'250px'}}>
      <h1 className="text-white text-center">Tag list</h1>
      <div className="row ">
        <div className="col ">
          <input 
          type="text"
          placeholder="Add a tag..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={() => (addItem())}>{addSVG}</button>
        </div>
        <div className="overflow-auto" style={{maxHeight:'180px'}}>
        <ul className="my-3 list-group d-flex align-content-center border-white overflow-auto">
          {items.map((el) => {return liGenerator(el.value,items,setItems,el.id);})}
        </ul>
        </div>
      </div>
      <div>
        <button className="btn btn-success" onClick={()=>(props.filterAC(items))}>Display</button>
      </div>
    </div>
    )
  }    
export default TagList;  