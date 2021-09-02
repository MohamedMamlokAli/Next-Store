import { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../state';
import Head from 'next/head';
import { PageHeader, PageLinks } from '../products';
import CustomLink from '../../components/Common/CustomLink';
import { LinkItem } from '../../components/Common/singleProductStyles';
import Button from '../../components/Common/Button';
import { bindActionCreators } from 'redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import * as styles from '../../components/Common/cartstyles';

//Styled Components
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
    <styles.CartWrapper>
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
      <styles.CartInfoContainer>
        <Button href='/products' as='/products'>
          Return to Products Page
        </Button>
        <styles.ProductContainer>
          <styles.CartInfoHeader>
            <styles.HeaderTitle>Name</styles.HeaderTitle>
            <styles.HeaderTitle>Price</styles.HeaderTitle>
            <styles.HeaderTitle>Amount</styles.HeaderTitle>
            <styles.HeaderTitle>Total Price</styles.HeaderTitle>
            <styles.HeaderTitle></styles.HeaderTitle>
          </styles.CartInfoHeader>
          {cart.ProductsInCart.length < 1 && (
            <h1 style={{ textAlign: 'center' }}>There are no products</h1>
          )}
          {cart.ProductsInCart.map((product, index) => {
            return (
              <styles.Product key={product.id}>
                <styles.ProductImageNameContainer>
                  <styles.ProductImage src={product.image} />
                  <div>
                    <styles.ProductName>{product.title}</styles.ProductName>
                    <styles.MobileProductPrice>
                      ${Math.floor(product.price)}
                    </styles.MobileProductPrice>
                  </div>
                </styles.ProductImageNameContainer>
                <styles.DesktopProductPrice>
                  ${Math.floor(product.price)}
                </styles.DesktopProductPrice>
                <styles.ProductAmount>{product.amount}</styles.ProductAmount>
                <styles.SubTotal>
                  ${Math.floor(product.price * product.amount)}
                </styles.SubTotal>
                <styles.RemoveProduct
                  onClick={() => removeProductfromCart(product.id)}
                >
                  Remove
                </styles.RemoveProduct>
              </styles.Product>
            );
          })}
        </styles.ProductContainer>
        {cart.ProductsInCart.length >= 1 && (
          <styles.CheckoutContainer>
            <styles.PriceAndButton>
              <styles.TotalPrice>
                Total Price: ${Math.floor(cart.TotalPrice)}
              </styles.TotalPrice>
              <styles.CheckoutLoginButton>
                {user.user ? 'Checkout' : 'Login'}
              </styles.CheckoutLoginButton>
            </styles.PriceAndButton>
          </styles.CheckoutContainer>
        )}
      </styles.CartInfoContainer>
    </styles.CartWrapper>
  );
};
export default CartPage;
