import React from 'react'
import {NavLink, Link} from 'react-router-dom'
function page5card(props) {
  return (
    <>
    <Link to="/bags">
    <div className="image-item text-center">
       <div className="img-box">
        <img src={props.img} alt="" width="100%" height="100%" />
       </div>
    </div></Link>
    </>
  )
}

export default page5card