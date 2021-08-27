import Link from 'next/link';
import React from 'react';
import ProductsFilter from '../../components/CoreComponents/ProductsFilter/ProductsFilter';
import styled from 'styled-components';
import ProductsGrid from '../../components/CoreComponents/ProductsGrid/ProductsGrid';
import { ProductData } from '..';
import { InferGetStaticPropsType } from 'next';
//Styled Components
const ProductsPage = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProductsAndFiltersContainer = styled.div`
  max-width: 1150px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 4rem;
  }
`;

const Products = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProductsPage>
      <h1>Home / Products</h1>
      <ProductsAndFiltersContainer>
        <ProductsFilter />
        <ProductsGrid ProductInfo={data} />
      </ProductsAndFiltersContainer>
    </ProductsPage>
  );
};
export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data: ProductData[] = await res.json();
  return {
    props: { data },
  };
};

export default Products;
