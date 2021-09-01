import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';
import { PageHeader, PageLinks } from '.';
import Button from '../../components/Common/Button';
import { ProductData } from '..';
import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import { actionCreators, State } from '../../state';

import { bindActionCreators } from 'redux';

import CustomLink from '../../components/Common/CustomLink';
interface IdQuery extends ParsedUrlQuery {
  id: string;
}
//Styled Components
const PageWrapper = styled.section`
  padding-bottom: 10rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;
export const LinkItem = styled.h2`
  display: inline;
  color: var(--clr-primary-3);
  padding: 0.5rem;
  transition: var(--transition);
  font-size: 1.5rem;
  :hover {
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
const ProductContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
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
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;
const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
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
  margin-bottom: 1rem;
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
  const [amount, setAmount] = React.useState(1);
  const dispatch = useDispatch();
  const { addProductToCart } = bindActionCreators(actionCreators, dispatch);
  const decrease = () => {
    setAmount(amount !== 1 ? amount - 1 : 1);
  };
  const increase = () => {
    setAmount(amount + 1);
  };
  return (
    <PageWrapper>
      <Head>
        <title>{productData.title}</title>
      </Head>
      <PageHeader>
        <div>
          <PageLinks>
            <CustomLink href='/' as='/'>
              <LinkItem>Home</LinkItem>
            </CustomLink>
            /
            <CustomLink href='/products' as='/products'>
              <LinkItem>Products</LinkItem>
            </CustomLink>
            / {productData.title}
          </PageLinks>
        </div>
      </PageHeader>
      <ProductContainer>
        <Button href='/products' as='/products'>
          Return to Products Page
        </Button>
        <ProductDetails>
          <ProductImageContainer>
            <ProductImage src={productData.image} alt={productData.title} />
          </ProductImageContainer>
          <ProductInfoContainer>
            <ProductName>{productData.title}</ProductName>
            <ProductPrice>${Math.floor(productData.price)}</ProductPrice>
            <ProductDiscription>
              {productData.description.replace(/\//g, ', ')}
            </ProductDiscription>
            <AddToCartContainer>
              <AmountContainer>
                <IncrementDecrement onClick={decrease}>-</IncrementDecrement>
                <Amount>{amount}</Amount>
                <IncrementDecrement onClick={increase}>+</IncrementDecrement>
              </AmountContainer>
              <Button
                href='/cart'
                as='/cart'
                onClick={() => {
                  addProductToCart({
                    amount: amount,
                    category: productData.category,
                    description: productData.description,
                    id: productData.id,
                    image: productData.image,
                    price: productData.price,
                    title: productData.title,
                  });
                }}
              >
                Add To Cart
              </Button>
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
