import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionTitle } from '../HeroSection/HeroSection';
import { StyledLink } from '../HeroSection/HeroSection';

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
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  background: var(--clr-grey-10);
`;
const Products = styled.div`
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
const ProductCard = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  border: 1px solid var(--clr-primary-5);
  border-radius: 30px;
  padding-bottom: 10px;
  border-top-right-radius: 0;
  overflow: hidden;
  transition: transform 250ms ease-in-out;
  :hover {
    transform: rotate(-1deg) scale(1.05);
  }
`;
const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: white;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
  letter-spacing: var(--spacing);
  padding: 0 1em;
  font-weight: bold;
`;
const ProductName = styled.span`
  width: 65%;
  color: var(--clr-gray-1);
`;
const ProductPrice = styled.span`
  color: var(--clr-primary-5);
`;

export const FeaturedProducts: React.FC<Props> = ({ data }) => {
  return (
    <FeaturedProductsContainer>
      <SectionTitle style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        Featured Products
      </SectionTitle>
      <Products>
        {data.map((item, index) => {
          return (
            <ProductCard key={item.id}>
              <ProductImageContainer>
                <ProductImage src={item.image} />
              </ProductImageContainer>
              <ProductInfo>
                <ProductName>{item.title}</ProductName>
                <ProductPrice>${item.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </Products>
      <Link href='/products' as='/products' passHref>
        <StyledLink>All Products</StyledLink>
      </Link>
    </FeaturedProductsContainer>
  );
};
