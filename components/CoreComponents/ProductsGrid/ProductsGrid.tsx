import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { ProductCard } from '../../Common/ProductCard';
import { ProductData } from '../../../pages';
//Styled Components
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 2rem;
  width: 80%;
  margin: 1rem auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, auto);
  }
`;

type Props = {
  ProductInfo: ProductData[];
};
const ProductsGrid: React.FC<Props> = ({ ProductInfo }) => {
  if (ProductInfo.length === 0) {
    return (
      <h1 style={{ textAlign: 'center', width: '100%' }}>No Products Found</h1>
    );
  }
  return (
    <ProductsContainer>
      {ProductInfo.map((product, index) => {
        return <ProductCard ProductCardInfo={product} key={index} />;
      })}
    </ProductsContainer>
  );
};

export default ProductsGrid;
