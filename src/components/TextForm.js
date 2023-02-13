import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("uper case the use ");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upwerr", "Succes");
    }
    const handledownClick =()=>{
      console.log("lower  case the use ");
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower", "Succes");
  }
    const handleOnChange =(event)=>{
        console.log("................ ");
        setText(event.target.value)
    }
   
    
    const[text, setText] =useState('Enter the text here ');
  return (
    <>
    <div className="container"  style={{color :props.mode==='dark' ?'white' :'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background :props.mode==='dark' ?'grey ' :'white', color:props.mode==='dark' ?'white ' :'black'}} id="myBox" rows="8"></textarea>
    </div>
      <button className="btn btn-primary my-2"onClick={handleUpClick}>Convertt to upercadse</button>
      <button className="btn btn-primary my-2" onClick={handledownClick}>Convertt to lowercase</button>
    
    </div>
<div className="container my-2" style={{color :props.mode==='dark' ?'white' :'black'}}>
<h1>your text Summary</h1>
<p>{text.split(" ").length} words, {text.length} character</p>
<p>{0.008*text.split(" ").length} Minute read</p>
<h2>Preview</h2>
<p>{text.lengh>0?text :"enter the texythj hesremn jbh"}</p>
</div>
</>
  )
}
