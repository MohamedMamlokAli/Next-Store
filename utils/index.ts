import { ProductData } from '../pages';

export const returnFeaturedProducts = (products: ProductData[]) => {
  return products.slice(1, 4);
};

export const returnAllproducts = (products: ProductData[]) => {
  return products;
};

export const returnCategories = (products: ProductData[]) => {
  const duplicatedCategories: string[] = products.map((item) => item.category);
  const uniqueCategories: string[] = [...new Set(duplicatedCategories)];
  return uniqueCategories;
};

export const capitalize = (name: string) => {
  return name[0].toUpperCase() + name.slice(1);
};
export const sortPrices = (products: ProductData[]) => {
  const duplicatedprices: number[] = products.map((item) => item.price);
  const uniqueprices: number[] = [...new Set(duplicatedprices)];
  return uniqueprices.sort((firstEl, secondEl) => firstEl - secondEl);
};
export const minPrice = (products: ProductData[]) => {
  const min = sortPrices(products)[0];
  return min;
};
export const maxPrice = (products: ProductData[]) => {
  const prices = sortPrices(products);
  const max = prices[prices.length - 1];
  return max;
};
