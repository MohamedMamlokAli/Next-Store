import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import * as styles from '../../components/Common/singleProductStyles';
import { PageHeader, PageLinks } from '.';
import Button from '../../components/Common/Button';
import { ProductData } from '..';
import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { State } from '../../state';

import { collection, addDoc } from 'firebase/firestore';

import CustomLink from '../../components/Common/CustomLink';
import { ProductDataWithAmount } from '../../state/reducers/cartReducer';
import { db } from '../../firebase';
interface IdQuery extends ParsedUrlQuery {
  id: string;
}
const Product = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [amount, setAmount] = React.useState(1);
  const user = useSelector((state: State) => state.user);

  const updateFirestore = async (product: ProductDataWithAmount) => {
    //update firestore
    const dbSnap = collection(db, 'users', `${user.user}`, 'orders');
    await addDoc(dbSnap, product);
  };
  const decrease = () => {
    setAmount(amount !== 1 ? amount - 1 : 1);
  };
  const increase = () => {
    setAmount(amount + 1);
  };
  return (
    <styles.PageWrapper>
      <Head>
        <title>{productData.title}</title>
      </Head>
      <PageHeader>
        <div>
          <PageLinks>
            <CustomLink href='/' as='/'>
              <styles.LinkItem>Home</styles.LinkItem>
            </CustomLink>
            /
            <CustomLink href='/products' as='/products'>
              <styles.LinkItem>Products</styles.LinkItem>
            </CustomLink>
            / {productData.title}
          </PageLinks>
        </div>
      </PageHeader>
      <styles.ProductContainer>
        <Button href='/products' as='/products'>
          Return to Products Page
        </Button>
        <styles.ProductDetails>
          <styles.ProductImageContainer>
            <styles.ProductImage
              src={productData.image}
              alt={productData.title}
            />
          </styles.ProductImageContainer>
          <styles.ProductInfoContainer>
            <styles.ProductName>{productData.title}</styles.ProductName>
            <styles.ProductPrice>
              ${Math.floor(productData.price)}
            </styles.ProductPrice>
            <styles.ProductDiscription>
              {productData.description.replace(/\//g, ', ')}
            </styles.ProductDiscription>
            <styles.AddToCartContainer>
              <styles.AmountContainer>
                <styles.IncrementDecrement onClick={decrease}>
                  -
                </styles.IncrementDecrement>
                <styles.Amount>{amount}</styles.Amount>
                <styles.IncrementDecrement onClick={increase}>
                  +
                </styles.IncrementDecrement>
              </styles.AmountContainer>
              {!user.user ? (
                <Button href='/login' as='/login'>
                  Login to add product to cart
                </Button>
              ) : (
                <Button
                  href='/cart'
                  as='/cart'
                  onClick={() => {
                    updateFirestore({
                      ...productData,
                      amount: amount,
                    });
                  }}
                >
                  Add To Cart
                </Button>
              )}
            </styles.AddToCartContainer>
          </styles.ProductInfoContainer>
        </styles.ProductDetails>
      </styles.ProductContainer>
    </styles.PageWrapper>
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
