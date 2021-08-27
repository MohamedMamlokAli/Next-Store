import Link from 'next/link';
import React from 'react';
import ProductsFilter from '../../components/CoreComponents/ProductsFilter/ProductsFilter';
import styled from 'styled-components';
import ProductsGrid from '../../components/CoreComponents/ProductsGrid/ProductsGrid';
import { ProductData } from '..';
import { InferGetStaticPropsType } from 'next';
import { maxPrice, minPrice } from '../../utils';
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
  const [Products, setProducts] = React.useState(data);
  const [maximumPrice, setMaximumPrice] = React.useState(
    Math.ceil(maxPrice(Products))
  );
  const [minimumPrice, setMinimumPrice] = React.useState(
    Math.floor(minPrice(Products))
  );
  const [currentPriceValue, setCurrentPriceValue] =
    React.useState(maximumPrice);

  return (
    <ProductsPage>
      <h1>Home / Products</h1>
      <ProductsAndFiltersContainer>
        <ProductsFilter
          ProductInfo={data}
          setProducts={setProducts}
          setCurrentPriceValue={setCurrentPriceValue}
          currentPriceValue={currentPriceValue}
          maximum={maximumPrice}
          minimum={minimumPrice}
        />
        <ProductsGrid
          ProductInfo={Products.sort(
            (firstElement, SecondElement) =>
              firstElement.price - SecondElement.price
          ).filter((item) => item.price <= currentPriceValue)}
        />
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
