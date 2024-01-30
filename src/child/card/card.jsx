import React from 'react'
import './style.css'
function card(props) {
  return (
    <>
    <div className="card">
        <div className="card-img"><img src={props.img} alt="img" />{props.best}</div>
        <div className="card-body">
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
        </div>
    </div>
    </>
  )
}

export default card