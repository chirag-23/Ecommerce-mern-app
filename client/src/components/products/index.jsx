import React, { useEffect, useState } from 'react'
import { Content, Wrapper } from './products.style'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        const getProducts = async() =>{
            try{
                const res = await axios.get(cat ? `/api/products?category=${cat}` : "/api/products")
                setProducts(res.data)
            }catch(err){}
        }
        getProducts();
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value])=> item[key].includes(value)))
        )
    },[products, cat, filters])

    useEffect(() => {
        if(sort === "Newest"){
            setFilteredProducts(prev => [...prev].sort((a,b) => a.createdAt-b.createdAt))
        }
        else if(sort === "Lowest"){
            setFilteredProducts(prev => [...prev].sort((a,b) => a.price-b.price))
        }
        else if(sort === "Highest"){
            setFilteredProducts(prev => [...prev].sort((a,b) => b.price-a.price))
        }
    },[sort])

  return (
    <Wrapper>
        {cat && filteredProducts.map((item) => (
            <Content key={item._id}>
                <div className='circle'>

                </div>
                <img src={item.img} alt={item.id}/>
                <div className='info'>
                    <div className='icon'>
                        <ShoppingCartOutlinedIcon/>
                    </div>
                    <Link to={`/product/${item._id}`}>
                    <div className='icon'>
                        <SearchOutlinedIcon/>
                    </div>
                    </Link>
                    <div className='icon'>
                        <FavoriteBorderOutlinedIcon/>
                    </div>
                </div>
            </Content>
        ))}
        {!cat && products.slice(0,8).map((item) => (
            <Content key={item._id}>
                <div className='circle'>

                </div>
                <img src={item.img} alt={item.id}/>
                <div className='info'>
                    <div className='icon'>
                        <ShoppingCartOutlinedIcon/>
                    </div>
                    <div className='icon'>
                        <Link to={`/product/${item._id}`} >
                        <SearchOutlinedIcon/>
                        </Link>
                    </div>
                    <div className='icon'>
                        <FavoriteBorderOutlinedIcon/>
                    </div>
                </div>
            </Content>
        ))}
    </Wrapper>
  )
}

export default Products