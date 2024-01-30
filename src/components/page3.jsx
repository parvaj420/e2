
    import React from 'react'
    import {NavLink} from 'react-router-dom'

function page3() {
  return (
    <>
    <div className="page3">
      <div className="row">
        <div className="col-md-6 text-center nth1">
          <img src="https://static.wixstatic.com/media/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_720,h_458,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.webp" alt="" />
          <div className='item-1'>
          <p>I'm a product</p>
          <i>$100.00</i>
          </div>
          <NavLink to="/mini" className="button">vew details</NavLink>
        </div>
        <div className="col-md-6 nth2">
          <div className="div"></div>
          <a href="" > MINI LEATHER GOODS</a>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 nth2">
          <div className="div"></div>
          <a href="" >  LEATHER BELTS</a>
        </div>
        <div className="col-md-6 text-center nth1">
          <img src="https://static.wixstatic.com/media/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_720,h_458,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.webp" alt="" />
          <div className='item-1'>
          <p>I'm a product</p>
          <i>$100.00</i>
          </div><NavLink to="/belts" className="button">vew details</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default page3