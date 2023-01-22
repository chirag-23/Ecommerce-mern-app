import React from 'react'
import Categories from '../components/categories'
import Footer from '../components/Footer'
import Highlights from '../components/highlights'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Products from '../components/products'
import { ScrollToTop } from '../utils'

const Home = () => {
  return (
    <div>
        <ScrollToTop/>
        <Navbar announcement/>
        <Highlights/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home