import React from 'react'
import { Link } from 'react-router-dom'
import { Content } from './categories.style'

const Category = ({item}) => {
  return (
    <Content>
        <img src={item.img} alt="#"/>
        <div className='info'>
            <h1>{item.title}</h1>
            <Link to={`/products/${item.cat}`}>
              <button>VIEW MORE</button>
            </Link>
        </div>
    </Content>
  )
}

export default Category