import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card';
import Layout from '../layout';
import { selectFavorites } from '../../hooks/favorites-state';
import locale from '../../localization/locale';
import Button from '../../components/button/button';

const WishlistContainer = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  const { wishlist, shopNow, noItems } = locale.wishlist;

  const favorites = useSelector(selectFavorites);

  return (
    <Layout>
      <div className='flex flex-col items-start gap-8 sm:px-8 md:px-12 lg:px-16 px-40 py-8'>
        <span className='font-righteous uppercase text-lg'>{wishlist}</span>

        {favorites.length === 0 ? (
          <div className='flex flex-col gap-6 py-16 w-full items-center'>
            <span className='text-lg font-semibold'>{noItems}</span>
            <Button
              text={shopNow}
              className='!bg-primary'
              handleOnClick={handleShopNow}
            />
          </div>
        ) : (
          <div className='grid sm:grid-cols-1 md:grid-cols-3 grid-cols-4 2xl:grid-cols-5 justify-between gap-x-14 gap-y-8 md:gap-x-8 lg:gap-x-4'>
            {favorites?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WishlistContainer;
