import React, { useState } from 'react'
import { Slide, Content, Wrapper } from './highlight.style'
import { sliderItems } from '../../data';
import { Link } from 'react-router-dom';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Highlights = () => {

    const [index, setIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setIndex(index > 0 ? index-1 : 3);
        } else{
            setIndex(index < 3 ? index+1 : 0);
        }
    } 
  return (
    <Wrapper>
        <Content>
            <ArrowCircleLeftOutlinedIcon className='icon left' onClick={()=>handleClick("left")} />
            <Slide index = {index}>
                {sliderItems.map((item) => (
                    <div className='box' style={{backgroundColor: `#${item.bg}`}} key={item.id}>
                        <div className='bg'>
                            <img src={item.img} alt={item.alt}/>
                        </div>
                        <div className='details'>
                            <h1 className='title'>{item.title}</h1>
                            <p className='desc'>{item.desc}</p>
                            <div className='btn'>
                                <Link to={`/products/${item.link}`}><button>Shop Now</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
            <ArrowCircleRightOutlinedIcon className='icon right' onClick={()=>handleClick("right")}/>
        </Content>
    </Wrapper>
  )
}
export default Highlights;