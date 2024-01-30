import React from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
function slider() {
  return (
    <>
    <div className="slider">
        <h1 className='fw-light'>browse by</h1>
        <hr />
        <NavLink to="/all">all products</NavLink>
        <NavLink to="/bags">bags</NavLink>
        <NavLink to="/best">best sellers</NavLink>
        <NavLink to="/belts">leather belts</NavLink>
        <NavLink to="/mini">mini leather goods</NavLink>
        <NavLink to="/phone">phone cases</NavLink>
    </div>
    </>
  )
}

export default slider