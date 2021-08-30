import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
//Page components
import { HeroSection } from '../components/CoreComponents/HeroSection/HeroSection';
import { FeaturedProducts } from '../components/CoreComponents/FeaturedProducts/FeaturedProducts';

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
