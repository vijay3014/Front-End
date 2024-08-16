import React from 'react'

import Home from './Home'
import Shop from './Shop'
import Whishlist from './Whishlist'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Product from './Product'
import { Navbar } from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/whishlist' element={<Whishlist/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout