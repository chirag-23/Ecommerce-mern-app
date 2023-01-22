import React from 'react'
import styled from 'styled-components'
import { ScrollToTop } from '../utils';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)), url('https://upload.wikimedia.org/wikipedia/commons/4/45/The_Grace_Museum_January_2020_19_%28Women%27s_Fashion_Evolution-_1900s-1920s%2C_from_the_Permanent_Collection%29.jpg'), center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 26%;
    padding: 25px;
    background-color: whitesmoke;
    a{
        text-decoration: none;
        color: black;
    }
    h1{
        margin-bottom: 30px;
    }
    input{
        width: 90%;
        margin: auto;
        outline: none;
        border: black solid 2px;
        letter-spacing: 0.6px;
        background: transparent;
        margin: 8px 0px;
        padding: 6px 15px;
        font-size: 18px;
        font-weight: 500;
    }
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        button{
            padding: 10px 25px;
            font-size: 18px;
            font-weight: 500;
            border: none;
            background: transparent;
            outline: 1px black solid;
            cursor: pointer;
            transition: all 0.5s ease;
            :hover{
                background: black;
                color: whitesmoke;
            }
        }
    }
    p{
        margin-top: 30px;
        span{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 700px){
        width: 60%;
    }
    @media screen and (max-width: 400px){
        width: 80%;
    }
`;

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const navigate = useNavigate();

    const handleClick = async() =>{
        await axios.post('/api/auth/register', {
            username: username,
            email: email,
            password: password
        })
        navigate('/login')
    }

  return (
    <Wrapper>
        <ScrollToTop/>
        <Content>
            <h1>CREATE AN ACCOUNT</h1>
            <input required type="text" placeholder='Username' onChange={(e)=> setUsername(e.target.value)}/>
            <input required type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
            <input required type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
            <input required type="text" placeholder='Confirm Password' onChange={(e)=> setConfirm(e.target.value)}/>
            { password && confirm && ((password === confirm) ? <p style={{color: 'green'}}>Password matches.</p> : <p style={{color: 'red'}}>Password doesnt match.</p>)}
            <div className='btn'>
                <button onClick={handleClick} disabled={password !== confirm}>REGISTER</button>
            </div>
            <p>ALREADY HAVE AN ACCOUNT? <Link to="/login"><span>LOGIN</span></Link></p>
        </Content>
    </Wrapper>
  )
}

export default Register