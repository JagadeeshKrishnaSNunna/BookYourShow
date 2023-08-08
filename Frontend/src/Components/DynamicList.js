import React from "react";
import logo from './../logos/desc_logo2.png'
import './../CSS/DynamicList.css'

export default function DynamicList({ items,dataFromAppBar}) {
  const CloseHandler=()=>{
    dataFromAppBar("Home")
  }
  const MouseEnterEvent=(e)=>{
    e.target.style.cursor = 'pointer';
    e.target.style.fontSize = '30px';
    e.target.style.backgroundColor="rgb(112,68,52,.0)"
    e.target.style.borderColor="rgb(112,68,52,.0)"
    e.target.style.color="rgb(34, 13, 13)"
  }
  const MouseLeaveEvent=(e)=>{
    e.target.style.fontSize = '25px';
    e.target.style.backgroundColor="rgb(34, 13, 13)"
    e.target.style.borderColor="rgb(34, 13, 13)"
    e.target.style.color="white"
  }
  return (
    <div className="DynamicListContainer">
      <img src={logo} alt={logo} />
      <ul className="listContainer">
        {items.map((item, index) => (
          <li key={index} onClick={()=>{dataFromAppBar(item)}}>{item}</li>
        ))}
      </ul>
      <button className="closeButton" onMouseLeave={MouseLeaveEvent} onMouseEnter={MouseEnterEvent} onClick={CloseHandler}>X</button>
    </div>
  );
}