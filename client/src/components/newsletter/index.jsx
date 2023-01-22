import React from 'react'
import { Content, Wrapper } from './newsletter.style'

const Newsletter = () => {
  return (
    <Wrapper>
        <Content>
            <h1>Monthly Newsletter</h1>
            <p>Get latest updates about your favoriate brands and clothes</p>
            <div>
                <input type="email" placeholder='XYZ@gmail.com'/>
            </div>
            <div>
                <input type='text' placeholder='Name'/>
            </div>
            <div>
                <button>Subscribe</button>
            </div>
        </Content>
    </Wrapper>
  )
}

export default Newsletter