import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar';
import Newsletter from '../components/newsletter'
import Products from '../components/products'
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ScrollToTop } from '../utils';

const Wrapper = styled.div`
    h2{
        margin: 25px;
        font-size: 34px;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .filters{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .filter{
            margin: 10px 25px;
            font-size: 20px;
            letter-spacing: 1px;
            font-weight: 500;
        }
        #select{
            letter-spacing: 0.6px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    @media screen and (max-width: 700px){
        .filters{
            flex-direction: column;
        }
    }
`;

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("Newest")
    
    const handleFilters = (e) =>{
        const value = e.target.value

        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }

  return (
    <Wrapper>
        <ScrollToTop/>
        <Navbar announcement1/>
        <h2>Products</h2>
            <div className='filters'>
                <div className='filter'>
                    <span>Filter:</span>
                    <Select id='select' name="color" defaultValue={"1"} onChange={handleFilters}>
                        <MenuItem disabled value="1">Color</MenuItem>
                        <MenuItem value="White">White</MenuItem>
                        <MenuItem value="Black">Black</MenuItem>
                        <MenuItem value="Red">Red</MenuItem>
                        <MenuItem value="Blue">Blue</MenuItem>
                        <MenuItem value="Yellow">Yellow</MenuItem>
                        <MenuItem value="Green">Green</MenuItem>
                    </Select>
                    <Select id='select' name="size" defaultValue={"1"} onChange={handleFilters}>
                        <MenuItem disabled value="1">Size</MenuItem>
                        <MenuItem value="XS">XS</MenuItem>
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="L">L</MenuItem>
                        <MenuItem value="XL">XL</MenuItem>
                    </Select>
                </div>
                <div className='filter'>
                    <span>Sort By:</span>
                    <Select id='select' defaultValue={"Newest"} onChange={(e)=> setSort(e.target.value)}>
                        <MenuItem value="Newest">Newest</MenuItem>
                        <MenuItem value="Lowest">Price(asc)</MenuItem>
                        <MenuItem value="Highest">Price(desc)</MenuItem>
                    </Select>
                </div>
            </div>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Wrapper>
  )
}

export default ProductList