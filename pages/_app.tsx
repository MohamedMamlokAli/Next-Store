import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Common/Layout';
import { Provider } from 'react-redux';
import { store } from '../state';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        console.log('the user is ', authuser.email);
      } else {
        console.log('User is logged out');
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
