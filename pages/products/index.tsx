import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import { ProductData } from '..';

const products = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(products);
  return (
    <div>
      <div>
        {products.map((item, index) => {
          return (
            <Link
              key={index}
              href='/products/[id]'
              as={`/products/${item.id}`}
              passHref
            >
              <a> {item.title}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: ProductData[] = await res.json();
  return {
    props: {
      products,
    },
    revalidate: false,
  };
};

export default products;
