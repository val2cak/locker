import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card';
import Layout from '../layout';
import { selectFavorites } from '../../hooks/favorites-state';
import locale from '../../localization/locale';

const WishlistContainer = () => {
  const { wishlist } = locale.common;

  const favorites = useSelector(selectFavorites);

  return (
    <Layout>
      <div className='flex flex-col items-start gap-8'>
        <span className='font-righteous uppercase text-lg'>{wishlist}</span>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 2xl:grid-cols-5 justify-between gap-x-14 gap-y-8'>
          {favorites &&
            favorites.length !== 0 &&
            favorites?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default WishlistContainer;
