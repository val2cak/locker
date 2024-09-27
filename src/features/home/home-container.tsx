import { useNavigate } from 'react-router-dom';

import Layout from '../layout';
import hero from '../../assets/images/home-hero.png';
import banner from '../../assets/images/home-banner.png';
import Button from '../../components/button/button';
import locale from '../../localization/locale';
import { useGetProductsByCategoryQuery } from '../../hooks/products-api';
import ProductsSlider from './components/products-slider';
import CategoryCard from './components/category-card';
import { categories } from '../../constants/categories';

const HomeContainer = () => {
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
      <img src={hero} alt={'hero'} className='w-full object-contain' />

      <div>
        <span className='text-3xl font-righteous uppercase px-40'>
          {popularBeauty}
        </span>
        {loadingBeauty ? (
          <p>Loading...</p>
        ) : (
          beautyProducts && (
            <ProductsSlider products={beautyProducts.products} />
          )
        )}
      </div>

      <div>
        <span className='text-3xl font-righteous uppercase px-40'>
          {popularLaptops}
        </span>
        {loadingLaptops ? (
          <p>Loading...</p>
        ) : (
          laptopsProducts && (
            <ProductsSlider products={laptopsProducts.products} />
          )
        )}
      </div>

      <div>
        <span className='text-3xl font-righteous uppercase px-40'>
          {popularFurniture}
        </span>
        {loadingFurniture ? (
          <p>Loading...</p>
        ) : (
          furnitureProducts && (
            <ProductsSlider products={furnitureProducts.products} />
          )
        )}
      </div>

      <div className='bg-dark py-8 flex flex-col items-center'>
        <img src={banner} alt={'banner'} className='w-full object-contain' />
        <Button
          text={button}
          className='w-fit !bg-primary !px-14 !text-lg'
          handleOnClick={navigateToProducts}
        />
      </div>

      <div>
        <span className='text-3xl font-righteous uppercase px-40'>
          {popularMensWatches}
        </span>
        {loadingMensWatches ? (
          <p>Loading...</p>
        ) : (
          mensWatchesProducts && (
            <ProductsSlider products={mensWatchesProducts.products} />
          )
        )}
      </div>

      <div>
        <span className='text-3xl font-righteous uppercase px-40'>
          {popularWomensDresses}
        </span>
        {loadingWomensDresses ? (
          <p>Loading...</p>
        ) : (
          womensDressesProducts && (
            <ProductsSlider products={womensDressesProducts.products} />
          )
        )}
      </div>

      <div className='bg-dark flex justify-between px-40 py-8'>
        {loadingSports ? (
          <p>Loading...</p>
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
          <p>Loading...</p>
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
          <p>Loading...</p>
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
