import React,{useState} from 'react'

export default function Switch({ onStyleChange }) {
  const [text,settext]=useState("Enable Dark Mode");

  const doaction=()=>{
    if(text==="Enable Dark Mode"){
      settext("Enable Light Mode");
      onStyleChange({
        color:'white',
        backgroundColor:'black'
      });
    }
    else if(text==="Enable Light Mode"){
      settext("Enable Dark  Mode");
      onStyleChange({
        color:'dark',
        backgroundColor:'white'
      });
     }
    }
  return (
    <div>
      <div className="form-check form-switch container">
        <input className="form-check-input" onChange={doaction} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
      </div>
    </div>)
  }
