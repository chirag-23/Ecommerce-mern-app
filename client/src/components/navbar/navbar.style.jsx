import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 90px;
    .sale{
        background-color: #800080a0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 26px;
        padding: 3px;
        h3{
            font-size: 18px;
            letter-spacing: 1px;
        }
    }
    @media screen and (max-width: 700px){
        height: 80px;
        .sale{
            height: 20px;
            width: 100vw;
            h3{
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
    @media screen and (max-width: 400px){
        height: 70px;
        .sale{
            height: 20px;
            width: 100vw;
            h3{
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
`;
export const Content = styled.div`
    padding: 10px 20px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        text-decoration: none;
        color: #800080d0;
    }
    @media screen and (max-width: 700px){
        padding: 5px 10px;
    }
    @media screen and (max-width: 400px){
        padding: 0px 8px;
    }  
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    .lang{
        font-size: 15px;
        cursor: pointer;
    }
    .search{
        display: flex;
        align-items: center;
        border: 1px solid lightgray;
        margin-left: 15px;
        padding: 4px 6px;
        input{
            border: none;
            outline: none;
            font-size: 14px;
            letter-spacing: 1px;
        }
    }
    @media screen and (max-width: 700px){
        .lang{
            display: none;
        }
        .search{
            margin-left: 10px;
            padding: none;
            input{
                font-size: 13px;
                width: 100px;
            }
        }
    }
    @media screen and (max-width: 400px){
        .search{
            margin-left: 0px;
            input{
                width: 70px;
            }
        }
    }
`;
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    a{
        color: black;
    }
    @media screen and (max-width: 700px){
        /* justify-content: center; */
        #btn, #btnreg{
            font-size: 12px;
            padding: 5px;
            margin: 2px;
        }
        #icon{
            font-size: 18px;
            font-weight: 600;
        }
    }
    @media screen and (max-width: 400px){
        #btnreg{
            display: none;
        }
    }
`;
export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    @media screen and (max-width: 700px){
        h1{
            font-size: 28px;
        }
        #logo{
            font-size: 28px;
        }
    }
    @media screen and (max-width: 400px){
        h1{
            font-size: 24px;
            padding-left: 8px;
        }
        #logo{
            font-size: 24px;
        }
    }
`;