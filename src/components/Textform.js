import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  } 

  const handleLoClick = ()=>{
    //console.log('Uppercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearClick = ()=>{
    //console.log('Uppercase was clicked');
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  }

  const handleCopyText = ()=>{
    //console.log('Uppercase was clicked');
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard", "success");
  }

  const handleExtraSpaces = ()=>{
    //console.log('Uppercase was clicked');
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  const handleOnChange = (event)=>{
    //console.log('Uppercase was on change');
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myText" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8" 
        style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Upper Case</button>  
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to Lower Case</button> 
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>   
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button> 
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:'Enter text to see here'}</p>
    </div>
    </>
  )
}
