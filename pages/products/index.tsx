import Link from 'next/link';
import React from 'react';
import ProductsFilter from '../../components/CoreComponents/ProductsFilter/ProductsFilter';
import styled from 'styled-components';
import ProductsGrid from '../../components/CoreComponents/ProductsGrid/ProductsGrid';
import { SectionTitle } from '../../components/CoreComponents/HeroSection/HeroSection';
import { ProductData } from '..';
import { InferGetStaticPropsType } from 'next';
import { maxPrice, minPrice, sortListDes, searchFilter } from '../../utils';
import Head from 'next/head';
import CustomLink from '../../components/Common/CustomLink';
import { LinkItem } from './[id]';
//Styled Components
const ProductsPage = styled.section`
  display: flex;
  flex-direction: column;
`;
export const PageLinks = styled(SectionTitle)`
  font-size: 1.5rem;
  letter-spacing: 1px;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
export const PageHeader = styled.header`
  width: 100%;
  height: 200px;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
  margin: 0;
  margin-bottom: 2rem;
  div {
    max-width: 1166px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;
const ProductsAndFiltersContainer = styled.div`
  max-width: 1150px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  gap: 5rem;
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
  const [search, setSearch] = React.useState(``);

  return (
    <ProductsPage>
      <Head>
        <title>Products</title>
      </Head>
      <PageHeader>
        <div>
          <PageLinks>
            <CustomLink href='/' as='/'>
              <LinkItem>Home</LinkItem>
            </CustomLink>
            / Products
          </PageLinks>
        </div>
      </PageHeader>
      <ProductsAndFiltersContainer>
        <ProductsFilter
          ProductInfo={data}
          setProducts={setProducts}
          setCurrentPriceValue={setCurrentPriceValue}
          currentPriceValue={currentPriceValue}
          maximum={maximumPrice}
          minimum={minimumPrice}
          search={search}
          setSearch={setSearch}
        />
        <ProductsGrid
          ProductInfo={sortListDes(searchFilter(Products, search)).filter(
            (item) => item.price <= currentPriceValue
          )}
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
