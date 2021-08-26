import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProductData } from '..';
import React from 'react';
interface IdQuery extends ParsedUrlQuery {
  id: string;
}
const Product = ({
  productData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>{productData.title}</h1>
      <img src={productData.image} alt={productData.title} />
    </div>
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
