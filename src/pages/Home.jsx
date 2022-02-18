import AutoPlay from '../components/Autoplay';
import AutoPlay2 from '../components/Autoplay2';
import TopCategories from '../components/containers/TopCategories';
import products from '../JSON/Products.json';
import trending from '../JSON/Trending.json';
import deals from '../JSON/Deals.json';
import BlogConatainer from '../components/containers/BlogConatainer';
import MultipleItems from '../components/Accolades';
import Hero from '../components/Hero';
import Banner1 from '../components/Banners/Banner1';
import Banner2 from '../components/Banners/Banner2';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center overflow-hidden">
      <Hero />
      <TopCategories head={'Top Categories'} />
      <AutoPlay
        head={'All Products'}
        subtitles={[
          'Baby Care',
          'Dairy & Bakery',
          'Oil & Spices',
          'Cleaning & Household',
        ]}
        data={products}
        slides={4}
      />
      <Banner1 />
      <AutoPlay
        head={'Trending Products'}
        subtitles={['Featured', 'Best Seller', 'Latest']}
        data={trending}
        slides={4}
      />
      <Banner2 />
      <AutoPlay2
        head={'Deal of the day'}
        subtitles={['']}
        data={deals}
        slides={4}
      />
      <MultipleItems />
      <BlogConatainer head={'Latest Blog'} />
    </main>
  );
};

export default Home;
