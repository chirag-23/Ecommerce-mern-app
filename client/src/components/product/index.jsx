import React, { useState } from 'react'
import { Content, Wrapper } from './product.style'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async() =>{
            try{
                const res = await axios.get(`/api/products/find/${id}`)
                setProduct(res.data)
            }catch(err){}
        }
        getProduct();
    },[id])

    const handleClick = () =>{
        dispatch(addProduct({ ...product, quantity, size }))
    }

  return (
    <Wrapper>
        <img src={product.img} alt={product.title} />
        <Content>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <h1>Price: <span>₹{product.price}</span></h1>
            <div className='filter'>
                <span>Size: </span>
                <Select id="select" defaultValue="" onChange={(e)=> setSize(e.target.value)}>
                    {product.size?.map((s) => (<MenuItem key={s} value={s}>{s}</MenuItem>))}
                </Select>
            </div>
            <div className='cart'>
                <div className='add'>
                    <RemoveIcon fontSize='large' className='icon' onClick={()=>{quantity>1 && setQuantity(quantity-1)}} />
                        <span>{quantity}</span>
                    <AddIcon fontSize='large' className='icon' onClick={()=> setQuantity(quantity+1)}/>
                </div>
                <div>
                    <button onClick={handleClick}>ADD TO CART</button>
                </div>
            </div>
        </Content>
    </Wrapper>
  )
}

export default Product