import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../state';
import Head from 'next/head';
import { PageHeader, PageLinks } from '../products';
import CustomLink from '../../components/Common/CustomLink';
import { LinkItem } from '../products/[id]';
import Button from '../../components/Common/Button';
import { ProductPrice } from '../../components/Common/ProductCard';
import { ClearFilters } from '../../components/CoreComponents/ProductsFilter/ProductsFilter';
import { bindActionCreators } from 'redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
//Styled Components
const CartWrapper = styled.section`
  padding-bottom: 10rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }
`;
const CartInfoContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;
const ProductContainer = styled.div`
  margin: 1rem;
`;
const CartInfoHeader = styled.div`
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
const HeaderTitle = styled.h5`
  text-align: center;
  width: 20%;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--clr-primary-1);
`;
const ProductImageNameContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  height: 75px;
`;
const ProductName = styled.h5``;
const MobileProductPrice = styled(ProductPrice)`
  display: block;
  width: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const DesktopProductPrice = styled(ProductPrice)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20%;
  }
`;

const ProductAmount = styled.span`
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
const SubTotal = styled(ProductPrice)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20%;
  }
`;
const RemoveProduct = styled(ClearFilters)`
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
const CheckoutContainer = styled.section`
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
  display: flex;
  justify-content: center;
`;
const PriceAndButton = styled.div`
  width: 200px;
  border: 2px solid var(--clr-primary-2);
  padding: 1rem;
  border-radius: 20px;
`;
const TotalPrice = styled.h4`
  margin-bottom: 0.5rem;
`;
const CheckoutLoginButton = styled(ClearFilters)`
  width: 100%;
`;
const CartPage: NextPage = () => {
  const cart = useSelector((state: State) => state.cart);
  const user = useSelector((state: State) => state.user);

  const dispatch = useDispatch();
  const { setUser, removeProductfromCart } = bindActionCreators(
    actionCreators,
    dispatch
  );
  React.useEffect(() => {
    onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        console.log('the user is ', typeof authuser.email);
        setUser(authuser.email);
      } else {
        console.log('User is logged out');
        setUser(null);
      }
    });
  }, []);
  return (
    <CartWrapper>
      <Head>
        <title>Cart</title>
      </Head>
      <PageHeader>
        <div>
          <PageLinks>
            <CustomLink href='/' as='/'>
              <LinkItem>Home</LinkItem>
            </CustomLink>
            / Cart
          </PageLinks>
        </div>
      </PageHeader>
      <CartInfoContainer>
        <Button href='/products' as='/products'>
          Return to Products Page
        </Button>
        <ProductContainer>
          <CartInfoHeader>
            <HeaderTitle>Name</HeaderTitle>
            <HeaderTitle>Price</HeaderTitle>
            <HeaderTitle>Amount</HeaderTitle>
            <HeaderTitle>Total Price</HeaderTitle>
            <HeaderTitle></HeaderTitle>
          </CartInfoHeader>
          {cart.ProductsInCart.length < 1 && (
            <h1 style={{ textAlign: 'center' }}>There are no products</h1>
          )}
          {cart.ProductsInCart.map((product, index) => {
            return (
              <Product key={product.id}>
                <ProductImageNameContainer>
                  <ProductImage src={product.image} />
                  <div>
                    <ProductName>{product.title}</ProductName>
                    <MobileProductPrice>
                      ${Math.floor(product.price)}
                    </MobileProductPrice>
                  </div>
                </ProductImageNameContainer>
                <DesktopProductPrice>
                  ${Math.floor(product.price)}
                </DesktopProductPrice>
                <ProductAmount>{product.amount}</ProductAmount>
                <SubTotal>
                  ${Math.floor(product.price * product.amount)}
                </SubTotal>
                <RemoveProduct
                  onClick={() => removeProductfromCart(product.id)}
                >
                  Remove
                </RemoveProduct>
              </Product>
            );
          })}
        </ProductContainer>
        {cart.ProductsInCart.length >= 1 && (
          <CheckoutContainer>
            <PriceAndButton>
              <TotalPrice>
                Total Price: ${Math.floor(cart.TotalPrice)}
              </TotalPrice>
              <CheckoutLoginButton>
                {user.user ? 'Checkout' : 'Login'}
              </CheckoutLoginButton>
            </PriceAndButton>
          </CheckoutContainer>
        )}
      </CartInfoContainer>
    </CartWrapper>
  );
};
export default CartPage;
