import React from 'react'

function footer() {
  return (
    <>
    <footer>
      <div className="row">
        <div className="col-md-3">
          <h1>adalene.</h1>
        </div>
        <div className="col-md-2 text-center">
          <p>Shop All</p>
          <p>our story</p>
          <p>our craft</p>
          <p>gift card</p>
          <p>contact</p>
        </div>
        <div className="col-md-2 text-center">
          <p>FAQ</p>
          <p>shipping & returns</p>
          <p>store police</p>
          <p>payment methods</p>
          <p>stockists</p>
        </div>
        <div className="col-md-2 text-center">
          <p>facebook</p>
          <p>instagram</p>
          <p>twitter</p>
          <p>pinterest</p>
        </div>
        <div className="col-md-3 container">
          <h5 className="text-center">JOIN US!</h5>
          <label htmlFor="email">Email*</label><br />
          <input type="email" name="" id="" /><br />
          <button>Send</button>

        </div>
      </div>
    <p className='fot text-center'>©2035 by adalene. Powered and secured by How</p>
    </footer>
    </>
  )
}

export default footer