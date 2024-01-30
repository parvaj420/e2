import React from 'react'
import {NavLink} from 'react-router-dom'
function page1() {
  return (
    <>
    <div className="page1 text-light">
       <h1>CUE THE COLOR</h1>
       <NavLink to="/all" className='btn-c'>Shop the collection</NavLink>
    </div>
    </>
  )
}

export default page1