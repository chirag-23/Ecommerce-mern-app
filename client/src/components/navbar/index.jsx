import React from 'react'
import { Center, Content, Left, Right, Wrapper } from './navbar.style';

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ announcement, announcement1 }) => {
  const quantity = useSelector(state => state.cart.quantity);
  const currentUser = useSelector(state => state.user.currentUser)
  return (
    <Wrapper>
      {announcement &&
        <div className='sale' >
        <marquee direction="right" width="100%" truespeed="truespeed" scrolldelay="100" loop="0"><h3>Upto 70% Discount on all Deals Today!</h3></marquee>
        </div>
      }     
      <Content>
        <Left>
            <span className='lang' >EN</span>
            <div className='search'>
              <input type="text" placeholder='search'/>
              <SearchIcon className='icon' style={{color:"grey", fontSize:18}}/>
            </div>
        </Left>
        <Link to="/">
        <Center>
            <h1>CHIRAG</h1> &nbsp;
            <TipsAndUpdatesIcon fontSize='large' id='logo'/>
        </Center>
        </Link>
        <Right>
          {
            !currentUser && 
            <Link to="/register"><MenuItem id='btnreg'>REGISTER</MenuItem></Link>
          }
          {
            !currentUser && 
            <Link to="/login"><MenuItem id='btn'>LOG IN</MenuItem></Link>
          }
          <MenuItem id='btn'>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="secondary" id='num'>
                  <ShoppingCartOutlinedIcon id='icon'/>
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Content>
      {announcement1 &&
        <div className='sale' >
          <h3>Super Offer! Free Delivery on Orders Over ₹500</h3>
        </div>
      }  
    </Wrapper>
  )
}

export default Navbar;