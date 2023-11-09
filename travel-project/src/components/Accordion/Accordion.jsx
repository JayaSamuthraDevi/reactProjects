import React from 'react'
import "./Accordion.scss"
import {BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs"

const Accordion = ({title,desc,active,setActive}) => {
  return (
<div className="accordionContainer">
<span className={(active === title ? "activeTitle" : "" ) +" title flex "}  onClick={()=>setActive(title)} >
{title}


<span >
    {active === title ? ( < BsArrowDownCircle className='icon'  onClick={()=>setActive("")} />) : ( < BsArrowUpCircle className='icon'  />)}
   
</span>
</span>
<p className={(active === title ? "show" : "" ) + " description"}>
    {desc}
    </p> 
</div>
    )
}

export default Accordion