import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';
import { PageHeader, PageLinks } from '.';
import { ClearFilters } from '../../components/CoreComponents/ProductsFilter/ProductsFilter';
import { ProductData } from '..';
import React from 'react';
import Head from 'next/head';
interface IdQuery extends ParsedUrlQuery {
  id: string;
}
//Styled Components
const PageWrapper = styled.section`
  padding-bottom: 10rem;
`;
const ProductContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;
const Button = styled(ClearFilters)`
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: 400;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 10px;
  border-color: transparent;
  transition: all 0.3s ease;
  :hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-10);
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const ProductImageContainer = styled.div`
  flex-basis: 100%;
  height: 100%;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ProductInfoContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  gap: 1rem;
  h1,
  h2,
  h3 {
    letter-spacing: var(--spacing);
    line-height: 1.25;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;
const ProductName = styled.h2`
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
const ProductPrice = styled.h5`
  font-size: 0.875rem;
  color: var(--clr-primary-5);
  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
const ProductDiscription = styled.p`
  line-height: 2;
  max-width: 45em;
  color: var(--clr-grey-3);
`;
const AddToCartContainer = styled.div``;
const AmountContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 3rem;
  align-items: center;
`;
const IncrementDecrement = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 1rem 0px;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;
const Amount = styled.span``;
const Product = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageWrapper>
      <Head>
        <title>{productData.title}</title>
      </Head>
      <PageHeader>
        <div>
          <PageLinks>Home / Products / {productData.title}</PageLinks>
        </div>
      </PageHeader>
      <ProductContainer>
        <Button>Return to Products Page</Button>
        <ProductDetails>
          <ProductImageContainer>
            <ProductImage src={productData.image} alt={productData.title} />
          </ProductImageContainer>
          <ProductInfoContainer>
            <ProductName>{productData.title}</ProductName>
            <ProductPrice>${productData.price}</ProductPrice>
            <ProductDiscription>
              {productData.description.replace(/\//g, ', ')}
            </ProductDiscription>
            <AddToCartContainer>
              <AmountContainer>
                <IncrementDecrement>-</IncrementDecrement>
                <Amount>1</Amount>
                <IncrementDecrement>+</IncrementDecrement>
              </AmountContainer>
              <Button>Add To Cart</Button>
            </AddToCartContainer>
          </ProductInfoContainer>
        </ProductDetails>
      </ProductContainer>
    </PageWrapper>
  );
};
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params as IdQuery;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData: ProductData = await response.json();

  return {
    props: {
      productData,
    },
    revalidate: false,
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const productsData: ProductData[] = await response.json();

  const paths = productsData.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
export default Product;
