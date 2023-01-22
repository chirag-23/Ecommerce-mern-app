import React from 'react'
import { categories } from '../../data'
import Category from './category';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    @media screen and (max-width: 700px){
      flex-direction: column;
      padding: 0px;
    }
`;

const Categories = () => {
  return (
    <Wrapper>
        {categories.map(item => (
            <Category item={item} key={item.id}/>
        ))}
    </Wrapper>
  )
}

export default Categories