import React from 'react'
import './style.css'
import './script'
import  Nav from './nav' 
import All from '../child/all'
import Bags from '../child/bags'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Footer from './footer'
import card from '../child/card/card'
function component() {
  return (
    <>
    <Nav />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    {/* <Footer /> */}
    </>
  )
}

export default component