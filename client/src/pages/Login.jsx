import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/userLogin';
import { Link, useNavigate } from 'react-router-dom'

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
    min-width: 26%;
    padding: 25px;
    margin: 20px;
    background-color: whitesmoke;
    a{
        text-decoration: none;
        color: black;
    }
    h1{
        margin-bottom: 25px;
    }
    span{
        color: red;
    }
    input{
        width: 90%;
        margin: auto;
        outline: none;
        border: black solid 2px;
        letter-spacing: 0.6px;
        background: transparent;
        margin: 15px 0px;
        padding: 6px 15px;
        font-size: 18px;
        font-weight: 500;
    }
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 20px;
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
            &:disabled{
                cursor: not-allowed;
                background: black;
                color: whitesmoke;
            }
        }
    }
    p{
        padding-top: 20px;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isFetching, error } = useSelector((state)=>state.user)
    const currentUser = useSelector(state => state.user.currentUser)

    const handleClick = (e) =>{
        e.preventDefault();
        login(dispatch, { username, password })
        currentUser && navigate('/')
    }

  return (
    <Wrapper>
        <Content>
            <h1>LOGIN</h1>
            <input type="text" placeholder='Username' onChange={(e)=> setUsername(e.target.value)} required/>
            <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} required/>
            <div className='btn'>
                <button onClick={handleClick} disabled={isFetching}>LOGIN</button>
            </div>
            {
                error && <span>Something Went Wrong...</span>
            }
            <p>FORGOT PASSWORD?</p>
            <Link to="/register"><p>CREATE A NEW ACCOUNT</p></Link>
        </Content>
    </Wrapper>
  )
}

export default Login