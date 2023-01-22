import React from 'react'
import { ContentC, ContentL, ContentR, Wrapper } from './footer.style'

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
        <ContentL>
            <div className='logo'>
              <h1>CHIRAG</h1> &nbsp;
              <TipsAndUpdatesIcon fontSize='large'/>
            </div>
            <p>Get Your Favourite Brand Clothes On Lowest Price Available In Market.</p>
            <div className='social'>
              <div className='icon'>
                  <a href="https://www.linkedin.com/in/chirag-chouhan-b48311228/" target='_blank' rel="noopener noreferrer"> <LinkedInIcon fontSize='large'/> </a>
              </div>
              <div className='icon'>
                  <a href="http://github.com/chirag-23" target="_blank" rel="noopener noreferrer"> <GitHubIcon fontSize='large'/> </a>
              </div>
              <div className='icon'>
                  <a href="http://www.instagram.com/chiragchouhan.23/" target="_blank" rel="noopener noreferrer"> <InstagramIcon fontSize='large'/> </a>
              </div>
            </div>
        </ContentL>
        <ContentC>
          <h2>Useful Links</h2>
          <div className='links'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <Link to="/products/men"><li>Man Fashion</li></Link>
            <Link to="/products/women"><li>Woman Fashion</li></Link>
            <li>Accessories</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishdiv</li>
            <li>Wishdiv</li>
            <li>Terms</li>
          </div>
        </ContentC>
        <ContentR>
            <h2>Contact</h2>
            <p> <RoomIcon/>&nbsp;Rohini Sec-11, New Delhi-1100xx</p>
            <p> <PhoneIcon/>&nbsp;+91 9911xxxxxx</p>
            <p> <MailOutlineIcon/>&nbsp;chiragchouhan163@gmail.com</p>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
        </ContentR>
    </Wrapper>
  )
}

export default Footer