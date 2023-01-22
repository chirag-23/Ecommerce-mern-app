import styled from 'styled-components';

export const Content = styled.div`
    flex: 1;
    margin: 3px;
    height: 65vh;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
    }
    .info{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            color: whitesmoke;
            margin-bottom: 20px;
        }
        button{
            border: none;
            padding: 10px;
            background-color: white;
            color: gray;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.1s ease;
            :hover{
                outline: 3px solid black;
                color: black;
            }
        }
    }

    @media screen and (max-width: 700px){
        height: 20vh;
        margin: 0px;
    }
`;