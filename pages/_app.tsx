import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Common/Layout';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../state';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
