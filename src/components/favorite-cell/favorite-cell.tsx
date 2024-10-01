import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

import { Product } from '../../types/product-types';
import { addFavorite, removeFavorite } from '../../hooks/favorites-state';
import HeartButton from './components/heart-button';

interface Props {
  item: Product;
  size: string;
}

const FavoriteCell: FC<Props> = ({ item, size }) => {
  const { id } = item;
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((product) => product.id === id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <HeartButton
      favorite={isFavorite}
      size={size}
      handleOnClick={handleFavorite}
    />
  );
};

export default FavoriteCell;
