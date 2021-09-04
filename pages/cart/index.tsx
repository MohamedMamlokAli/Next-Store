import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../state';
import Head from 'next/head';
import { PageHeader, PageLinks } from '../products';
import CustomLink from '../../components/Common/CustomLink';
import { LinkItem } from '../../components/Common/singleProductStyles';
import Button from '../../components/Common/Button';
import {
  deleteDoc,
  where,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';
import * as styles from '../../components/Common/cartstyles';
//Styled Components
const CartPage: NextPage = () => {
  const cart = useSelector((state: State) => state.cart);
  const user = useSelector((state: State) => state.user);

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
                  onClick={async () => {
                    const q = query(
                      collection(db, 'users', `${user.user}`, 'orders'),
                      where('id', '==', product.id)
                    );

                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                      // doc.data() is never undefined for query doc snapshots
                      deleteDoc(doc.ref);
                    });
                  }}
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
