import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    background-color: #f7ccf17d;
    padding: 30px 0px;
    @media screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        padding: 20px 10px;
    }
`;

export const ContentL = styled.div`
    flex: 1;
    padding: 0px 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logo{
        display: flex;
        align-items: center;
        color: #222222;
        padding-bottom: 15px;
    }
    p{
        font-size: 18px;
        letter-spacing: 1px;
        word-spacing: 2px;
        padding-bottom: 25px;
        width: 30vw;
        font-weight: 500;
    }
    .social{
        display: flex;
        align-items: center;
        .icon{
            padding-right: 30px;
            a{
                color: black;
            }
        }
    }
    @media screen and (max-width: 400px){
        padding: 0px;
        p{
            width: 90vw;
        }
        .social{
            justify-content: space-between;
            margin: 0px 30px;
        }
    }
`;

export const ContentC = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #222222;
    h2{
        font-size: 24px;
        padding-bottom: 20px;
        padding-left: 10px;
    }
    .links{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 20vh;
        a{
            text-decoration: none;
            color: #222222;
        }
    }
    li{
        list-style: none;
        font-size: 18px;
        padding: 5px 10px;
        cursor: pointer;
        letter-spacing: 1px;
        :hover{
            font-weight: 600;
        }
    }

    @media screen and (max-width: 700px){
        display: none;
    }
`;

export const ContentR = styled.div`
    flex: 1;
    h2{
        font-size: 24px;
        padding-bottom: 20px;
    }
    p{
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        letter-spacing: 1px;
        word-spacing: 2px;
        font-size: 16px;
    }
    
    @media screen and (max-width: 400px){
        h2{
            font-size: 20px;
            margin-top: 20px;
            padding-bottom: 12px;
        }
        p{
            padding-bottom: 12px;
        }
    }
`;