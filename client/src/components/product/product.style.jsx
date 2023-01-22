import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    height: 76vh;
    img{
        flex: 1;
        width: 100%;
        background-color: black;
    }
    @media screen and (max-width: 700px){
        flex-direction: column;
        height: auto;
        padding: 10px;
    }
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    h2{
        font-size: 40px;
        padding: 20px 10px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p{
        padding: 10px;
        font-size: 18px;
        letter-spacing: 0.6px;
    }
    h1{
        font-size: 36px;
        padding: 10px;
        font-weight: 500;
        letter-spacing: 1px;
    }
    .filter{
        padding-top: 20px;
        span{
            font-size: 24px;
            padding: 10px;
            letter-spacing: 0.8px;
        }
        #select{
            padding-top: 5px;
            padding-bottom: 5px;
            outline: none;
            font-size: 16px;
            letter-spacing: 0.6px;
        }
    }
    .cart{
        display: flex;
        align-items: center;
        margin-top: 50px;
        .add{
            display: flex;
            align-items: center;
            padding: 10px;
            .icon{
                cursor: pointer;
            }
            span{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 35px;
                width: 35px;
                border-radius: 5px;
                font-size: 24px;
                border: 3px solid teal;
                margin: 0px 10px;
            }
        }
        button{
            margin-left: 20px;
            padding: 10px 30px;
            font-size: 18px;
            font-weight: 600;
            border: none;
            outline: 1px black solid;
            cursor: pointer;
            background-color: transparent;
            transition: all 0.5s ease;
            :hover{
                color: whitesmoke;
                background-color: black;
            }
        }
    }
    @media screen and (max-width: 700px){
        padding-left: 0px;
        h2{
            font-size: 32px;
            padding-bottom: 10px;
        }
        h1{
            font-size: 28px;
        }
        .filter{
            margin-top: 15px;
            padding-top: 0px;
        }
        .cart{
            margin-top: 20px;
            .add{
                padding: 5px;
            }
            button{
                font-size: 16px;
                padding: 8px 12px;
            }
            margin-bottom: 20px;
        }
    }
`