import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import Product from '../components/product';
import Newsletter from '../components/newsletter';
import { ScrollToTop } from '../utils';

const Wrapper = styled.div``;

const ProductInfo = () => {
  return (
    <Wrapper>
        <ScrollToTop/>
        <Navbar announcement1/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </Wrapper>
  )
}

export default ProductInfo