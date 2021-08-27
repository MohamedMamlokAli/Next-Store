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
