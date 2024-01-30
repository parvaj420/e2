import React from 'react'
import {NavLink} from 'react-router-dom'
function page4() {
  return (
    <>
    <div className="page4">
      <div className="row">
        <div className="col-md-4">
          <div className='item'>
        <h1>Family Owned</h1>
        <h5>BRAND</h5>
        <div className="line"></div>
        <NavLink to="/bags">Read our story</NavLink>
          </div>
        </div>
        <div className="col-md-4">
          <div className='item'>
        <h1>Family Owned</h1>
        <h5>BRAND</h5>
        <div className="line"></div>
        <NavLink to="/all">Read our story</NavLink>
          </div>
        </div>
        <div className="col-md-4">
          <div className='item'>
        <h1>Family Owned</h1>
        <h5>BRAND</h5>
        <div className="line"></div>
        <NavLink to="/mini">Read our story</NavLink>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page4