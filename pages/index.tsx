import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Head from 'next/head';
//Page components
import { HeroSection } from '../components/CoreComponents/HeroSection/HeroSection';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { FeaturedProducts } from '../components/CoreComponents/FeaturedProducts/FeaturedProducts';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../firebase';

//End of imports
export type ProductData = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch();
  const { setUser } = bindActionCreators(actionCreators, dispatch);
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
  }, [setUser]);

  return (
    <>
      <Head>
        <title>Comfy Sloth</title>
      </Head>
      <HeroSection />
      <FeaturedProducts data={data} />
    </>
  );
};

export default Home;
export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data: ProductData[] = await res.json();
  return {
    props: { data },
  };
};
