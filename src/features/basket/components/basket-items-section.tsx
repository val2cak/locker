import { FC } from 'react';

import { BasketItem } from '../../../types/product-types';
import BasketCard from './basket-card';

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
  return (
    <div className='flex flex-col gap-6 p-5 bg-light'>
      {basket.map((item: BasketItem) => (
        <BasketCard
          key={item.product.id}
          item={item}
          onIncrease={() => updateAmount(item, 1)}
          onDecrease={() => updateAmount(item, -1)}
          onDelete={() => handleDelete(item.product.id)}
        />
      ))}
    </div>
  );
};

export default BasketItemsSection;
