import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 17.5px;
    @media screen and (max-width: 700px){
        padding: 10px;
    }
`;

export const Content = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fbbec7;
    a{
        color: black;
    }
    .circle{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
    }
    img{
        height: 75%;
        z-index: 2;
    }
    .info{
        opacity: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.2);
        z-index: 3;
        transition: opacity 0.45s ease;
        :hover{
            opacity: 1;
        }
    }
    .icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        transition: all 0.5s ease;
        :hover{
            transform: scale(1.15);
            cursor: pointer;
        }
        a{
            color: black;
        }
    }
`;