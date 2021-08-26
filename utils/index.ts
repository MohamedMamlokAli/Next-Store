import { ProductData } from '../pages';

export const returnFeaturedProducts = (products: ProductData[]) => {
  return products.slice(1, 4);
};

export const returnAllproducts = (products: ProductData[]) => {
  return products;
};
