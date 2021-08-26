import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { HeroSection } from '../components/CoreComponents/HeroSection/HeroSection';
import { FeaturedProducts } from '../components/CoreComponents/FeaturedProducts/FeaturedProducts';

export type ProductData = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=3');
  const data: ProductData[] = await res.json();
  return {
    props: { data },
  };
};
