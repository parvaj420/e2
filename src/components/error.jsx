import React from 'react'
import Nav from './nav'
function error() {
  return (
    <>
    <Nav/>
    <div className="error">
        <h1>hello 404!</h1>
        <small>this page is coming soon...</small>
    </div>
    </>
  )
}

export default error