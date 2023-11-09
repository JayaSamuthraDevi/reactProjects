import React, { useState } from 'react'
import "./Design.scss"
import Accordion from '../Accordion/Accordion'
function Design() {
  const [active ,setActive] = useState("");

  //for animate dots

  function danceDots(){
  const dotElements = document.querySelectorAll(".dot");
  dotElements.forEach(dot=>{
    dot.classList.toggle('dance');
  })
}


  return (
    <div className=' container grid Design'>
      <Accordion  title="accordion 1" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ipsa!" active={active} setActive={setActive} />
      <Accordion  title="accordion 2" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ipsa!" active={active} setActive={setActive} />
    <Accordion  title="accordion 3" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ipsa!" active={active} setActive={setActive} />
      <Accordion  title="accordion 4" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ipsa!" active={active} setActive={setActive} />
   
   <br />
   <br />
<div className="dots">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>

</div>
<button className='btn clickBtn'onClick={danceDots} >Click Me</button>
<br />
<br />  
    </div>

  )
}

export default Design