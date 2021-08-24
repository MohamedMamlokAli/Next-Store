import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import { HeroSection } from '../components/CoreComponents/HeroSection/HeroSection';
import { FeaturedProducts } from '../components/CoreComponents/FeaturedProducts/FeaturedProducts';

type ProductData = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
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
