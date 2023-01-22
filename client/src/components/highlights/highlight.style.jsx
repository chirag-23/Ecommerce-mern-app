import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    @media screen and (max-width:700px){
        display: none;
    }
`;

export const Slide = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.index * -100}vw);
    .box{
        display: flex;
        width: 100vw;
        height: 80vh;
        .bg{
            flex: 1;
            img{
                height: 100vh;
            }
            padding-left: 60px;
        }
        .details{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-right: 100px;
            h1{
                font-size: 70px;
                text-align: center;
            }
            p{
                font-size: 28px;
                text-align: center;
                color: gray;
                margin: 50px 20px;
                letter-spacing: 1px;
                word-spacing: 3px;
                line-height: 40px;
            }
            .btn{
                padding: 20px;
                
            }
            button{
                padding: 16px 40px;
                font-size: 20px;
                font-weight: 600;
                background: transparent;
                border: none;
                background-color: whitesmoke;
                transition: background-color 1s;
                outline: 1px solid black;
                :hover{
                    color: white;
                    background-color: black;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    .icon{
        height: 55px;
        width: 55px;
        padding: 10px;
        color: #c1c1c1;
        cursor: pointer;
        z-index: 2;
        :hover{
            height: 60px;
            width: 60px;
            color: gray;
        }
    }
    .left{
        position: absolute;
        left: 0px;
    }
    .right{
        position: absolute;
        right: 0px;
    }
`;