import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Component from './component'
import All from '../child/all'
import Bags from '../child/bags'
import Belts from '../child/belts'
import Best from '../child/best'
import Mini from '../child/mini'
import Phone from '../child/phone'
import Error from './error'
function home() {
  return (
    <>
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Component/>}></Route>
        <Route path='/all' element={<All/>}></Route>
        <Route path='/bags' element={<Bags/>}></Route>
        <Route path='/belts' element={<Belts/>}></Route>
        <Route path='/best' element={<Best/>}></Route>
        <Route path='/mini' element={<Mini/>}></Route>
        <Route path='/phone' element={<Phone/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default home