import React from 'react';
import styled from 'styled-components';
import { ProductData } from '../../pages';
//Styled Components
export const ProductCardWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  border: 1px solid var(--clr-primary-5);
  border-radius: 30px;
  padding-bottom: 10px;
  border-top-right-radius: 0;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  :hover {
    transform: rotate(-1deg) scale(1.05);
  }
`;
export const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: white;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
  letter-spacing: var(--spacing);
  padding: 0 1em;
  font-weight: bold;
`;
export const ProductName = styled.span`
  /* add ... if the text exceeds a certain width */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /*  */
  width: 65%;
  color: var(--clr-gray-1);
`;
export const ProductPrice = styled.span`
  color: var(--clr-primary-5);
`;
//Prop Type
type Props = {
  ProductCardInfo: ProductData;
};

export const ProductCard: React.FC<Props> = ({ ProductCardInfo }) => {
  const { image, title, price } = ProductCardInfo;
  return (
    <ProductCardWrapper>
      <ProductImageContainer>
        <ProductImage src={image} alt='Product Image' />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{title}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductInfo>
    </ProductCardWrapper>
  );
};
