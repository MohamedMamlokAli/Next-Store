import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
//Page components
import { HeroSection } from '../components/CoreComponents/HeroSection/HeroSection';
import { FeaturedProducts } from '../components/CoreComponents/FeaturedProducts/FeaturedProducts';
//Redux functions and state imports
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators, State } from '../state';
import { bindActionCreators } from 'redux';

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
  const products = useSelector((store: State) => store.products);
  const { addProducts } = bindActionCreators(actionCreators, dispatch);
  addProducts(data);
  return (
    <>
      <Head>
        <title>Comfy Sloth</title>
        <meta
          name='description'
          content='Buy Cloths, Jewelery, Electronics and more from one place: Comfy Sloth'
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
