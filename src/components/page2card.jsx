import React from 'react'
import {NavLink} from 'react-router-dom'

function page2card(props) {
  return (
    <>
    <NavLink to="/bags">
    <div className="image-item text-center">
       <div className="img-box">
        <img src={props.img} alt=""/>
        {props.best}
       </div>
       <p>{props.text}</p>
       <i className='text-danger'>{props.tk}</i>
    </div></NavLink>
    </>
  )
}

export default page2card