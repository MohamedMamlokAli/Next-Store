import styled from 'styled-components';
import Button from '../Common/Button';

import { ProductPrice } from '../../components/Common/ProductCard';

import { ClearFilters } from '../../components/CoreComponents/ProductsFilter/ProductsFilter';

export const CartWrapper = styled.section`
  padding-bottom: 10rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }
`;
export const CartInfoContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;
export const ProductContainer = styled.div`
  margin: 1rem;
`;
export const CartInfoHeader = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--clr-primary-1);
  }
`;
export const HeaderTitle = styled.h5`
  text-align: center;
  width: 20%;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--clr-primary-1);
`;
export const ProductImageNameContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
export const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  height: 75px;
`;
export const ProductName = styled.h5``;
export const MobileProductPrice = styled(ProductPrice)`
  display: block;
  width: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const DesktopProductPrice = styled(ProductPrice)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20%;
  }
`;

export const ProductAmount = styled.span`
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
export const SubTotal = styled(ProductPrice)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20%;
  }
`;
export const RemoveProduct = styled(ClearFilters)`
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
export const CheckoutContainer = styled.section`
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
  display: flex;
  justify-content: center;
`;
export const PriceAndButton = styled.div`
  width: 200px;
  border: 2px solid var(--clr-primary-2);
  padding: 1rem;
  border-radius: 20px;
`;
export const TotalPrice = styled.h4`
  margin-bottom: 0.5rem;
`;
export const CheckoutLoginButton = styled(ClearFilters)`
  width: 100%;
`;
