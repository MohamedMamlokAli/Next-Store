import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../HeroSection/HeroSection';
import Image from 'next/image';
type ProductData = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};
type Props = {
  data: ProductData[];
};

//Styled components

const FeaturedProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
`;
const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductName = styled.span``;
const ProductPrice = styled.span``;

export const FeaturedProducts: React.FC<Props> = ({ data }) => {
  return (
    <FeaturedProductsContainer>
      <SectionTitle>Featured Products</SectionTitle>
      <Products>
        {data.map((item, index) => {
          return (
            <ProductCard key={item.id}>
              <ProductImageContainer>
                <ProductImage src={item.image} />
              </ProductImageContainer>
              <ProductInfo>
                <ProductName>{item.title}</ProductName>
                <ProductPrice>{item.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </Products>
    </FeaturedProductsContainer>
  );
};
