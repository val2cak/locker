import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Layout from '../layout';
import hero from '../../assets/images/home-hero.png';
import banner from '../../assets/images/home-banner.png';
import heroMobile from '../../assets/images/home-hero-mobile.png';
import bannerMobile from '../../assets/images/home-banner-mobile.png';
import Button from '../../components/button/button';
import locale from '../../localization/locale';
import { useGetProductsByCategoryQuery } from '../../hooks/products-api';
import ProductsSlider from './components/products-slider';
import CategoryCard from './components/category-card';
import { categories } from '../../constants/categories';
import Loader from '../../components/loader/loader';

const HomeContainer = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const {
    button,
    popularBeauty,
    popularFurniture,
    popularLaptops,
    popularMensWatches,
    popularWomensDresses,
  } = locale.home;

  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate('/products');
  };

  const { data: beautyProducts, isLoading: loadingBeauty } =
    useGetProductsByCategoryQuery('beauty');
  const { data: laptopsProducts, isLoading: loadingLaptops } =
    useGetProductsByCategoryQuery('laptops');
  const { data: furnitureProducts, isLoading: loadingFurniture } =
    useGetProductsByCategoryQuery('furniture');
  const { data: mensWatchesProducts, isLoading: loadingMensWatches } =
    useGetProductsByCategoryQuery('mens-watches');
  const { data: womensDressesProducts, isLoading: loadingWomensDresses } =
    useGetProductsByCategoryQuery('womens-dresses');
  const { data: sportsProducts, isLoading: loadingSports } =
    useGetProductsByCategoryQuery('sports-accessories');
  const { data: vehiclesProducts, isLoading: loadingVehicles } =
    useGetProductsByCategoryQuery('vehicle');
  const { data: homeProducts, isLoading: loadingHome } =
    useGetProductsByCategoryQuery('home-decoration');

  return (
    <Layout>
      <img
        src={isSmallScreen ? heroMobile : hero}
        alt={'hero'}
        className='w-full object-contain'
        loading='lazy'
      />

      <div>
        <div className='text-3xl font-righteous uppercase sm:px-8 lg:px-16 px-40 sm:text-lg sm:leading-4'>
          {popularBeauty}
        </div>
        {loadingBeauty ? (
          <Loader />
        ) : (
          beautyProducts && (
            <ProductsSlider products={beautyProducts.products} />
          )
        )}
      </div>

      <div>
        <div className='text-3xl font-righteous uppercase sm:px-8 lg:px-16 px-40 sm:text-lg sm:leading-4'>
          {popularLaptops}
        </div>
        {loadingLaptops ? (
          <Loader />
        ) : (
          laptopsProducts && (
            <ProductsSlider products={laptopsProducts.products} />
          )
        )}
      </div>

      <div className='sm:w-full'>
        <div className='text-3xl font-righteous uppercase sm:px-8 lg:px-16 px-40 sm:text-lg sm:leading-4'>
          {popularFurniture}
        </div>
        {loadingFurniture ? (
          <Loader />
        ) : (
          furnitureProducts && (
            <ProductsSlider products={furnitureProducts.products} />
          )
        )}
      </div>

      <div className='bg-dark py-8 flex flex-col items-center'>
        <img
          src={isSmallScreen ? bannerMobile : banner}
          alt={'banner'}
          className='w-full object-contain'
          loading='lazy'
        />
        <Button
          text={button}
          className='w-fit !bg-primary !px-14 !text-lg'
          handleOnClick={navigateToProducts}
        />
      </div>

      <div>
        <div className='text-3xl font-righteous uppercase sm:px-8 lg:px-16 px-40 sm:text-lg sm:leading-4'>
          {popularMensWatches}
        </div>
        {loadingMensWatches ? (
          <Loader />
        ) : (
          mensWatchesProducts && (
            <ProductsSlider products={mensWatchesProducts.products} />
          )
        )}
      </div>

      <div>
        <div className='text-3xl font-righteous uppercase sm:px-8 lg:px-16 px-40 sm:text-lg sm:leading-4'>
          {popularWomensDresses}
        </div>
        {loadingWomensDresses ? (
          <Loader />
        ) : (
          womensDressesProducts && (
            <ProductsSlider products={womensDressesProducts.products} />
          )
        )}
      </div>

      <div className='bg-dark flex justify-between sm:px-8 lg:px-16 px-40 py-8 sm:overflow-y-auto sm:text-lg'>
        {loadingSports ? (
          <Loader />
        ) : (
          sportsProducts && (
            <CategoryCard
              name={
                categories.find((category) => category.slug.includes('sports'))
                  .name
              }
              slug={
                categories.find((category) => category.slug.includes('sports'))
                  .slug
              }
              url={sportsProducts.products[0].images[0]}
            />
          )
        )}

        {loadingVehicles ? (
          <Loader />
        ) : (
          vehiclesProducts && (
            <CategoryCard
              name={
                categories.find((category) =>
                  category.slug.includes('vehicles')
                ).name
              }
              slug={
                categories.find((category) =>
                  category.slug.includes('vehicles')
                ).slug
              }
              url={vehiclesProducts.products[0].images[0]}
            />
          )
        )}

        {loadingHome ? (
          <Loader />
        ) : (
          homeProducts && (
            <CategoryCard
              name={
                categories.find((category) => category.slug.includes('home'))
                  .name
              }
              slug={
                categories.find((category) => category.slug.includes('home'))
                  .slug
              }
              url={homeProducts.products[0].images[0]}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default HomeContainer;
