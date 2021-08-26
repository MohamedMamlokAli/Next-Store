import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../state';

const Products = () => {
  const productsData = useSelector((store: State) => store.products);
  return (
    <div>
      <div>
        {productsData.map((item, index) => {
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

export default Products;
