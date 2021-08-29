import Head from 'next/head';
import React from 'react';
import Navbar from '../CoreComponents/Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Head>
        <meta
          name='description'
          content='Buy Clothezs, Jewelery, Electronics and more from one place: Comfy Sloth'
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
