import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth, db } from '../../firebase';
import { actionCreators, State } from '../../state';
import 'firebase/compat/firestore';

import Navbar from '../CoreComponents/Navbar/Navbar';
import { collection, onSnapshot } from 'firebase/firestore';
import { ProductDataWithAmount } from '../../state/reducers/cartReducer';
const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);

  const { setUser, addProductToCart, emptyCart, removeProductfromCart } =
    bindActionCreators(actionCreators, dispatch);
  const ref = collection(db, 'users', `${user.user}`, 'orders');
  React.useEffect(() => {
    if (user.user) return;
    onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        console.log('the user is ', authuser.email);
        setUser(authuser.uid);
      } else {
        console.log('User is logged out');
        setUser(null);
      }
    });
  }, [user.user]);

  React.useEffect(() => {
    if (!user.user) {
      return;
    }
    emptyCart();
    const unsub = onSnapshot(ref, (querySnapshot) => {
      querySnapshot.docChanges().forEach((doc) => {
        if (doc.type === 'added') {
          addProductToCart(doc.doc.data() as ProductDataWithAmount);
        }
        if (doc.type === 'modified') {
        }
        if (doc.type === 'removed') {
          removeProductfromCart(doc.doc.data().id);
        }
      });
    });

    return unsub;
  }, [user.user]);

  return (
    <main>
      <Head>
        <meta
          name='google-site-verification'
          content='kO7ZgeZWyJC663DXNQu1mQ27oe3SThOTVlBNFnHFvSg'
        />
        <meta
          name='description'
          content='Buy Clothes, Jewelery, Electronics and more from one place: Comfy Sloth'
        />
        <link rel='canonical' href='https://next-store-mamluk.vercel.app/' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='E-Commerce' />

        <meta property='og:title' content='Comfy Sloth' />

        <meta
          property='og:description'
          content='Buy Cloths, Jewelery, Electronics and more from one place: Comfy Sloth'
        />

        <meta property='og:image' content='/public/logo.svg' />

        <meta
          property='og:url'
          content='https://next-store-mamluk.vercel.app/'
        />

        <meta property='og:site_name' content='Comfy Sloth' />
      </Head>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
