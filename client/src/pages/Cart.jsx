import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StripeCheckout from 'react-stripe-checkout'
import { ScrollToTop } from '../utils';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const Wrapper = styled.div`
  padding: 20px;
  h1{
    text-align: center;
    font-weight: 400;
  }
  @media screen and (max-width: 700px){
    padding: 10px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  button{
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.6px;
  }
  span{
    padding: 0px 10px;
    cursor: pointer;
    text-decoration: underline;
    font-size: 17px;
  }

  @media screen and (max-width: 700px) {
    padding: 0px;
    span{
      display: none;
    }
    button{
      margin: 5px;
      font-size: 14px;
      padding: 5px 10px;
    }
    
  }

`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 50%;
  border: 1px gray solid;
  background-color: ${(props) => props.color};
  @media screen and (max-width: 500px){
    margin-top: 5px;
    margin-bottom: 0px;
  
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Content0 = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    .info{
      flex: 3;
      img{
        width: 220px;
        height: 220px;
      }
      .product{
        display: flex;
        justify-content: space-between;
        .details{
          display: flex;
          .text{
            display: flex;
            padding-left: 20px;
            flex-direction: column;
            justify-content: center;
          }
          span{
            padding: 10px;
            font-size: 18px;
            letter-spacing: 1px;
          }
        }
        .price{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 20px;
          .quan{
            display: flex;
            align-items: center;
            padding: 10px;
            font-size: 34px;
            .icon{
              margin: 10px;
              cursor: pointer;
            }
          }
          h1{
            font-size: 38px;
            padding: 5px;
            text-align: center;
          }
        }
      }
    }
    .summary{
      flex: 1;
      max-height: 400px;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      letter-spacing: 1px;

      display: flex;
      flex-direction: column;
      h1{
        margin-bottom: 20px;
      }
      span{
        padding: 15px 0px;
        font-size: 18px;
      }
      button{
        margin: 20px;
        padding: 15px 10px;
        font-size: 18px;
        font-weight: 600;
        background-color: transparent;
        outline: 1px solid black;
        border: none;
        cursor: pointer;
        transition: all 0.5s ease;
        :hover{
          background-color: black;
          color: whitesmoke;
        }
      }
    }

    @media screen and (max-width: 700px){
      flex-direction: column;
      align-items: center;
      padding: 10px;
      .info{
          img{
            width: 100px;
            height: 100px;
          }
          .product{
            flex-direction: column;
            .details{
              .text{
                padding-left: 0px;
              }
              span{
                padding: 5px 10px;
                font-size: 16px;
              }
            }
            .price{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding: 0px;
              .quan{
                padding: 0px;
                font-size: 30px;
                .icon{
                  margin: 0px 10px;
                }
              }
              h1{
                font-size: 28px;
                padding: 10px;
              }
            }
          }
      }
    }
`;

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const currentUser = useSelector(state => state.user.currentUser)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token)
  }
  
  useEffect(()=>{
    stripeToken && navigate("/success", {
      stripeData: stripeToken,
      products: cart })
    // const makeReq = async() =>{
    //   try{
    //     const res = await publicRequest.post("/checkout/payment", {
    //       tokenId: stripeToken.id,
    //       amount: cart.total * 100,
    //     })
    //   }catch(err){
    //   }
    // }
    // stripeToken &&  makeReq();
  },[navigate, cart, stripeToken])

  

  return (
    <>
        <ScrollToTop/>
        <Navbar announcement1 />
        <Wrapper>
          <h1>YOUR CART</h1>
          <Content>
            <Link to="/"><button>CONTINUE SHOPPING</button></Link>
            <div>
              <span>Shopping Bag({cart.quantity})</span>
              <span>Your Wishlist(0)</span>
            </div>
            <StripeCheckout
                name="CHIRAG"
                description={`Your total is ₹${cart.total}`}
                billingAddress
                shippingAddress
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button disabled={!currentUser}>CHECKOUT NOW</button>
              </StripeCheckout>
          </Content>
          <Content0>
            <div className='info'>
            {
              cart.products?.map((item) => (
                <div key={item.title}>
              <div className='product'>
                <div className='details'>
                  <div>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className='text'>
                    <span><b>Product:</b> {item.title}</span>
                    <span><b>ID:</b> {item._id}</span>
                    <span><b>Size:</b> {item.size}</span>
                    <ProductColor color={item.color}/>
                  </div>
                </div>
                <div className='price'>
                  <div className='quan'>
                    <RemoveIcon className='icon' fontSize='large'/>
                    <span className='quantity'>{item.quantity}</span>
                    <AddIcon className='icon' fontSize='large'/>
                  </div>
                  <div>
                    <h1>₹ {item.price}</h1>
                  </div>
                </div>
              </div>
              <Hr/>
              </div>
              ))
            }
            </div>
            <div className='summary'>
              <h1>ORDER SUMMARY</h1>
              <span>SUBTOTAL: ₹ {cart.total}</span>
              <span>ESTIMATED SHIPPING: ₹ 50</span>
              <span>SHIPPING DISCOUNT: ₹ 50</span>
              <span><b>TOTAL: ₹ {cart.total}</b></span>
              <StripeCheckout
                name="CHIRAG"
                description={`Your total is ₹${cart.total}`}
                billingAddress
                shippingAddress
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button disabled={!currentUser}>CHECKOUT NOW</button>
              </StripeCheckout>
              {
                !currentUser && <p style={{color: 'red'}}>Please Login to Checkout</p>
              }
            </div>
          </Content0>
        </Wrapper>
        <Footer/>
    </>
  )
}

export default Cart