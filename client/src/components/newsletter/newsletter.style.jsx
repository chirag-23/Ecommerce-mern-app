import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffb550;
    /* margin: 22px; */
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 60px;
        text-align: center;
        padding-bottom: 20px;
    }
    p{
        font-size: 30px;
        color: #575454;
        letter-spacing: 1px;
        word-spacing: 3px;
        padding-bottom: 40px;
    }

    input{
        width: 300px;
        margin-bottom: 30px;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 5px;
        font-size: 18px;
        letter-spacing: 1px;
    }

    button{
        border: none;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        outline: 1px black solid;
        color: #575454;
        background-color: transparent;
        transition: all 0.5s ease;
        :hover{
            background-color: black;
            color: whitesmoke;
        }
    }
    @media screen and (max-width:700px) {
        p{
            text-align: center;
        }
    }
    @media screen and (max-width: 500px) {
        h1{
            font-size: 38px;
            padding: 0px 10px;
            margin-bottom: 20px;
        }
        p{
            font-size: 20px;
            padding: 0px 20px;
            margin-bottom: 40px;
        }
        input{
            width: 250px;
            padding: 10px 15px;
        }
    }
`;