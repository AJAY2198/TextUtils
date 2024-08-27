// import React, { useState } from 'react'

export default function About(props) {

//  const [myStyle, setMyStyle]= useState({
//     color: 'black',
//     backgroundColor: 'white',
//     btnText : 'Enable Dark Mode',
//     btnStyle : 'btn btn-dark my-3'
//  });

let myStyle = {
  color: props.mode === 'dark' ? 'white' :'black',
  backgroundColor : props.mode === 'dark' ? '#021a33' :'white'
}
 
 
 
  return (
    <div style={{color: props.mode === 'dark' ? 'white' :'black'}}>
        <div className="container mx-2 ">
        <h1 >
            About Us
        </h1>
          </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item mx-2 my-2">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <b>Analzye your text</b> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" style={myStyle}>
        Notepad gives you a way t anlyze your text quickly and efficiently. Be it word count, charcter count or 
      </div>
    </div>
  </div>
  <div className="accordion-item mx-2 my-2">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
    <b> Free to use</b> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body" style={myStyle}>
      Notepad is a freee charcter counter tool that provides instant charcter count & word count stattistics for a given text.
      <br></br>
      Notepad reprts the number of words and charcters. Thus it is suitable for writing text with word / charcter limit.
      </div>
    </div>
  </div>
  <div className="accordion-item mx-2 my-2">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <b> Browser Compatible</b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Edge etc. It suites to count charters in facebook , blog, excel etc.
      </div>
    </div>
  </div>
</div>
   {/* <button className={myStyle.btnStyle} onClick={toggleMode}>{myStyle.btnText}</button> */}
    </div>
  )
}
