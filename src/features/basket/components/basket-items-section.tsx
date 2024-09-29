import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { BasketItem } from '../../../types/product-types';
import BasketCard from './basket-card';
import Button from '../../../components/button/button';
import locale from '../../../localization/locale';

interface BasketItemsSectionProps {
  basket: BasketItem[];
  updateAmount: (item: BasketItem, change: number) => void;
  handleDelete: (id: string) => void;
}

const BasketItemsSection: FC<BasketItemsSectionProps> = ({
  basket,
  updateAmount,
  handleDelete,
}) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  const { shopNow, noItems } = locale.basket;

  return (
    <div className='flex flex-col gap-6 p-5 bg-light'>
      {basket.length === 0 ? (
        <div className='flex flex-col items-center gap-6 py-16'>
          <span className='text-lg font-semibold'>{noItems}</span>
          <Button
            text={shopNow}
            className='!bg-primary'
            handleOnClick={handleShopNow}
          />
        </div>
      ) : (
        <>
          {basket.map((item: BasketItem) => (
            <BasketCard
              key={item.product.id}
              item={item}
              onIncrease={() => updateAmount(item, 1)}
              onDecrease={() => updateAmount(item, -1)}
              onDelete={() => handleDelete(item.product.id)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default BasketItemsSection;
