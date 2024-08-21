import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter notes here");

  const handleUpClick = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Coveted to UpperCase","success");
  };

  const handleLoClick = () => {
    let newTxt = text.toLowerCase();
    setText(newTxt);
  };

  const clearNotes = () => {
   
    setText("");
  };
  const handleCopy = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,99999);
   navigator.clipboard.writeText(text.value);
  };

  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  function lengthOfWord(text) {
    let count = 0
    for (let i = 0; i < text.split(" ").length; i++) {
        if (text.split(" ")[i] === "") {
            count++
        }
    }
    return text.split(" ").length - count
}
  return (
    <>
    <div className="container"  style={{color: props.mode==='light'?'#021a33':'white'}}>
      <div className="mb-3">
        <label htmlFor="myBox" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>
          {props.heading} 
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChnage}
          style={{backgroundColor: props.mode==='light'?'white':'#021a33',color: props.mode==='light'?'black':'white'}}
          id="myBox"
          rows="7"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Covert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Covert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearNotes}>
       Clear Notes
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
       Copy Text
      </button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='light'?'#021a33':'white'}}>
      <h1>Your notes summry</h1>
      <p>
       {lengthOfWord(text)} words and {text.length} charcters.
       <br/>
       {text !=="" ? 0.008 *text.split(" ").length: 0} Minutes to read.
      </p>
      <h2>Preview</h2>
      <p>{text.length >0 ?text:"Enter Something"}</p>
    </div>
 
    </>
  );
}
