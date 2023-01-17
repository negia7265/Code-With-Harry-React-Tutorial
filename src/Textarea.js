
import React ,{useState} from 'react'
export default function Textarea(props) {
    const [text,settext]=useState("");
    const [text2,setstate]=useState("Enable Dark Mode");
    const [textareastyle,changetextareastyle]=useState({
      color:'black',
      backgroundColor:'white'
    })
    const doaction=()=>{
      if(text2==="Enable Dark Mode"){
        setstate("Enable Light Mode");
        changetextareastyle({
          color:'white',
          backgroundColor:'black'
        });
      }
      else if(text2==="Enable Light Mode"){
        setstate("Enable Dark Mode");
        changetextareastyle({
          color:'black',
          backgroundColor:'white'
        });
      }
    }
    const handleupclick=()=>{
        settext(text.toUpperCase());
        props.showalert("Text converted to upper case","success");
        setTimeout(()=>{
          props.setalert(null);
        },3000);
        
    }
    const handlechange=(event)=>{
      console.log("on change");
      settext(event.target.value);
    }
    const handlelowclick=()=>{
      settext(text.toLowerCase());
      props.showalert("Text converted to lower case","success");
      setTimeout(()=>{
        props.setalert(null);
      },3000);
    }
    const clear=()=>{
      settext("");
      props.showalert("Text cleared","success");
      setTimeout(()=>{
        props.setalert(null);
      },3000);
    }
   
  return (
    <>
  <div className=' container wid-25' style={textareastyle} >
    <div className="form-group my-4 ">
      <label for="exampleFormControlTextarea1">Example textarea</label>
      <textarea  style={textareastyle} className="form-control my-2" rows="50" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>
    <div className='container wid-25'>
    <button className='btn btn-primary m-2' onClick={handleupclick}>Convert To Uppercase</button>
    <button className='btn btn-primary m-2' onClick={handlelowclick}>Convert To Lowercase</button>
    <button className='btn btn-primary m-2' onClick={clear}>Clear Text</button>
  </div>
  <div className='container my-3'>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *  text.split(" ").length} Minutes to read this paragraph</p>
  </div>
  <div>
  <div>
      <div className="form-check form-switch container">
        
        <button className='btn btn-primary m-2' onClick={doaction}>{text2}</button>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
      </div>
    </div>
  </div>
  </>
  )
}
