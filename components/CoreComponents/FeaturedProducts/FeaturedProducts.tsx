import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionTitle } from '../HeroSection/HeroSection';
import { StyledLink } from '../HeroSection/HeroSection';
import Image from 'next/image';
import { returnFeaturedProducts } from '../../../utils';
import { ProductCard } from '../../Common/ProductCard';

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
  padding-bottom: 10rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 4rem;
  }
`;
const FeaturedSectionTitle = styled(SectionTitle)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    width: 50%;
    height: 5px;
    background: var(--clr-primary-6);
  }
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

export const FeaturedProducts: React.FC<Props> = ({ data }) => {
  const featured = returnFeaturedProducts(data);
  return (
    <FeaturedProductsContainer>
      <FeaturedSectionTitle style={{ textAlign: 'center', fontSize: '1.5rem' }}>
        Featured Products
      </FeaturedSectionTitle>
      <Products>
        {featured.map((item, index) => {
          return <ProductCard ProductCardInfo={item} key={index} />;
        })}
      </Products>
      <Link href='/products' as='/products' passHref>
        <StyledLink>All Products</StyledLink>
      </Link>
    </FeaturedProductsContainer>
  );
};
